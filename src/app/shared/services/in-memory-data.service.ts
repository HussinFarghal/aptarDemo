import {Injectable} from '@angular/core';
import {InMemoryDbService, RequestInfo, ResponseOptions} from 'angular-in-memory-web-api';
import {IProductCatalog, IProductFamilyFile} from '@shared/models/product-catalog.interface';
import {ICategory} from '@shared/models/category.interface';
import {IFinalProduct, IFinalProducts, IPageInformation} from '@shared/models/final-products.interface';
import {ICustomer} from "@shared/models/customer.interface";

const productFamilyNames : string[] = [
  'Ecolite Directional Pour Spout',
  'UltraFlex Nozzle',
  'PowerSpray System',
  'AquaFlow Valve',
  'EcoMax Trigger',
  'SuperJet Sprayer',
  'CleanStream Pump',
  'QuickFlow Adapter',
  'TurboSpray Pump',
  'ProGrip Handle',
  'FlexiFlow Nozzle',
  'HydroJet Valve',
  'MaxFlow Sprayer',
  'EcoSpray System',
  'Precision Nozzle',
  'RapidFlow Adapter',
  'Streamline Pump',
  'AquaSpray Nozzle',
  'JetStream System',
  'FlowMax Handle'
];

const customers : string[] = [
  'henkin',
  'unilever',
  'West Coast',
  'North Region'
];

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const categories = this.generateCategories(10);
    const products = this.generateProducts(100);
    const finalCustomers = this.generateCustomers(customers.length);
    const finalProducts = this.generateFinalProducts(1000);

    return {products, categories, finalCustomers, finalProducts};
  }

  get(reqInfo : RequestInfo) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'finalProducts') {
      const productQuery = reqInfo.query.get('productName');
      const assetQuery = reqInfo.query.get('assetName');
      const productName = productQuery ? productQuery[0] : '';
      const assetName = assetQuery ? assetQuery[0] : '';

      if (productName || assetName) {
        const db = reqInfo.utils.getDb() as { finalProducts : IFinalProducts };
        const finalProductsList = db.finalProducts.list;
        let filteredProducts = finalProductsList.filter((product : IFinalProduct) =>
          (productName ? product.displayName.includes(productName) : true) &&
          (assetName ? product.displayName.includes(assetName) : true)
        );

        if (filteredProducts.length === 0 && productName) {
          // If no products match the assetName, return products matching productName only
          filteredProducts = finalProductsList.filter((product : IFinalProduct) =>
            product.displayName.includes(productName)
          );
        }

        return reqInfo.utils.createResponse$(() => {
          return {
            body: {list: filteredProducts},
            status: 200
          } as ResponseOptions;
        });
      } else {
        return reqInfo.utils.createResponse$(() => {
          return {
            body: {list: []},
            status: 200
          } as ResponseOptions;
        });
      }
    }
    return undefined; // Let the default GET handle all other collections
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
    return Array.from({length: count}, (_, index) => this.createProduct(index + 1, index % productFamilyNames.length));
  }

  private createProduct(id : number, nameIndex : number) : IProductCatalog {
    const name = `Product Catalog ${id}`;
    const displayOrder = id;
    const icon = `icon-${id}`;
    const shortDescription = `Short description for product catalog ${id}`;
    const description = `Description for product catalog ${id}`;
    const categoryId = `category-${id}`;
    const productFamilyFiles = this.generateProductFamilyFiles(id, 5, nameIndex);

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

  private generateProductFamilyFiles(productFamilyId : number, count : number, nameIndex : number) : IProductFamilyFile[] {
    return Array.from({length: count}, (_, index) => this.createProductFamilyFile(productFamilyId, index + 1, nameIndex));
  }

  private createProductFamilyFile(productFamilyId : number, fileId : number, nameIndex : number) : IProductFamilyFile {
    const productFamily : IProductCatalog = {
      name: productFamilyNames[nameIndex], // Use a unique name from the array
      displayOrder: productFamilyId,
      icon: `icon-${productFamilyId}`,
      shortDescription: `Short description for ${productFamilyNames[nameIndex]}`,
      description: `Description for ${productFamilyNames[nameIndex]}`,
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
    return Array.from({length: count}, (_, index) => this.createCustomer(index));
  }

  private createCustomer(index : number) : ICustomer {
    return {
      partnerId: this.generateUUID(),
      finalCustomer: customers[index % customers.length]
    };
  }

  private generateFinalProducts(count : number) : IFinalProducts {
    const list = Array.from({length: count}, (_, index) => this.createFinalProduct(index + 1));
    const pageInformation : IPageInformation = {
      pageCount: Math.ceil(count / 10),
      totalItemCount: count,
      pageNumber: 1,
      pageSize: 10
    };
    return {list, pageInformation};
  }

  private createFinalProduct(id : number) : IFinalProduct {
    const randomNameIndex = Math.floor(Math.random() * productFamilyNames.length);
    const randomCustomerIndex = Math.floor(Math.random() * customers.length);
    return {
      displayName: `${id} - ${productFamilyNames[randomNameIndex]}.pdf`,
      mimeType: 'application/pdf',
      size: Math.floor(Math.random() * 1000000) + 100000,
      bucket: 'all-customers',
      minioPrefix: `/product-${this.generateUUID()}/${productFamilyNames[randomNameIndex]}.pdf`,
      minioVersion: this.generateUUID(),
      metadata: {
        createdBy: 'creator@example.com',
        createdOn: new Date().toISOString()
      },
      assetTypeGroupId: 2,
      assetTypeGroup: {
        name: 'Product',
        displayOrder: 2,
        id: 2
      },
      assetTypeId: this.generateUUID(),
      assetType: {
        parentAssetTypeId: null,
        assetTypeGroupId: 2,
        icon: '',
        parentAssetType: null,
        assetTypeGroup: {
          name: 'Product',
          displayOrder: 2,
          id: 2
        },
        childAssetTypes: null,
        name: 'Technical Drawing',
        displayOrder: 1,
        createdBy: 'ahmed.mohsen.ext@aptar.com',
        createdOn: new Date().toISOString(),
        lastUpdatedBy: 'ahmed.mohsen.ext@aptar.com',
        lastUpdatedOn: null,
        id: this.generateUUID()
      },
      accessTypeId: 1,
      accessType: null,
      partnerId: null,
      partner: null,
      requestReplyFiles: null,
      productFamilyFiles: null,
      fileFinalCustomers: this.generateFileFinalCustomers(2, id), // Ensure we generate multiple final customers
      customerProjectFiles: null,
      fileStatus: 1,
      createdBy: 'creator@example.com',
      createdOn: new Date().toISOString(),
      lastUpdatedBy: null,
      lastUpdatedOn: new Date().toISOString(),
      id: this.generateUUID()
    };
  }

  private generateFileFinalCustomers(count : number, fileId : number) {
    return Array.from({length: count}, () => {
      const randomCustomerIndex = Math.floor(Math.random() * customers.length);
      return {
        fileId: this.generateUUID(),
        partnerId: this.generateUUID(),
        finalCustomer: customers[randomCustomerIndex],
        file: null,
        partner: null,
        createdBy: '',
        createdOn: new Date().toISOString(),
        lastUpdatedBy: null,
        lastUpdatedOn: new Date().toISOString(),
        id: this.generateUUID()
      };
    });
  }

  private generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
