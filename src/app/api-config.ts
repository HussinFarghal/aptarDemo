export const API_BASE_URL = 'https://my.aptar.tech/api/';
export const API_ENDPOINTS = {
  getCategory: () => `${API_BASE_URL}product-catalog/category`,
  getProductFamilies: () => `${API_BASE_URL}product-catalog/product-families/have-assets`,
  getFinalCustomers: () => `${API_BASE_URL}crm/partners/final-customers`,
};
