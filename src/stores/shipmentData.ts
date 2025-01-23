import type { ShipmentData } from '@/libs/schemas/checkout'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ShipmentDataState {
	shipmentData: ShipmentData
	setShipmentData: (shipmentData: ShipmentData) => void
}

export const useShipmentData = create(
	persist<ShipmentDataState>(
		(set) => ({
			shipmentData: {
				name: undefined,
				address: undefined,
				mobileNumber: '',
				city: undefined,
				zip: undefined,
			},
			setShipmentData: (shipmentData: ShipmentData) =>
				set((state) => {
					return {
						shipmentData,
					}
				}),
		}),
		{
			name: 'shipmentData',
		},
	),
)
