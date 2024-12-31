import { create } from 'zustand';
import type { Address, LocationState } from '../types/address';

export const useLocationStore = create<LocationState>((set) => ({
  addresses: [],
  selectedAddress: null,
  isLocationEnabled: false,
  addAddress: (address) =>
    set((state) => ({
      addresses: [...state.addresses, { ...address, id: crypto.randomUUID() }],
    })),
  updateAddress: (id, address) =>
    set((state) => ({
      addresses: state.addresses.map((addr) =>
        addr.id === id ? { ...addr, ...address } : addr
      ),
    })),
  deleteAddress: (id) =>
    set((state) => ({
      addresses: state.addresses.filter((addr) => addr.id !== id),
    })),
  setSelectedAddress: (address) => set({ selectedAddress: address }),
  setLocationEnabled: (enabled) => set({ isLocationEnabled: enabled }),
}));