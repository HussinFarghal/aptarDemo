interface IProductFamilyFile {
  productFamilyId : string;
  fileId : string;
  productFamily : IProductFamily | null;
  file : any | null;
  id : string;
}

export interface IProductFamily {
  name : string;
  displayOrder : number;
  icon : string;
  shortDescription : any | null;
  description : any | null;
  categoryId : string;
  category : any | null;
  compatibilityVariances : any | null;
  recyclabilityVariances : any | null;
  productFamilyMarketSegments : any | null;
  productRegions : any | null;
  productFamilyApplicationFields : any | null;
  productFamilyAptarSegments : any | null;
  productFamilyDigitalServices : any[];
  productFamilyFiles : (IProductFamilyFile | null)[];
  cmsTemplateId : any | null;
  cmsTemplate : any | null;
  productData : any | null;
  createdBy : any | null;
  createdOn : string;
  lastUpdatedBy : any | null;
  lastUpdatedOn : any | null;
  id : string;
}
