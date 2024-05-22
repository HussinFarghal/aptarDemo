export interface IPageInformation {
  pageCount : number;
  totalItemCount : number;
  pageNumber : number;
  pageSize : number;
}

export interface IFinalProduct {
  displayName : string;
  mimeType : string;
  size : number;
  bucket : string;
  minioPrefix : string;
  minioVersion : string;
  metadata : {
    createdBy : string;
    createdOn : string;
  };
  assetTypeGroupId : number;
  assetTypeGroup : {
    name : string;
    displayOrder : number;
    id : number;
  };
  assetTypeId : string;
  assetType : {
    parentAssetTypeId : string | null;
    assetTypeGroupId : number;
    icon : string;
    parentAssetType : any | null;
    assetTypeGroup : {
      name : string;
      displayOrder : number;
      id : number;
    };
    childAssetTypes : any | null;
    name : string;
    displayOrder : number;
    createdBy : string;
    createdOn : string;
    lastUpdatedBy : string;
    lastUpdatedOn : string | null;
    id : string;
  };
  accessTypeId : number;
  accessType : any | null;
  partnerId : any | null;
  partner : any | null;
  requestReplyFiles : any | null;
  productFamilyFiles : any | null;
  fileFinalCustomers : Array<{
    fileId : string;
    partnerId : string;
    finalCustomer : string;
    file : any | null;
    partner : any | null;
    createdBy : string;
    createdOn : string;
    lastUpdatedBy : string | null;
    lastUpdatedOn : string;
    id : string;
  }>;
  customerProjectFiles : any | null;
  fileStatus : number;
  createdBy : string;
  createdOn : string;
  lastUpdatedBy : string | null;
  lastUpdatedOn : string;
  id : string;
}

export interface IFinalProducts {
  list : IFinalProduct[];
  pageInformation : IPageInformation;
}
