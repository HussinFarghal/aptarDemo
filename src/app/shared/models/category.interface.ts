export interface ICategory {
  comingSoon : boolean;
  icon : string;
  parentCategoryId : string;
  parentCategory : ICategory | null;
  childCategories : ICategory[];
  productFamilies : any; // Define according to what this actually includes
  name : string;
  displayOrder : number;
  createdBy : string | null;
  createdOn : string | null;
  lastUpdatedBy : string | null;
  lastUpdatedOn : string | null;
  id : string;
}
