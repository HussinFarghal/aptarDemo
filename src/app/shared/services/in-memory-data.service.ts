import {Injectable} from "@angular/core";
import {InMemoryDbService, RequestInfo, ResponseOptions,} from "angular-in-memory-web-api";
import {IProductCatalog, IProductFamilyFile,} from "@shared/models/product-catalog.interface";
import {ICategory} from "@shared/models/category.interface";
import {IFinalProduct, IFinalProducts, IPageInformation,} from "@shared/models/final-products.interface";
import {ICustomer} from "@shared/models/customer.interface";
import {IFormType} from "@shared/models/form-type.interface";

const productFamilyNames: string[] = [
  "Ecolite Directional Pour Spout",
  "UltraFlex Nozzle",
  "PowerSpray System",
  "AquaFlow Valve",
  "EcoMax Trigger",
  "SuperJet Sprayer",
  "CleanStream Pump",
  "QuickFlow Adapter",
  "TurboSpray Pump",
  "ProGrip Handle",
  "FlexiFlow Nozzle",
  "HydroJet Valve",
  "MaxFlow Sprayer",
  "EcoSpray System",
  "Precision Nozzle",
  "RapidFlow Adapter",
  "Streamline Pump",
  "AquaSpray Nozzle",
  "JetStream System",
  "FlowMax Handle",
];

const customers: string[] = [
  "henkin",
  "unilever",
  "West Coast",
  "North Region",
];
//                 validators: {
//                   validation: [ipValidator],
//                 },
@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {
  }

  createDb() {
    const categories = this.generateCategories(50);
    const products = this.generateProducts(10);
    const finalCustomers = this.generateCustomers(customers.length);
    const finalProducts = this.generateFinalProducts(1000);
    const getFormsType: IFormType[] = [
      {
        "id": 21,
        "name": "ColorMatch",
        "fields": [
          {
            "key": "colorType",
            "type": "int",
            "uiType": "radio",
            "properties": {
              "label": "Color Type",
              "placeholder": "Color Type"
            },
            "options": [
              {
                "label": "Pantone",
                "value": "Pantone"
              },
              {
                "label": "RGB",
                "value": "RGB"
              },
              {
                "label": "HEX",
                "value": "HEX"
              },
              {
                "label": "CMYK",
                "value": "CMYK"
              }
            ],
            "validationRules": [
              {
                "expression": null,
                "type": "Required",
                "message": null
              },
              {
                "type": "InOptions",
                "message": null
              }
            ]
          },
          {
            "key": "color",
            "type": "string",
            "uiType": "color",
            "properties": {
              "label": "Color",
              "placeholder": "Color"
            },
            "options": null,
            "validationRules": [
              {
                "expression": null,
                "type": "Required",
                "message": null
              }
            ]
          },
          {
            "key": "partNumber",
            "type": "string",
            "uiType": "partNumberMask",
            "properties": {
              "label": "Part Number",
              "placeholder": "e.g., p-12345"
            },
            "options": null,
            "validationRules": [
              {
                "expression": null,
                "type": "Required",
                "message": null
              },
              {
                "pattern": "^p-\\d+$",
                "type": "Pattern",
                "message": "Part number must start with \"p-\" and be followed by positive numbers."
              }
            ]
          },
          {
            "key": "translucencePercentage",
            "type": "int",
            "uiType": "input",
            "properties": {
              "label": "Translucence percentage"
            },
            "options": null,
            "validationRules": [
              {
                "expression": null,
                "type": "Required",
                "message": null
              },
              {
                "min": 1.0,
                "type": "Min",
                "message": "Number must be at least 1."
              },
              {
                "max": 100.0,
                "type": "Max",
                "message": "Number must be at most 100."
              }
            ]
          },
          {
            "key": "sampleSubmission",
            "type": "bool",
            "uiType": "checkbox",
            "properties": {
              "label": "Sample Submission"
            },
            "options": null,
            "validationRules": null
          },
          {
            "key": "shippingAddress",
            "type": "string",
            "uiType": "textarea",
            "properties": {
              "rows": 3,
              "label": "Shipping Address"
            },
            "options": null,
            "validationRules": [
              {
                "expression": "sampleSubmission",
                "type": "Required",
                "message": null
              },
              {
                "maxLength": 250,
                "type": "MaxLength",
                "message": null
              }
            ]
          },
          {
            "key": "shippingDate",
            "type": "DateTime",
            "uiType": "date",
            "properties": {
              "label": "Shipping Date",
              "placeholder": "Choose a date please"
            },
            "options": null,
            "validationRules": [
              {
                "expression": "sampleSubmission",
                "type": "Required",
                "message": null
              },
              {
                "minDate": null,
                "maxDate": "2024-10-23T00:00:00",
                "type": "DateRange",
                "message": null
              }
            ]
          }
        ]
      }
    ];
    return {
      products,
      categories,
      finalCustomers,
      finalProducts,
      getFormsType,
    };
  }

  get(reqInfo: RequestInfo) {
    const {collectionName, query} = reqInfo;

    if (collectionName === 'requests') {
      const urlSegments = reqInfo.url.split('/');
      const endpoint = urlSegments[urlSegments.length - 1];

      if (endpoint === 'types') {
        return reqInfo.utils.createResponse$(() => {
          return {
            body: this.createDb().getFormsType,
            status: 200,
          } as ResponseOptions;
        });
      }
    }
    return undefined; // Let the default GET handle all other collections
  }

  private generateCategories(count: number): ICategory[] {
    return Array.from({length: count}, (_, index) =>
      this.createCategory(index + 1, count)
    );
  }

  private createCategory(id: number, total: number): ICategory {
    const childCategories =
      id < total / 4 ? this.generateChildCategories(id, total) : [];
    return {
      comingSoon: Math.random() > 0.5,
      icon: `icon-${id}`,
      parentCategoryId: id < total / 42 ? `category-${Math.floor(id / 4)}` : "",
      parentCategory: null,
      childCategories,
      productFamilies: [], // Populate with product families as needed
      name: `Category ${id}`,
      displayOrder: id,
      createdBy: null,
      createdOn: new Date().toISOString(),
      lastUpdatedBy: null,
      lastUpdatedOn: new Date().toISOString(),
      id: `category-${id}`,
    };
  }

  private generateChildCategories(
    parentId: number,
    total: number
  ): ICategory[] {
    return Array.from(
      {length: Math.floor(Math.random() * (total / 4))},
      (_, index) => this.createCategory(parentId * 12 + index + 4, total)
    );
  }

  private generateProducts(count: number): IProductCatalog[] {
    return Array.from({length: count}, (_, index) =>
      this.createProduct(index + 1, index % productFamilyNames.length)
    );
  }

  private createProduct(id: number, nameIndex: number): IProductCatalog {
    const name = `Product Name - ${id}`;
    const displayOrder = id;
    const icon = `icon-${id}`;
    const shortDescription = `Short description for product catalog ${id}`;
    const description = `Description for product catalog ${id}`;
    const categoryId = `category-${id}`;
    const productFamilyFiles = this.generateProductFamilyFiles(
      id,
      5,
      nameIndex
    );

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
      id: `product-catalog-${id}`,
    };
  }

  private generateProductFamilyFiles(
    productFamilyId: number,
    count: number,
    nameIndex: number
  ): IProductFamilyFile[] {
    return Array.from({length: count}, (_, index) =>
      this.createProductFamilyFile(productFamilyId, index + 1, nameIndex)
    );
  }

  private createProductFamilyFile(
    productFamilyId: number,
    fileId: number,
    nameIndex: number
  ): IProductFamilyFile {
    const productFamily: IProductCatalog = {
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
      id: `product-family-${productFamilyId}`,
    };

    return {
      productFamilyId: `product-family-${productFamilyId}`,
      fileId: `file-${fileId}`,
      productFamily: productFamily,
      file: null,
      id: `product-family-file-${productFamilyId}-${fileId}`,
    };
  }

  private generateCustomers(count: number): ICustomer[] {
    return Array.from({length: count}, (_, index) =>
      this.createCustomer(index)
    );
  }

  private createCustomer(index: number): ICustomer {
    return {
      partnerId: this.generateUUID(),
      finalCustomer: customers[index % customers.length],
    };
  }

  private generateFinalProducts(count: number): IFinalProducts {
    const list = Array.from({length: count}, (_, index) =>
      this.createFinalProduct(index + 1)
    );
    const pageInformation: IPageInformation = {
      pageCount: Math.ceil(count / 10),
      totalItemCount: count,
      pageNumber: 1,
      pageSize: 10,
    };
    return {list, pageInformation};
  }

  private createFinalProduct(id: number): IFinalProduct {
    const randomNameIndex = Math.floor(
      Math.random() * productFamilyNames.length
    );
    const randomCustomerIndex = Math.floor(Math.random() * customers.length);
    return {
      displayName: `${id} - ${productFamilyNames[randomNameIndex]}.pdf`,
      mimeType: "application/pdf",
      size: Math.floor(Math.random() * 1000000) + 100000,
      bucket: "all-customers",
      minioPrefix: `/product-${this.generateUUID()}/${
        productFamilyNames[randomNameIndex]
      }.pdf`,
      minioVersion: this.generateUUID(),
      metadata: {
        createdBy: "creator@example.com",
        createdOn: new Date().toISOString(),
      },
      assetTypeGroupId: 2,
      assetTypeGroup: {
        name: "Product",
        displayOrder: 2,
        id: 2,
      },
      assetTypeId: this.generateUUID(),
      assetType: {
        parentAssetTypeId: null,
        assetTypeGroupId: 2,
        icon: "",
        parentAssetType: null,
        assetTypeGroup: {
          name: "Product",
          displayOrder: 2,
          id: 2,
        },
        childAssetTypes: null,
        name: "Technical Drawing",
        displayOrder: 1,
        createdBy: "ahmed.mohsen.ext@aptar.com",
        createdOn: new Date().toISOString(),
        lastUpdatedBy: "ahmed.mohsen.ext@aptar.com",
        lastUpdatedOn: null,
        id: this.generateUUID(),
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
      createdBy: "creator@example.com",
      createdOn: new Date().toISOString(),
      lastUpdatedBy: null,
      lastUpdatedOn: new Date().toISOString(),
      id: this.generateUUID(),
    };
  }

  private generateFileFinalCustomers(count: number, fileId: number) {
    return Array.from({length: count}, () => {
      const randomCustomerIndex = Math.floor(Math.random() * customers.length);
      return {
        fileId: this.generateUUID(),
        partnerId: this.generateUUID(),
        finalCustomer: customers[randomCustomerIndex],
        file: null,
        partner: null,
        createdBy: "",
        createdOn: new Date().toISOString(),
        lastUpdatedBy: null,
        lastUpdatedOn: new Date().toISOString(),
        id: this.generateUUID(),
      };
    });
  }

  private generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
