import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ShipmentDataInterface } from '../../types'

interface ShipmentDataState {
	shipmentData: ShipmentDataInterface
	setShipmentData: (shipmentData: ShipmentDataInterface) => void
}

export const useShipmentData = create(
	persist<ShipmentDataState>(
		(set) => ({
			shipmentData: {
				name: '',
				address: '',
				mobileNumber: '',
				city: '',
				zip: '',
			},
			setShipmentData: (shipmentData: ShipmentDataInterface) =>
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
