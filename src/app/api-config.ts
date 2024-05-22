import {environment} from "../environments/environment";

export const API_BASE_URL = environment.apiUrl;
export const API_ENDPOINTS = {
  getCategories: () => `${API_BASE_URL}categories`,
  getProducts: () => `${API_BASE_URL}products`,
  getFinalCustomers: () => `${API_BASE_URL}finalCustomers`,
  getFinalProducts: (pageNumber : number, pageSize : number, sortDataColumnName : string, sortDataDirection : string, productFamilyId : string, fileName? : string, finalCustomer? : string) =>
    `${API_BASE_URL}product-catalog/product-families/${productFamilyId}/assets?pageNumber=${pageNumber}&pageSize=${pageSize}
    &sortData.columnName=${sortDataColumnName}&sortData.direction=${sortDataDirection}&fileName=${fileName}&finalCustomer=${finalCustomer}`,
};
