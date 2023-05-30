import {
  ServiceType,
  Shops,
  AddShop
} from '@components/admin-profile/shop/types';
import { axiosClient } from '../..';

export const getVendorShopDetailsByVendorId = async (id: number) => {
  return await axiosClient
    .get<Shops>(`/Vendorshop/getshops/${id}`)
    .then((res) => res.data);
};

export const addVendorShopByVendorId = async (id: number, shop: AddShop) => {
  return await axiosClient
    .post<any>(`/Vendorshop/addshop/${id}`, shop)
    .then((res) => res.data);
};

export const uploadVendorShopByVendorId = async (
  id: number,
  shop: BinaryData
) => {
  const data = { ShopsFile: { ...shop } };

  return await axiosClient
    .post<any>(`/Vendorshop/uploadshops/${id}`, data)
    .then((res) => res.data);
};

export const downloadVendorShopSampleFile = async () => {
  try {
    return await axiosClient
      .post<any>(`/Vendorshop/downloadsample`)
      .then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobTypes = async () => {
  return await axiosClient
    .get<ServiceType[]>(`/jobtypes/alljobs`)
    .then((res) => res.data);
};
