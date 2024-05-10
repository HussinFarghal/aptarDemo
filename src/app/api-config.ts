export const API_BASE_URL = 'https://my.aptar.tech/api/';
export const API_ENDPOINTS = {
  getCategory: () => `${API_BASE_URL}product-catalog/category`,
  getProductCatalog: () => `${API_BASE_URL}product-catalog/product-families/have-assets`,
  getFinalCustomers: () => `${API_BASE_URL}crm/partners/final-customers`,
  getProductFamily: (pageNumber : number, pageSize : number, sortDataColumnName : string, sortDataDirection : string, productFamilyId : string, assetName? : string, finalCustomer? : string) =>
    `${API_BASE_URL}asset/product-family?pageNumber=${pageNumber}&pageSize=${pageSize}&sortData.columnName=${sortDataColumnName}&sortData.direction=${sortDataDirection}
    &productFamilyId=${productFamilyId}&assetName=${assetName}&finalCustomer=${finalCustomer}`,
};
