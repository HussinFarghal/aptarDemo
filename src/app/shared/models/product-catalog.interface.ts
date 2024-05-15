export interface IProductFamilyFile {
  productFamilyId : string;
  fileId : string;
  productFamily : IProductCatalog
  file : any | null;
  id : string;
}

export interface IProductCatalog {
  name : string;
  displayOrder : number;
  icon : string;
  shortDescription : any | null;
  description : any | null;
  categoryId : string;
  category : any | null;
  compatibilityVariances : any | null;
  productFamilyMarketSegments : any | null;
  productRegions : any | null;
  productFamilyApplicationFields : any | null;
  productFamilyDigitalServices : any[];
  productFamilyFiles : IProductFamilyFile [];
  cmsTemplateId : any | null;
  cmsTemplate : any | null;
  productData : any | null;
  createdBy : any | null;
  createdOn : string | null;
  lastUpdatedBy : any | null;
  lastUpdatedOn : string | null;
  id : string;
}
