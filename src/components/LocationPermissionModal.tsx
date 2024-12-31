import React from 'react';
import { MapPin, Search } from 'lucide-react';
import { useLocationStore } from '../store/locationStore';

interface Props {
  onEnableLocation: () => void;
  onManualSearch: () => void;
}

export const LocationPermissionModal: React.FC<Props> = ({
  onEnableLocation,
  onManualSearch,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="text-center">
          <MapPin className="mx-auto h-12 w-12 text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Enable Location Services</h2>
          <p className="text-gray-600 mb-6">
            Please enable location services to help us serve you better with accurate
            delivery information.
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={onEnableLocation}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="h-5 w-5" />
            Enable Location
          </button>
          
          <button
            onClick={onManualSearch}
            className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5" />
            Search Manually
          </button>
        </div>
      </div>
    </div>
  );
};