import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Props {
  center: google.maps.LatLngLiteral;
  onLocationChange: (location: google.maps.LatLngLiteral) => void;
}

export const Map: React.FC<Props> = ({ center, onLocationChange }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center,
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
      });

      markerRef.current = new google.maps.Marker({
        position: center,
        map,
        draggable: true,
      });

      markerRef.current.addListener('dragend', () => {
        const position = markerRef.current?.getPosition();
        if (position) {
          onLocationChange({ lat: position.lat(), lng: position.lng() });
        }
      });
    });
  }, []);

  return <div ref={mapRef} className="w-full h-[400px] rounded-lg" />;
};