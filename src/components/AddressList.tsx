import React from 'react';
import { Home, Building2, Users, MapPin, Trash2, Edit } from 'lucide-react';
import { useLocationStore } from '../store/locationStore';
import type { Address } from '../types/address';

const getAddressIcon = (type: Address['type']) => {
  switch (type) {
    case 'home':
      return <Home className="h-6 w-6" />;
    case 'office':
      return <Building2 className="h-6 w-6" />;
    case 'other':
      return <Users className="h-6 w-6" />;
  }
};

export const AddressList: React.FC = () => {
  const { addresses, deleteAddress, setSelectedAddress } = useLocationStore();

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <div
          key={address.id}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex items-start gap-4">
            <div className="text-blue-500">
              {getAddressIcon(address.type)}
            </div>
            <div className="flex-1">
              <h3 className="font-medium capitalize">{address.type}</h3>
              <p className="text-gray-600 text-sm">{address.details}</p>
              <p className="text-gray-600 text-sm">{address.apartment}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedAddress(address)}
                className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <Edit className="h-5 w-5" />
              </button>
              <button
                onClick={() => deleteAddress(address.id)}
                className="p-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};