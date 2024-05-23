import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IProductCatalog, IProductFamilyFile} from '@shared/models/product-catalog.interface';
import {ICategory} from '@shared/models/category.interface';
import {ICustomer} from '@shared/models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const categories = this.generateCategories(1);
    const products = this.generateProducts(1);
    const finalCustomers = this.generateCustomers(1);

    return {products, categories, finalCustomers};
  }

  private generateCategories(count : number) : ICategory[] {
    return Array.from({length: count}, (_, index) => this.createCategory(index + 1, count));
  }

  private createCategory(id : number, total : number) : ICategory {
    const childCategories = id < total / 2 ? this.generateChildCategories(id, total) : [];
    return {
      comingSoon: Math.random() > 0.5,
      icon: `icon-${id}`,
      parentCategoryId: id < total / 2 ? `category-${Math.floor(id / 2)}` : '',
      parentCategory: null,
      childCategories,
      productFamilies: [], // Populate with product families as needed
      name: `Category ${id}`,
      displayOrder: id,
      createdBy: null,
      createdOn: new Date().toISOString(),
      lastUpdatedBy: null,
      lastUpdatedOn: new Date().toISOString(),
      id: `category-${id}`
    };
  }

  private generateChildCategories(parentId : number, total : number) : ICategory[] {
    return Array.from({length: Math.floor(Math.random() * (total / 2))}, (_, index) =>
      this.createCategory(parentId * 10 + index + 1, total)
    );
  }

  private generateProducts(count : number) : IProductCatalog[] {
    return Array.from({length: count}, (_, index) => this.createProduct(index + 1));
  }

  private createProduct(id : number) : IProductCatalog {
    const name = `Product Catalog ${id}`;
    const displayOrder = id;
    const icon = `icon-${id}`;
    const shortDescription = `Short description for product catalog ${id}`;
    const description = `Description for product catalog ${id}`;
    const categoryId = `category-${id}`;
    const productFamilyFiles = this.generateProductFamilyFiles(id, 5);

    return {
      name,
      displayOrder,
      icon,
      shortDescription,
      description,
      categoryId,
      category: null,
      compatibilityVariances: null,
      productFamilyMarketSegments: null,
      productRegions: null,
      productFamilyApplicationFields: null,
      productFamilyDigitalServices: [],
      productFamilyFiles,
      cmsTemplateId: null,
      cmsTemplate: null,
      productData: null,
      createdBy: null,
      createdOn: new Date().toISOString(),
      lastUpdatedBy: null,
      lastUpdatedOn: new Date().toISOString(),
      id: `product-catalog-${id}`
    };
  }

  private generateProductFamilyFiles(productFamilyId : number, count : number) : IProductFamilyFile[] {
    return Array.from({length: count}, (_, index) => this.createProductFamilyFile(productFamilyId, index + 1));
  }

  private createProductFamilyFile(productFamilyId : number, fileId : number) : IProductFamilyFile {
    const productFamily : IProductCatalog = {
      name: `Product Family ${productFamilyId}`,
      displayOrder: productFamilyId,
      icon: `icon-${productFamilyId}`,
      shortDescription: `Short description for product family ${productFamilyId}`,
      description: `Description for product family ${productFamilyId}`,
      categoryId: `category-${productFamilyId}`,
      category: null,
      compatibilityVariances: null,
      productFamilyMarketSegments: null,
      productRegions: null,
      productFamilyApplicationFields: null,
      productFamilyDigitalServices: [],
      productFamilyFiles: [], // Avoid deep nesting
      cmsTemplateId: null,
      cmsTemplate: null,
      productData: null,
      createdBy: null,
      createdOn: new Date().toISOString(),
      lastUpdatedBy: null,
      lastUpdatedOn: new Date().toISOString(),
      id: `product-family-${productFamilyId}`
    };

    return {
      productFamilyId: `product-family-${productFamilyId}`,
      fileId: `file-${fileId}`,
      productFamily: productFamily,
      file: null,
      id: `product-family-file-${productFamilyId}-${fileId}`
    };
  }

  private generateCustomers(count : number) : ICustomer[] {
    return Array.from({length: count}, (_, index) => this.createCustomer(index + 1));
  }

  private createCustomer(id : number) : ICustomer {
    return {
      partnerId: `partner-${id}`,
      finalCustomer: `Final Customer ${id}`
    };
  }
}
