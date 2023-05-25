export type Shops = Shop[];

export interface Shop {
  id: number;
  vendorId: number;
  shopName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  emergencyRoadService: boolean;
  mobileService: boolean;
  mobileServiceRate: number;
  mechanicalShop: boolean;
  mechanicalShopRate: number;
  trailerShop: boolean;
  trailerShopRate: number;
  bodyShop: boolean;
  bodyShopRate: number;
  userId: number;
  verified: boolean;
  active: boolean;
  shopHoursOfOperations: ShopHoursOfOperation[];
  serviceTypes: ServiceType[];
}

export interface ShopHoursOfOperation {
  dayOfTheWeek: string;
  startTime: string;
  endTime: string;
  hours24: boolean;
}

export interface ServiceType {
  id: number;
  category: string;
  serviceName: string;
}

export interface ShopList {
  id: number;
  address: string;
  phone: string;
  shopName: string;
}
