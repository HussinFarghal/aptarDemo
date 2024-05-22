import {environment} from "../environments/environment";

export const API_BASE_URL = environment.apiUrl;
export const API_ENDPOINTS = {
  getCategories: () => `${API_BASE_URL}categories`,
  getProducts: () => `${API_BASE_URL}products`,
  getFinalCustomers: () => `${API_BASE_URL}finalCustomers`,
  getFinalProducts: () => `${API_BASE_URL}finalProducts`,
};
