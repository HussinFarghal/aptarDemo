export interface Asset {
  id : string;
  displayName : string;
  assetTypeGroupId : number;
  lastUpdatedBy : string;
  lastUpdatedOn : string;
  assetTypeId : string;
  assetType : AssetType;
  fileFinalCustomers : any;  // Use appropriate type if known
}

export interface AssetType {
  id : string;
  name : string;
  displayOrder : number;
}

export interface PageInformation {
  pageCount : number;
  totalItemCount : number;
  pageNumber : number;
  pageSize : number;
}

export interface IProductFamily {
  list : Asset[];
}
