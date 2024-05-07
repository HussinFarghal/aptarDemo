export interface ICategory {
  comingSoon : boolean;
  icon : string;
  parentCategoryId : string | null;
  parentCategory : ICategory | null;
  childCategories : (ICategory | null)[] | null;
  productFamilies : any | null;
  name : string;
  displayOrder : number;
  createdBy : any | null;
  createdOn : any | null;
  lastUpdatedBy : any | null;
  lastUpdatedOn : any | null;
  id : string;
}
