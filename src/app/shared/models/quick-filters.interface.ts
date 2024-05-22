export interface IQuickFilters {
  assetName : string | null;
  finalCustomer : {
    label : string;
    value : string;
  } | null;
  product : {
    label : string;
    value : string;
    categoryId : string;
  } | null;
}
