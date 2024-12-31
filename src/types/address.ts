export interface Address {
  id: string;
  type: 'home' | 'office' | 'other';
  details: string;
  apartment: string;
  location: {
    lat: number;
    lng: number;
  };
  formattedAddress: string;
}

export interface LocationState {
  addresses: Address[];
  selectedAddress: Address | null;
  isLocationEnabled: boolean;
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  setSelectedAddress: (address: Address | null) => void;
  setLocationEnabled: (enabled: boolean) => void;
}