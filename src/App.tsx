import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { LocationPermissionModal } from './components/LocationPermissionModal';
import { Map } from './components/Map';
import { AddressForm } from './components/AddressForm';
import { AddressList } from './components/AddressList';
import { useLocationStore } from './store/locationStore';

function App() {
  const [showPermissionModal, setShowPermissionModal] = useState(true);
  const [currentLocation, setCurrentLocation] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  });
  const [showAddressForm, setShowAddressForm] = useState(false);
  const { isLocationEnabled, setLocationEnabled } = useLocationStore();

  const handleEnableLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationEnabled(true);
          setShowPermissionModal(false);
        },
        () => {
          alert('Unable to get your location. Please try searching manually.');
        }
      );
    }
  };

  const handleManualSearch = () => {
    setShowPermissionModal(false);
    // Default to a central location
    setCurrentLocation({ lat: 40.7128, lng: -74.0060 });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {showPermissionModal && !isLocationEnabled && (
        <LocationPermissionModal
          onEnableLocation={handleEnableLocation}
          onManualSearch={handleManualSearch}
        />
      )}

      <div className="max-w-2xl mx-auto p-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Delivery Address
          </h1>
          <p className="text-gray-600">
            Set your delivery location to start ordering
          </p>
        </header>

        {(isLocationEnabled || !showPermissionModal) && (
          <div className="space-y-6">
            <Map
              center={currentLocation}
              onLocationChange={setCurrentLocation}
            />

            {!showAddressForm ? (
              <div className="space-y-6">
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="h-5 w-5" />
                  Add New Address
                </button>

                <AddressList />
              </div>
            ) : (
              <AddressForm
                location={currentLocation}
                onSave={() => setShowAddressForm(false)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;