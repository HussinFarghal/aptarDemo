import {environment} from "../environments/environment";

export const API_BASE_URL = environment.apiUrl;
export const API_ENDPOINTS = {
  getCategories: () => `${API_BASE_URL}categories`,
  getProducts: () => `${API_BASE_URL}products`,
  addProducts: () => `${API_BASE_URL}addProducts`,
  deleteProducts: (id: string) => `${API_BASE_URL}deleteProducts/${id}`,
  getFinalCustomers: () => `${API_BASE_URL}finalCustomers`,
  getFinalProducts: (productName : string, assetName : string) =>
    `${API_BASE_URL}finalProducts?productName=${productName}&assetName=${assetName}`,
};
