import React, { useState } from 'react';
import { Home, Building2, Users, MapPin } from 'lucide-react';
import { useLocationStore } from '../store/locationStore';
import type { Address } from '../types/address';

interface Props {
  location: google.maps.LatLngLiteral;
  onSave: () => void;
}

export const AddressForm: React.FC<Props> = ({ location, onSave }) => {
  const addAddress = useLocationStore((state) => state.addAddress);
  const [formData, setFormData] = useState({
    type: 'home' as Address['type'],
    details: '',
    apartment: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAddress({
      ...formData,
      location,
      formattedAddress: 'Formatted address will be fetched from Google Maps',
    });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            House/Flat/Block No.
          </label>
          <input
            type="text"
            required
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apartment/Road/Area
          </label>
          <input
            type="text"
            required
            value={formData.apartment}
            onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Save as
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: 'home' })}
              className={`flex-1 p-4 rounded-lg border ${
                formData.type === 'home'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300'
              }`}
            >
              <Home className="mx-auto h-6 w-6 mb-2" />
              <span className="block text-sm">Home</span>
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: 'office' })}
              className={`flex-1 p-4 rounded-lg border ${
                formData.type === 'office'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300'
              }`}
            >
              <Building2 className="mx-auto h-6 w-6 mb-2" />
              <span className="block text-sm">Office</span>
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: 'other' })}
              className={`flex-1 p-4 rounded-lg border ${
                formData.type === 'other'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300'
              }`}
            >
              <Users className="mx-auto h-6 w-6 mb-2" />
              <span className="block text-sm">Other</span>
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
      >
        <MapPin className="h-5 w-5" />
        Save Address
      </button>
    </form>
  );
};