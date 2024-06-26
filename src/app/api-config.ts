import {environment} from "@env/environment";

export const API_BASE_URL = environment.mockApi.isMockEnabled ? environment.mockApi.apiUrl : environment.apiUrl;
export const API_ENDPOINTS = {
  getCategories: () => `${API_BASE_URL}categories`,
  getProducts: () => `${API_BASE_URL}products`,
  addProducts: () => `${API_BASE_URL}addProducts`,
  deleteProducts: (id: string) => `${API_BASE_URL}deleteProducts/${id}`,
  getFinalCustomers: () => `${API_BASE_URL}finalCustomers`,
  getFinalProducts: (productName: string, assetName: string) =>
    `${API_BASE_URL}finalProducts?productName=${productName}&assetName=${assetName}`,
  getFormTypes: () => `${API_BASE_URL}requests/types`,
  getRequests: () => `${API_BASE_URL}requests`,
};
