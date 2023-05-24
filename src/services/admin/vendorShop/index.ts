import { Shop, Shops } from '@components/admin-profile/shop/types';
import { axiosClient } from '../..';

export const getVendorShopDetailsByVendorId = async (id: number) => {
  const response = await axiosClient.get<Shops>(`/Vendorshop/getshops/${id}`);

  return response.data;
};

export const addVendorShopByVendorId = async (id: number, shop: Shop) => {
  const data = { detail: { ...shop } };
  const response = await axiosClient.post<any>(
    `/Vendorshop/addshop/${id}`,
    data
  );

  return response.data;
};

export const uploadVendorShopByVendorId = async (
  id: number,
  shop: BinaryData
) => {
  const data = { ShopsFile: { ...shop } };
  const response = await axiosClient.post<any>(
    `/Vendorshop/uploadshops/${id}`,
    data
  );

  return response.data;
};

export const downloadVendorShopSampleFile = async () => {
  const response = await axiosClient.post<any>(`/Vendorshop/downloadsample`);

  return response.data;
};
