import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {IProductCatalog} from "../models/product-catalog.interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const products : IProductCatalog[] = [
      {
        id: '1',
        name: 'Product 1',
        displayOrder: 1,
        icon: 'icon1',
        shortDescription: 'Short description 1',
        description: 'Description 1',
        categoryId: '1',
        category: 'Category 1',
        compatibilityVariances: 'Compatibility variances 1',
        productFamilyMarketSegments: 'Product family market segments 1',
        productRegions: 'Product regions 1',
        productFamilyApplicationFields: 'Product family application fields 1',
        productFamilyDigitalServices: [],
        productFamilyFiles: [],
        cmsTemplateId: undefined,
        cmsTemplate: undefined,
        productData: undefined,
        createdBy: undefined,
        createdOn: null,
        lastUpdatedBy: undefined,
        lastUpdatedOn: null
      }
    ];
    return {products};
  }

}
