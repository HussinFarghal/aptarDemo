export const API_BASE_URL = 'https://my.aptar.mobi/api/';
export const API_ENDPOINTS = {
  getCategory: () => `${API_BASE_URL}product-catalog/category`,
  getProductCatalog: () => `${API_BASE_URL}product-catalog/product-family-assets`,
  getFinalCustomers: () => `${API_BASE_URL}crm/partners/final-customers`,
  getProductFamily: (pageNumber : number, pageSize : number, sortDataColumnName : string, sortDataDirection : string, productFamilyId : string, fileName? : string, finalCustomer? : string) =>
    `${API_BASE_URL}product-catalog/product-families/${productFamilyId}/assets?pageNumber=${pageNumber}&pageSize=${pageSize}
    &sortData.columnName=${sortDataColumnName}&sortData.direction=${sortDataDirection}&fileName=${fileName}&finalCustomer=${finalCustomer}`,
};
