import {Injectable} from '@angular/core';
import {InMemoryDbService,} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    const products = [
      {
        "productFamilyId": "aa04851b-8dc4-427a-8195-03cf2fbdb250",
        "fileId": "99d4b8ae-e192-4b75-894c-51063c1a4563",
        "productFamily": {
          "name": "Ecolite Directional Pour Spout",
          "displayOrder": 37,
          "icon": "https://my.aptar.mobi/images/api/product/ecolite_directional_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "aa04851b-8dc4-427a-8195-03cf2fbdb250"
        },
        "file": null,
        "id": "5690f032-983a-451f-9768-52f397923aca"
      },
      {
        "productFamilyId": "46897c16-9af7-41a9-a53b-c74532846602",
        "fileId": "283da455-13db-4b50-931d-432672c72902",
        "productFamily": {
          "name": "Directional Snap Top",
          "displayOrder": 43,
          "icon": "https://my.aptar.mobi/images/api/product/directional_snap_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "46897c16-9af7-41a9-a53b-c74532846602",
              "fileId": "670d8535-939e-421f-8a7a-ca89194f1682",
              "productFamily": null,
              "file": null,
              "id": "e6e3a405-6e50-493d-87e2-5e86fc083689"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "46897c16-9af7-41a9-a53b-c74532846602"
        },
        "file": null,
        "id": "3f18a18e-6125-4d2e-bfab-e01e477eb106"
      },
      {
        "productFamilyId": "38d1b503-58ab-4d1b-b37a-fecd8fac6f12",
        "fileId": "c890deb4-7522-4bcc-af9c-13bd0cf0d28d",
        "productFamily": {
          "name": "Directional Pour Spout",
          "displayOrder": 36,
          "icon": "https://my.aptar.mobi/images/api/product/directional_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "38d1b503-58ab-4d1b-b37a-fecd8fac6f12"
        },
        "file": null,
        "id": "a3881c0c-7711-45f5-b655-abc512147854"
      },
      {
        "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
        "fileId": "c140c5dc-103b-4fe2-8d31-1b7ff755655d",
        "productFamily": {
          "name": "Ecolite Pour Spout",
          "displayOrder": 38,
          "icon": "https://my.aptar.mobi/images/api/product/ecolite_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "39a0da27-9be6-43ec-886a-62c79daeb4b4",
              "productFamily": null,
              "file": null,
              "id": "a23f3fa8-482b-40f7-9e55-e071b3f814e6"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "8c633b37-8c65-4699-9ebc-6c87796854e4",
              "productFamily": null,
              "file": null,
              "id": "b6daee05-89e0-4913-a803-fba1d6be5a12"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "0727a10e-289d-4ab9-b081-48eea92bed94",
              "productFamily": null,
              "file": null,
              "id": "c2736950-a708-4d51-9744-624905c42349"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "5c6efaa6-196e-40bb-bb3e-65bc9528781a",
              "productFamily": null,
              "file": null,
              "id": "1fd71c6b-2936-4b1d-add8-20251b7b2cd0"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "75ff2259-59ab-4e09-bac2-18298f524af8"
        },
        "file": null,
        "id": "63e0eb84-0b1a-4d97-84a7-20c8e6c092aa"
      },
      {
        "productFamilyId": "c62ef94f-f13d-4a68-b700-808a59456921",
        "fileId": "9c3dfd68-f4cc-44d8-afac-4d364e6ab918",
        "productFamily": {
          "name": "Traditional Pour Spout",
          "displayOrder": 39,
          "icon": "https://my.aptar.mobi/images/api/product/traditional_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "c62ef94f-f13d-4a68-b700-808a59456921"
        },
        "file": null,
        "id": "1a7426d0-0f87-40ed-a461-f3fa2b442072"
      },
      {
        "productFamilyId": "46897c16-9af7-41a9-a53b-c74532846602",
        "fileId": "670d8535-939e-421f-8a7a-ca89194f1682",
        "productFamily": {
          "name": "Directional Snap Top",
          "displayOrder": 43,
          "icon": "https://my.aptar.mobi/images/api/product/directional_snap_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "46897c16-9af7-41a9-a53b-c74532846602",
              "fileId": "283da455-13db-4b50-931d-432672c72902",
              "productFamily": null,
              "file": null,
              "id": "3f18a18e-6125-4d2e-bfab-e01e477eb106"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "46897c16-9af7-41a9-a53b-c74532846602"
        },
        "file": null,
        "id": "e6e3a405-6e50-493d-87e2-5e86fc083689"
      },
      {
        "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
        "fileId": "39a0da27-9be6-43ec-886a-62c79daeb4b4",
        "productFamily": {
          "name": "Ecolite Pour Spout",
          "displayOrder": 38,
          "icon": "https://my.aptar.mobi/images/api/product/ecolite_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "c140c5dc-103b-4fe2-8d31-1b7ff755655d",
              "productFamily": null,
              "file": null,
              "id": "63e0eb84-0b1a-4d97-84a7-20c8e6c092aa"
            },
            null,
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "8c633b37-8c65-4699-9ebc-6c87796854e4",
              "productFamily": null,
              "file": null,
              "id": "b6daee05-89e0-4913-a803-fba1d6be5a12"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "0727a10e-289d-4ab9-b081-48eea92bed94",
              "productFamily": null,
              "file": null,
              "id": "c2736950-a708-4d51-9744-624905c42349"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "5c6efaa6-196e-40bb-bb3e-65bc9528781a",
              "productFamily": null,
              "file": null,
              "id": "1fd71c6b-2936-4b1d-add8-20251b7b2cd0"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "75ff2259-59ab-4e09-bac2-18298f524af8"
        },
        "file": null,
        "id": "a23f3fa8-482b-40f7-9e55-e071b3f814e6"
      },
      {
        "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
        "fileId": "8c633b37-8c65-4699-9ebc-6c87796854e4",
        "productFamily": {
          "name": "Ecolite Pour Spout",
          "displayOrder": 38,
          "icon": "https://my.aptar.mobi/images/api/product/ecolite_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "c140c5dc-103b-4fe2-8d31-1b7ff755655d",
              "productFamily": null,
              "file": null,
              "id": "63e0eb84-0b1a-4d97-84a7-20c8e6c092aa"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "39a0da27-9be6-43ec-886a-62c79daeb4b4",
              "productFamily": null,
              "file": null,
              "id": "a23f3fa8-482b-40f7-9e55-e071b3f814e6"
            },
            null,
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "0727a10e-289d-4ab9-b081-48eea92bed94",
              "productFamily": null,
              "file": null,
              "id": "c2736950-a708-4d51-9744-624905c42349"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "5c6efaa6-196e-40bb-bb3e-65bc9528781a",
              "productFamily": null,
              "file": null,
              "id": "1fd71c6b-2936-4b1d-add8-20251b7b2cd0"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "75ff2259-59ab-4e09-bac2-18298f524af8"
        },
        "file": null,
        "id": "b6daee05-89e0-4913-a803-fba1d6be5a12"
      },
      {
        "productFamilyId": "fdbec213-3cbf-4ab8-b9ab-a617d0d49ecb",
        "fileId": "dbcc0f29-4f2e-4127-a25c-cc083ba51918",
        "productFamily": {
          "name": "Tab Top",
          "displayOrder": 55,
          "icon": "https://my.aptar.mobi/images/api/product/tab_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fdbec213-3cbf-4ab8-b9ab-a617d0d49ecb"
        },
        "file": null,
        "id": "43942c94-a6d4-46e2-8a87-06248b41f652"
      },
      {
        "productFamilyId": "7e872aed-d21b-4d5c-9218-911cbf8762f0",
        "fileId": "f4ac5911-10bf-410d-b10b-f7e0f6ffc666",
        "productFamily": {
          "name": "Ribbed Snap Top",
          "displayOrder": 51,
          "icon": "https://my.aptar.mobi/images/api/product/ribbed_snap_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "7e872aed-d21b-4d5c-9218-911cbf8762f0",
              "fileId": "bf89fbcc-654d-444d-8cd1-bbaebb4be305",
              "productFamily": null,
              "file": null,
              "id": "88ec13e2-8fcb-4751-a789-11ef81d19210"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "7e872aed-d21b-4d5c-9218-911cbf8762f0"
        },
        "file": null,
        "id": "6020ed62-fa53-4727-b536-69ed50910282"
      },
      {
        "productFamilyId": "7e872aed-d21b-4d5c-9218-911cbf8762f0",
        "fileId": "bf89fbcc-654d-444d-8cd1-bbaebb4be305",
        "productFamily": {
          "name": "Ribbed Snap Top",
          "displayOrder": 51,
          "icon": "https://my.aptar.mobi/images/api/product/ribbed_snap_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "7e872aed-d21b-4d5c-9218-911cbf8762f0",
              "fileId": "f4ac5911-10bf-410d-b10b-f7e0f6ffc666",
              "productFamily": null,
              "file": null,
              "id": "6020ed62-fa53-4727-b536-69ed50910282"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "7e872aed-d21b-4d5c-9218-911cbf8762f0"
        },
        "file": null,
        "id": "88ec13e2-8fcb-4751-a789-11ef81d19210"
      },
      {
        "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
        "fileId": "1376431a-c7b4-4892-9ab8-8ede5cc307f2",
        "productFamily": {
          "name": "Ultra SSQZ",
          "displayOrder": 61,
          "icon": "https://my.aptar.mobi/images/api/product/ultra_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
              "fileId": "c7f63059-4044-414b-9b0c-8c070ce65d7a",
              "productFamily": null,
              "file": null,
              "id": "9451ea6b-6650-4b37-b3c8-4cd634ba61a8"
            },
            {
              "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
              "fileId": "3f61dde4-0ea9-4492-8b5f-72ff919d9df0",
              "productFamily": null,
              "file": null,
              "id": "551f15e0-b39f-454f-8a9e-4bd492f89fe6"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52"
        },
        "file": null,
        "id": "2ac16318-1132-45c8-97a9-95f6f6728415"
      },
      {
        "productFamilyId": "f4798100-48f6-4360-9506-971ac6e5e6eb",
        "fileId": "b3a0566c-8711-41a1-81cb-029b69478e15",
        "productFamily": {
          "name": "Ultra LT SSQZ",
          "displayOrder": 59,
          "icon": "https://my.aptar.mobi/images/api/product/ultra_lt_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "f4798100-48f6-4360-9506-971ac6e5e6eb",
              "fileId": "a5fd2524-c6a6-4c64-b368-13be491898d9",
              "productFamily": null,
              "file": null,
              "id": "e756ab90-756b-41ed-b2f6-439a6092667e"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f4798100-48f6-4360-9506-971ac6e5e6eb"
        },
        "file": null,
        "id": "f13527b5-5f03-4dac-a166-95cf40e2b5fc"
      },
      {
        "productFamilyId": "84371ac4-de0e-422c-85d9-dc9c1d7070d8",
        "fileId": "2bb62b00-aae9-4a5e-920b-c06f5daaf1e5",
        "productFamily": {
          "name": "Purity Lite",
          "displayOrder": 66,
          "icon": "https://my.aptar.mobi/images/api/product/purity_lite.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "84371ac4-de0e-422c-85d9-dc9c1d7070d8"
        },
        "file": null,
        "id": "e1d4c833-2c3d-4ff1-9c4c-792b5a63d51a"
      },
      {
        "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
        "fileId": "c7f63059-4044-414b-9b0c-8c070ce65d7a",
        "productFamily": {
          "name": "Ultra SSQZ",
          "displayOrder": 61,
          "icon": "https://my.aptar.mobi/images/api/product/ultra_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
              "fileId": "1376431a-c7b4-4892-9ab8-8ede5cc307f2",
              "productFamily": null,
              "file": null,
              "id": "2ac16318-1132-45c8-97a9-95f6f6728415"
            },
            null,
            {
              "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
              "fileId": "3f61dde4-0ea9-4492-8b5f-72ff919d9df0",
              "productFamily": null,
              "file": null,
              "id": "551f15e0-b39f-454f-8a9e-4bd492f89fe6"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52"
        },
        "file": null,
        "id": "9451ea6b-6650-4b37-b3c8-4cd634ba61a8"
      },
      {
        "productFamilyId": "ea9d8bbb-9f9e-47fa-8dfc-0b0ae383ac0f",
        "fileId": "cb05571b-fe1b-45f8-9595-1c9d3dde9063",
        "productFamily": {
          "name": "Ultra XLV SSQZ",
          "displayOrder": 62,
          "icon": "https://my.aptar.mobi/images/api/product/ultra_xlv_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "ea9d8bbb-9f9e-47fa-8dfc-0b0ae383ac0f",
              "fileId": "89c70d77-d959-475d-91df-064ddfcb25ef",
              "productFamily": null,
              "file": null,
              "id": "768b5ec4-6b7a-4c6f-9ac8-0b0716483499"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "ea9d8bbb-9f9e-47fa-8dfc-0b0ae383ac0f"
        },
        "file": null,
        "id": "3cccb0d8-3fcc-4eb9-ab5c-1ce3ad28b5c1"
      },
      {
        "productFamilyId": "f4798100-48f6-4360-9506-971ac6e5e6eb",
        "fileId": "a5fd2524-c6a6-4c64-b368-13be491898d9",
        "productFamily": {
          "name": "Ultra LT SSQZ",
          "displayOrder": 59,
          "icon": "https://my.aptar.mobi/images/api/product/ultra_lt_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "f4798100-48f6-4360-9506-971ac6e5e6eb",
              "fileId": "b3a0566c-8711-41a1-81cb-029b69478e15",
              "productFamily": null,
              "file": null,
              "id": "f13527b5-5f03-4dac-a166-95cf40e2b5fc"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f4798100-48f6-4360-9506-971ac6e5e6eb"
        },
        "file": null,
        "id": "e756ab90-756b-41ed-b2f6-439a6092667e"
      },
      {
        "productFamilyId": "ea9d8bbb-9f9e-47fa-8dfc-0b0ae383ac0f",
        "fileId": "89c70d77-d959-475d-91df-064ddfcb25ef",
        "productFamily": {
          "name": "Ultra XLV SSQZ",
          "displayOrder": 62,
          "icon": "https://my.aptar.mobi/images/api/product/ultra_xlv_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "ea9d8bbb-9f9e-47fa-8dfc-0b0ae383ac0f",
              "fileId": "cb05571b-fe1b-45f8-9595-1c9d3dde9063",
              "productFamily": null,
              "file": null,
              "id": "3cccb0d8-3fcc-4eb9-ab5c-1ce3ad28b5c1"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "ea9d8bbb-9f9e-47fa-8dfc-0b0ae383ac0f"
        },
        "file": null,
        "id": "768b5ec4-6b7a-4c6f-9ac8-0b0716483499"
      },
      {
        "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
        "fileId": "71639515-38c9-41ed-8e0e-05c5c5a08ff5",
        "productFamily": {
          "name": "Classic Flip Top",
          "displayOrder": 41,
          "icon": "https://my.aptar.mobi/images/api/product/classic_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "7681a261-4143-45d2-9fe4-78c2c04bf934",
              "productFamily": null,
              "file": null,
              "id": "096d3c26-25a8-4d95-846f-34766730f194"
            },
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "4d715cee-0a72-47c6-b23a-f6c543609d72",
              "productFamily": null,
              "file": null,
              "id": "8e5d61e8-1ae4-44a2-8940-aaea4a59a349"
            },
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "9ea4b41f-f01f-43cb-8511-83de803dc33c",
              "productFamily": null,
              "file": null,
              "id": "611ff5a8-fd94-4920-a99f-b2e48bb2d1fb"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8"
        },
        "file": null,
        "id": "872620f8-5919-4a7e-b3d1-66089ff9bbb1"
      },
      {
        "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
        "fileId": "7681a261-4143-45d2-9fe4-78c2c04bf934",
        "productFamily": {
          "name": "Classic Flip Top",
          "displayOrder": 41,
          "icon": "https://my.aptar.mobi/images/api/product/classic_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "71639515-38c9-41ed-8e0e-05c5c5a08ff5",
              "productFamily": null,
              "file": null,
              "id": "872620f8-5919-4a7e-b3d1-66089ff9bbb1"
            },
            null,
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "4d715cee-0a72-47c6-b23a-f6c543609d72",
              "productFamily": null,
              "file": null,
              "id": "8e5d61e8-1ae4-44a2-8940-aaea4a59a349"
            },
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "9ea4b41f-f01f-43cb-8511-83de803dc33c",
              "productFamily": null,
              "file": null,
              "id": "611ff5a8-fd94-4920-a99f-b2e48bb2d1fb"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8"
        },
        "file": null,
        "id": "096d3c26-25a8-4d95-846f-34766730f194"
      },
      {
        "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
        "fileId": "4d715cee-0a72-47c6-b23a-f6c543609d72",
        "productFamily": {
          "name": "Classic Flip Top",
          "displayOrder": 41,
          "icon": "https://my.aptar.mobi/images/api/product/classic_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "71639515-38c9-41ed-8e0e-05c5c5a08ff5",
              "productFamily": null,
              "file": null,
              "id": "872620f8-5919-4a7e-b3d1-66089ff9bbb1"
            },
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "7681a261-4143-45d2-9fe4-78c2c04bf934",
              "productFamily": null,
              "file": null,
              "id": "096d3c26-25a8-4d95-846f-34766730f194"
            },
            null,
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "9ea4b41f-f01f-43cb-8511-83de803dc33c",
              "productFamily": null,
              "file": null,
              "id": "611ff5a8-fd94-4920-a99f-b2e48bb2d1fb"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8"
        },
        "file": null,
        "id": "8e5d61e8-1ae4-44a2-8940-aaea4a59a349"
      },
      {
        "productFamilyId": "7e13af6a-ab2d-4963-8e3e-3584f2af3114",
        "fileId": "6488b5c1-bc79-484b-8ea3-1967a0fa455a",
        "productFamily": {
          "name": "Simplicity Flip Top",
          "displayOrder": 52,
          "icon": "https://my.aptar.mobi/images/api/product/simplicity_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "7e13af6a-ab2d-4963-8e3e-3584f2af3114"
        },
        "file": null,
        "id": "1988d567-9650-4fc9-9f1d-95726b768265"
      },
      {
        "productFamilyId": "c67d767c-efba-4470-96b5-90eb9345ccc3",
        "fileId": "943d9e1f-1ffb-4fea-96c3-bc409bcc6b6d",
        "productFamily": {
          "name": "Small Symphony Oval Flip Top",
          "displayOrder": 54,
          "icon": "https://my.aptar.mobi/images/api/product/small_symphony_oval_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "c67d767c-efba-4470-96b5-90eb9345ccc3",
              "fileId": "bb104b0b-270e-4624-beab-e3b037261f92",
              "productFamily": null,
              "file": null,
              "id": "b4e5b940-2f0a-418b-becc-2442268e08e9"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "c67d767c-efba-4470-96b5-90eb9345ccc3"
        },
        "file": null,
        "id": "4c9b25c2-3649-4505-ab1f-6b45c7506a52"
      },
      {
        "productFamilyId": "51bc28a7-8385-4ba4-b60d-b738e6ffcc19",
        "fileId": "eab3b26a-be53-4eb8-a557-1613e72dfb08",
        "productFamily": {
          "name": "Uno",
          "displayOrder": 31,
          "icon": "https://my.aptar.mobi/images/api/product/uno.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "464e103b-62aa-41cb-955b-f5d6af10caf0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "51bc28a7-8385-4ba4-b60d-b738e6ffcc19",
              "fileId": "ed94dca0-b63a-455a-ae01-2b3da2d13834",
              "productFamily": null,
              "file": null,
              "id": "87abe78b-5392-49a0-8535-c87d3f8ba082"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "51bc28a7-8385-4ba4-b60d-b738e6ffcc19"
        },
        "file": null,
        "id": "81d000db-c63f-4796-85d0-3fdaa9c975be"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
              "productFamily": null,
              "file": null,
              "id": "9535e906-0749-4d42-8d15-d3442e9af496"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
              "productFamily": null,
              "file": null,
              "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
              "productFamily": null,
              "file": null,
              "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
              "productFamily": null,
              "file": null,
              "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "023f6531-47c0-4752-aad6-e389da984715",
              "productFamily": null,
              "file": null,
              "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
              "productFamily": null,
              "file": null,
              "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
              "productFamily": null,
              "file": null,
              "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
              "productFamily": null,
              "file": null,
              "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
              "productFamily": null,
              "file": null,
              "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
              "productFamily": null,
              "file": null,
              "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
              "productFamily": null,
              "file": null,
              "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
              "productFamily": null,
              "file": null,
              "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
              "productFamily": null,
              "file": null,
              "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
              "productFamily": null,
              "file": null,
              "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
              "productFamily": null,
              "file": null,
              "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
              "productFamily": null,
              "file": null,
              "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
              "productFamily": null,
              "file": null,
              "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
            },
            null,
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
              "productFamily": null,
              "file": null,
              "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
              "productFamily": null,
              "file": null,
              "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
              "productFamily": null,
              "file": null,
              "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
              "productFamily": null,
              "file": null,
              "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
              "productFamily": null,
              "file": null,
              "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
              "productFamily": null,
              "file": null,
              "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
              "productFamily": null,
              "file": null,
              "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
              "productFamily": null,
              "file": null,
              "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
              "productFamily": null,
              "file": null,
              "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
            },
            null,
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
              "productFamily": null,
              "file": null,
              "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
              "productFamily": null,
              "file": null,
              "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
              "productFamily": null,
              "file": null,
              "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
              "productFamily": null,
              "file": null,
              "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
              "productFamily": null,
              "file": null,
              "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
              "productFamily": null,
              "file": null,
              "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
              "productFamily": null,
              "file": null,
              "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
              "productFamily": null,
              "file": null,
              "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
              "productFamily": null,
              "file": null,
              "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
            },
            null,
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
              "productFamily": null,
              "file": null,
              "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
              "productFamily": null,
              "file": null,
              "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
              "productFamily": null,
              "file": null,
              "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
              "productFamily": null,
              "file": null,
              "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
              "productFamily": null,
              "file": null,
              "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
              "productFamily": null,
              "file": null,
              "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
              "productFamily": null,
              "file": null,
              "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
              "productFamily": null,
              "file": null,
              "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
              "productFamily": null,
              "file": null,
              "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
            },
            null,
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
              "productFamily": null,
              "file": null,
              "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
              "productFamily": null,
              "file": null,
              "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
              "productFamily": null,
              "file": null,
              "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
              "productFamily": null,
              "file": null,
              "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
              "productFamily": null,
              "file": null,
              "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
              "productFamily": null,
              "file": null,
              "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
              "productFamily": null,
              "file": null,
              "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
              "productFamily": null,
              "file": null,
              "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
              "productFamily": null,
              "file": null,
              "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
            },
            null,
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
              "productFamily": null,
              "file": null,
              "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
              "productFamily": null,
              "file": null,
              "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
              "productFamily": null,
              "file": null,
              "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
      },
      {
        "productFamilyId": "efa3ff8b-782b-47ae-8375-56bf97c07ef0",
        "fileId": "d19944cb-4234-4d4e-9402-2785723c2012",
        "productFamily": {
          "name": "Euromist Cardinal",
          "displayOrder": 11,
          "icon": "https://my.aptar.mobi/images/api/product/euromist_cardinal.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "efa3ff8b-782b-47ae-8375-56bf97c07ef0",
              "fileId": "5054170d-a945-468e-b003-e93f7967ba73",
              "productFamily": null,
              "file": null,
              "id": "fbfb6e92-2728-4718-a484-60366b181822"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "efa3ff8b-782b-47ae-8375-56bf97c07ef0"
        },
        "file": null,
        "id": "8f315834-d062-40df-bf35-0ceb3384af8b"
      },
      {
        "productFamilyId": "efa3ff8b-782b-47ae-8375-56bf97c07ef0",
        "fileId": "5054170d-a945-468e-b003-e93f7967ba73",
        "productFamily": {
          "name": "Euromist Cardinal",
          "displayOrder": 11,
          "icon": "https://my.aptar.mobi/images/api/product/euromist_cardinal.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "efa3ff8b-782b-47ae-8375-56bf97c07ef0",
              "fileId": "d19944cb-4234-4d4e-9402-2785723c2012",
              "productFamily": null,
              "file": null,
              "id": "8f315834-d062-40df-bf35-0ceb3384af8b"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "efa3ff8b-782b-47ae-8375-56bf97c07ef0"
        },
        "file": null,
        "id": "fbfb6e92-2728-4718-a484-60366b181822"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
              "productFamily": null,
              "file": null,
              "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
              "productFamily": null,
              "file": null,
              "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
              "productFamily": null,
              "file": null,
              "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
              "productFamily": null,
              "file": null,
              "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
              "productFamily": null,
              "file": null,
              "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
              "productFamily": null,
              "file": null,
              "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
            },
            null,
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
              "productFamily": null,
              "file": null,
              "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
              "productFamily": null,
              "file": null,
              "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
      },
      {
        "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
        "fileId": "a2d8cb2f-693f-4e65-a7bf-74eddde6b7de",
        "productFamily": {
          "name": "EuroFlow",
          "displayOrder": 5,
          "icon": "https://my.aptar.mobi/images/api/product/euroflow.png",
          "shortDescription": "The patented EuroFlow® technology assures reliable, consistent dosage in a familiar, user-friendly design",
          "description": "The patented EuroFlow® technology assures reliable, consistent dosage in a familiar, user-friendly design.  An e-commerce capable solution available in shower proof designs. This versatile dispenser feels right at home on a wide range of high-viscosity finalProducts.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
              "fileId": "ff678758-c25d-4fd1-bcd9-49150fd4f62e",
              "productFamily": null,
              "file": null,
              "id": "1cf875c2-cd20-4b18-b4c8-f2039aedb48f"
            },
            {
              "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
              "fileId": "95f6d42f-750c-4584-8e02-b4a284cb8a3b",
              "productFamily": null,
              "file": null,
              "id": "0bb225cf-3263-48b3-9753-77d7cda25ab8"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "22bf05aa-511f-4d43-8f35-5e9f0958bc95"
        },
        "file": null,
        "id": "fb625dec-d1d9-4ca1-981b-214c5a8c39e9"
      },
      {
        "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
        "fileId": "ff678758-c25d-4fd1-bcd9-49150fd4f62e",
        "productFamily": {
          "name": "EuroFlow",
          "displayOrder": 5,
          "icon": "https://my.aptar.mobi/images/api/product/euroflow.png",
          "shortDescription": "The patented EuroFlow® technology assures reliable, consistent dosage in a familiar, user-friendly design",
          "description": "The patented EuroFlow® technology assures reliable, consistent dosage in a familiar, user-friendly design.  An e-commerce capable solution available in shower proof designs. This versatile dispenser feels right at home on a wide range of high-viscosity finalProducts.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
              "fileId": "a2d8cb2f-693f-4e65-a7bf-74eddde6b7de",
              "productFamily": null,
              "file": null,
              "id": "fb625dec-d1d9-4ca1-981b-214c5a8c39e9"
            },
            null,
            {
              "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
              "fileId": "95f6d42f-750c-4584-8e02-b4a284cb8a3b",
              "productFamily": null,
              "file": null,
              "id": "0bb225cf-3263-48b3-9753-77d7cda25ab8"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "22bf05aa-511f-4d43-8f35-5e9f0958bc95"
        },
        "file": null,
        "id": "1cf875c2-cd20-4b18-b4c8-f2039aedb48f"
      },
      {
        "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
        "fileId": "95f6d42f-750c-4584-8e02-b4a284cb8a3b",
        "productFamily": {
          "name": "EuroFlow",
          "displayOrder": 5,
          "icon": "https://my.aptar.mobi/images/api/product/euroflow.png",
          "shortDescription": "The patented EuroFlow® technology assures reliable, consistent dosage in a familiar, user-friendly design",
          "description": "The patented EuroFlow® technology assures reliable, consistent dosage in a familiar, user-friendly design.  An e-commerce capable solution available in shower proof designs. This versatile dispenser feels right at home on a wide range of high-viscosity finalProducts.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
              "fileId": "a2d8cb2f-693f-4e65-a7bf-74eddde6b7de",
              "productFamily": null,
              "file": null,
              "id": "fb625dec-d1d9-4ca1-981b-214c5a8c39e9"
            },
            {
              "productFamilyId": "22bf05aa-511f-4d43-8f35-5e9f0958bc95",
              "fileId": "ff678758-c25d-4fd1-bcd9-49150fd4f62e",
              "productFamily": null,
              "file": null,
              "id": "1cf875c2-cd20-4b18-b4c8-f2039aedb48f"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "22bf05aa-511f-4d43-8f35-5e9f0958bc95"
        },
        "file": null,
        "id": "0bb225cf-3263-48b3-9753-77d7cda25ab8"
      },
      {
        "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
        "fileId": "56639561-efff-4708-8099-39a1bb8bb278",
        "productFamily": {
          "name": "GSA",
          "displayOrder": 1,
          "icon": "https://my.aptar.mobi/images/api/product/gsa.png",
          "shortDescription": "GSA Luxe is the premium version of our iconic GSA lotion pump.",
          "description": "The metal actuator and collar provide a unique and luxe design to your Personal Care finalProducts, while guaranteeing the same high perfomance technology featured in our well-known GSA lotion pump. Several bottle options are available: glass, aluminum, ceramic and porcelain.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "4db7d592-cc0f-479f-a86d-20e218fa5971",
              "productFamily": null,
              "file": null,
              "id": "ad435d61-bb91-4d5e-b82a-c806122f5ffd"
            },
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "1a83344f-602d-494b-8b94-40aa7506c5bc",
              "productFamily": null,
              "file": null,
              "id": "084b74a4-4f3c-43a7-bde5-b8024a8bd560"
            },
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "ee7b7a1d-d0db-4c28-aa4b-81530ce06cc0",
              "productFamily": null,
              "file": null,
              "id": "078b9ed1-1691-41ce-9c78-c7fbca2527d2"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "87539f71-6c06-425d-9821-ec7c2b2fc1e9"
        },
        "file": null,
        "id": "8e9595ed-1042-4768-9911-637462165c5b"
      },
      {
        "productFamilyId": "20b9f302-e198-4bb4-ba29-75f2121ad5d3",
        "fileId": "d92118f3-29dc-4aa8-8b2e-08bacb2083a5",
        "productFamily": {
          "name": "Future",
          "displayOrder": 2,
          "icon": "https://my.aptar.mobi/images/api/product/future.png",
          "shortDescription": "Future is a fully-recyclable & eCommerce-capable dispensing pump",
          "description": "Future is an award-winning, innovative dispensing solution that is mono-material and fully recyclable when paired with a PE or PET bottle. It is e-commerce capable thanks to its incorporated locking/unlocking ring, and features  a 360° degree, free spinning actuator which helps minimize potential breakage in transit. Future is suitable for a range of viscosities, customizable with two dosage options and two neck size options, and is available in a variety of colors thanks to it’s unique, three-part design.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "20b9f302-e198-4bb4-ba29-75f2121ad5d3",
              "fileId": "c818b38b-ca6e-4b2d-968a-cd77ccdd0d4d",
              "productFamily": null,
              "file": null,
              "id": "66ee8c48-c746-4ddd-9fcb-9b9eeed4f3e0"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "20b9f302-e198-4bb4-ba29-75f2121ad5d3"
        },
        "file": null,
        "id": "13bee2d1-b4be-4dbc-bf0f-dd647aa0169d"
      },
      {
        "productFamilyId": "20b9f302-e198-4bb4-ba29-75f2121ad5d3",
        "fileId": "c818b38b-ca6e-4b2d-968a-cd77ccdd0d4d",
        "productFamily": {
          "name": "Future",
          "displayOrder": 2,
          "icon": "https://my.aptar.mobi/images/api/product/future.png",
          "shortDescription": "Future is a fully-recyclable & eCommerce-capable dispensing pump",
          "description": "Future is an award-winning, innovative dispensing solution that is mono-material and fully recyclable when paired with a PE or PET bottle. It is e-commerce capable thanks to its incorporated locking/unlocking ring, and features  a 360° degree, free spinning actuator which helps minimize potential breakage in transit. Future is suitable for a range of viscosities, customizable with two dosage options and two neck size options, and is available in a variety of colors thanks to it’s unique, three-part design.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "20b9f302-e198-4bb4-ba29-75f2121ad5d3",
              "fileId": "d92118f3-29dc-4aa8-8b2e-08bacb2083a5",
              "productFamily": null,
              "file": null,
              "id": "13bee2d1-b4be-4dbc-bf0f-dd647aa0169d"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "20b9f302-e198-4bb4-ba29-75f2121ad5d3"
        },
        "file": null,
        "id": "66ee8c48-c746-4ddd-9fcb-9b9eeed4f3e0"
      },
      {
        "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
        "fileId": "7fa10693-df29-4d98-847a-226e16aa8172",
        "productFamily": {
          "name": "GS",
          "displayOrder": 3,
          "icon": "https://my.aptar.mobi/images/api/product/gs.png",
          "shortDescription": "GS Twist & Lock offers a range of dispensing lotion pumps",
          "description": "GS Twist & Lock offers a range of dispensing lotion pumps with a wide choice of aesthetic options and finishes to make your product stand out and meet the dispensing needs of personal care market.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "032c1483-be23-4848-8984-c949792ebc13",
              "productFamily": null,
              "file": null,
              "id": "6f5534af-5324-4b8b-9d0d-9c2c0c1bed59"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7e96e5aa-0c9a-483d-9e02-13c038fa6040",
              "productFamily": null,
              "file": null,
              "id": "12e70cd1-edfd-4891-b3d9-ec426cfd79ac"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "eb897110-d917-4a53-882d-c15cf7d9f720",
              "productFamily": null,
              "file": null,
              "id": "97d50e18-5f93-4d35-987c-f8c6a4502b8e"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "1531f521-582b-434d-8779-3dcd64e548cf",
              "productFamily": null,
              "file": null,
              "id": "3dfe37e3-9fd8-4a7c-a1a5-d99f733e6ed6"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "fc048843-9f7c-4440-97e2-3c681a7b3e9b",
              "productFamily": null,
              "file": null,
              "id": "60ce1f72-e20e-4fa1-8126-fa49570f5ecf"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed"
        },
        "file": null,
        "id": "364076d2-caa2-4e42-ae3e-8ba480224da2"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
              "productFamily": null,
              "file": null,
              "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
              "productFamily": null,
              "file": null,
              "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
              "productFamily": null,
              "file": null,
              "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
              "productFamily": null,
              "file": null,
              "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
              "productFamily": null,
              "file": null,
              "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
              "productFamily": null,
              "file": null,
              "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
              "productFamily": null,
              "file": null,
              "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
            },
            null,
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
              "productFamily": null,
              "file": null,
              "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
      },
      {
        "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
        "fileId": "032c1483-be23-4848-8984-c949792ebc13",
        "productFamily": {
          "name": "GS",
          "displayOrder": 3,
          "icon": "https://my.aptar.mobi/images/api/product/gs.png",
          "shortDescription": "GS Twist & Lock offers a range of dispensing lotion pumps",
          "description": "GS Twist & Lock offers a range of dispensing lotion pumps with a wide choice of aesthetic options and finishes to make your product stand out and meet the dispensing needs of personal care market.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7fa10693-df29-4d98-847a-226e16aa8172",
              "productFamily": null,
              "file": null,
              "id": "364076d2-caa2-4e42-ae3e-8ba480224da2"
            },
            null,
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7e96e5aa-0c9a-483d-9e02-13c038fa6040",
              "productFamily": null,
              "file": null,
              "id": "12e70cd1-edfd-4891-b3d9-ec426cfd79ac"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "eb897110-d917-4a53-882d-c15cf7d9f720",
              "productFamily": null,
              "file": null,
              "id": "97d50e18-5f93-4d35-987c-f8c6a4502b8e"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "1531f521-582b-434d-8779-3dcd64e548cf",
              "productFamily": null,
              "file": null,
              "id": "3dfe37e3-9fd8-4a7c-a1a5-d99f733e6ed6"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "fc048843-9f7c-4440-97e2-3c681a7b3e9b",
              "productFamily": null,
              "file": null,
              "id": "60ce1f72-e20e-4fa1-8126-fa49570f5ecf"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed"
        },
        "file": null,
        "id": "6f5534af-5324-4b8b-9d0d-9c2c0c1bed59"
      },
      {
        "productFamilyId": "7afb0841-5677-4750-ba5c-0f5e56ba8ed3",
        "fileId": "3cc742fb-a499-45cf-b4cc-8c2590954bed",
        "productFamily": {
          "name": "Euromist Two-Way",
          "displayOrder": 25,
          "icon": "https://my.aptar.mobi/images/api/product/euromist_two_way.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "7afb0841-5677-4750-ba5c-0f5e56ba8ed3"
        },
        "file": null,
        "id": "015d6815-bde3-4ede-a2b5-2bd66d77523e"
      },
      {
        "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
        "fileId": "7e96e5aa-0c9a-483d-9e02-13c038fa6040",
        "productFamily": {
          "name": "GS",
          "displayOrder": 3,
          "icon": "https://my.aptar.mobi/images/api/product/gs.png",
          "shortDescription": "GS Twist & Lock offers a range of dispensing lotion pumps",
          "description": "GS Twist & Lock offers a range of dispensing lotion pumps with a wide choice of aesthetic options and finishes to make your product stand out and meet the dispensing needs of personal care market.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7fa10693-df29-4d98-847a-226e16aa8172",
              "productFamily": null,
              "file": null,
              "id": "364076d2-caa2-4e42-ae3e-8ba480224da2"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "032c1483-be23-4848-8984-c949792ebc13",
              "productFamily": null,
              "file": null,
              "id": "6f5534af-5324-4b8b-9d0d-9c2c0c1bed59"
            },
            null,
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "eb897110-d917-4a53-882d-c15cf7d9f720",
              "productFamily": null,
              "file": null,
              "id": "97d50e18-5f93-4d35-987c-f8c6a4502b8e"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "1531f521-582b-434d-8779-3dcd64e548cf",
              "productFamily": null,
              "file": null,
              "id": "3dfe37e3-9fd8-4a7c-a1a5-d99f733e6ed6"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "fc048843-9f7c-4440-97e2-3c681a7b3e9b",
              "productFamily": null,
              "file": null,
              "id": "60ce1f72-e20e-4fa1-8126-fa49570f5ecf"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed"
        },
        "file": null,
        "id": "12e70cd1-edfd-4891-b3d9-ec426cfd79ac"
      },
      {
        "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
        "fileId": "85a05e59-b36a-42a0-a37b-bd3da1bd6d1b",
        "productFamily": {
          "name": "Evolution",
          "displayOrder": 13,
          "icon": "https://my.aptar.mobi/images/api/product/evolution.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "1a31e118-40e4-43e6-926d-396bee187413",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "543ae354-8cbe-49d2-8910-09d10189030c",
              "productFamily": null,
              "file": null,
              "id": "2e5034ea-3511-4103-8073-1a9b5b696f76"
            },
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "12ea6259-c23f-4a64-946e-75354f3c1f44",
              "productFamily": null,
              "file": null,
              "id": "3083ff88-a950-413c-8c4e-269e48121acb"
            },
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "32d92baf-5826-4edb-a62e-fabaf3f1f12e",
              "productFamily": null,
              "file": null,
              "id": "756c5a22-db72-4711-99a7-2ccbe04782ec"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "6cc88fd1-bdcb-4d98-8d34-5353a397202f"
        },
        "file": null,
        "id": "2e1e9090-f245-4e16-a4f5-a8712266e1cd"
      },
      {
        "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
        "fileId": "759903bf-0e3b-4fc2-b2ce-c7fa409754d2",
        "productFamily": {
          "name": "Classic Tube Top",
          "displayOrder": 63,
          "icon": "https://my.aptar.mobi/images/api/product/classic_tube_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "f3626d0b-ba0c-44a5-b924-c9cef1316e2a",
              "productFamily": null,
              "file": null,
              "id": "93b8b0c1-8273-4b17-bc64-4de85b8ffea9"
            },
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "7a7303ac-3a9c-4af8-ba38-18615ea1f3b0",
              "productFamily": null,
              "file": null,
              "id": "21761979-16c9-463d-a164-53226155c7d7"
            },
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "44d290ba-9c9c-4913-be09-686145cca5e4",
              "productFamily": null,
              "file": null,
              "id": "48d8f0df-786e-4fce-b199-2fa4d67c0c6d"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f"
        },
        "file": null,
        "id": "69adf1e6-925c-49f7-bd89-96daddc5c29f"
      },
      {
        "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
        "fileId": "f3626d0b-ba0c-44a5-b924-c9cef1316e2a",
        "productFamily": {
          "name": "Classic Tube Top",
          "displayOrder": 63,
          "icon": "https://my.aptar.mobi/images/api/product/classic_tube_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "759903bf-0e3b-4fc2-b2ce-c7fa409754d2",
              "productFamily": null,
              "file": null,
              "id": "69adf1e6-925c-49f7-bd89-96daddc5c29f"
            },
            null,
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "7a7303ac-3a9c-4af8-ba38-18615ea1f3b0",
              "productFamily": null,
              "file": null,
              "id": "21761979-16c9-463d-a164-53226155c7d7"
            },
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "44d290ba-9c9c-4913-be09-686145cca5e4",
              "productFamily": null,
              "file": null,
              "id": "48d8f0df-786e-4fce-b199-2fa4d67c0c6d"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f"
        },
        "file": null,
        "id": "93b8b0c1-8273-4b17-bc64-4de85b8ffea9"
      },
      {
        "productFamilyId": "e8ac3b45-e699-443d-9589-75b3dd31a40f",
        "fileId": "ddfb826a-ca08-4758-9f8c-84fefe062152",
        "productFamily": {
          "name": "Classic Ultra Tube Top",
          "displayOrder": 64,
          "icon": "https://my.aptar.mobi/images/api/product/classic_ultra_tube_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "e8ac3b45-e699-443d-9589-75b3dd31a40f"
        },
        "file": null,
        "id": "712eb65b-39e4-40ad-89d0-041544348cfb"
      },
      {
        "productFamilyId": "c05a52e3-6b93-45a0-9494-cf632f2879a0",
        "fileId": "5a368f9c-9b53-4c0d-9c65-a93f8e205173",
        "productFamily": {
          "name": "Purity Tube Top",
          "displayOrder": 68,
          "icon": "https://my.aptar.mobi/images/api/product/purity_tube_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "c05a52e3-6b93-45a0-9494-cf632f2879a0"
        },
        "file": null,
        "id": "17ebe58e-a126-40ad-a2eb-8a9e41217d3e"
      },
      {
        "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
        "fileId": "7a7303ac-3a9c-4af8-ba38-18615ea1f3b0",
        "productFamily": {
          "name": "Classic Tube Top",
          "displayOrder": 63,
          "icon": "https://my.aptar.mobi/images/api/product/classic_tube_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "759903bf-0e3b-4fc2-b2ce-c7fa409754d2",
              "productFamily": null,
              "file": null,
              "id": "69adf1e6-925c-49f7-bd89-96daddc5c29f"
            },
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "f3626d0b-ba0c-44a5-b924-c9cef1316e2a",
              "productFamily": null,
              "file": null,
              "id": "93b8b0c1-8273-4b17-bc64-4de85b8ffea9"
            },
            null,
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "44d290ba-9c9c-4913-be09-686145cca5e4",
              "productFamily": null,
              "file": null,
              "id": "48d8f0df-786e-4fce-b199-2fa4d67c0c6d"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f"
        },
        "file": null,
        "id": "21761979-16c9-463d-a164-53226155c7d7"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
              "productFamily": null,
              "file": null,
              "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
            },
            null,
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
              "productFamily": null,
              "file": null,
              "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
              "productFamily": null,
              "file": null,
              "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
              "productFamily": null,
              "file": null,
              "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "023f6531-47c0-4752-aad6-e389da984715",
              "productFamily": null,
              "file": null,
              "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
              "productFamily": null,
              "file": null,
              "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
              "productFamily": null,
              "file": null,
              "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
              "productFamily": null,
              "file": null,
              "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "9535e906-0749-4d42-8d15-d3442e9af496"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
              "productFamily": null,
              "file": null,
              "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
              "productFamily": null,
              "file": null,
              "id": "9535e906-0749-4d42-8d15-d3442e9af496"
            },
            null,
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
              "productFamily": null,
              "file": null,
              "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
              "productFamily": null,
              "file": null,
              "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "023f6531-47c0-4752-aad6-e389da984715",
              "productFamily": null,
              "file": null,
              "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
              "productFamily": null,
              "file": null,
              "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
              "productFamily": null,
              "file": null,
              "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
              "productFamily": null,
              "file": null,
              "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
              "productFamily": null,
              "file": null,
              "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
              "productFamily": null,
              "file": null,
              "id": "9535e906-0749-4d42-8d15-d3442e9af496"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
              "productFamily": null,
              "file": null,
              "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
            },
            null,
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
              "productFamily": null,
              "file": null,
              "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "023f6531-47c0-4752-aad6-e389da984715",
              "productFamily": null,
              "file": null,
              "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
              "productFamily": null,
              "file": null,
              "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
              "productFamily": null,
              "file": null,
              "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
              "productFamily": null,
              "file": null,
              "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
              "productFamily": null,
              "file": null,
              "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
              "productFamily": null,
              "file": null,
              "id": "9535e906-0749-4d42-8d15-d3442e9af496"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
              "productFamily": null,
              "file": null,
              "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
              "productFamily": null,
              "file": null,
              "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
            },
            null,
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "023f6531-47c0-4752-aad6-e389da984715",
              "productFamily": null,
              "file": null,
              "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
              "productFamily": null,
              "file": null,
              "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
              "productFamily": null,
              "file": null,
              "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
              "productFamily": null,
              "file": null,
              "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "023f6531-47c0-4752-aad6-e389da984715",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
              "productFamily": null,
              "file": null,
              "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
              "productFamily": null,
              "file": null,
              "id": "9535e906-0749-4d42-8d15-d3442e9af496"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
              "productFamily": null,
              "file": null,
              "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
              "productFamily": null,
              "file": null,
              "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
              "productFamily": null,
              "file": null,
              "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
            },
            null,
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
              "productFamily": null,
              "file": null,
              "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
              "productFamily": null,
              "file": null,
              "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
              "productFamily": null,
              "file": null,
              "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
              "productFamily": null,
              "file": null,
              "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
              "productFamily": null,
              "file": null,
              "id": "9535e906-0749-4d42-8d15-d3442e9af496"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
              "productFamily": null,
              "file": null,
              "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
              "productFamily": null,
              "file": null,
              "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
              "productFamily": null,
              "file": null,
              "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "023f6531-47c0-4752-aad6-e389da984715",
              "productFamily": null,
              "file": null,
              "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
            },
            null,
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
              "productFamily": null,
              "file": null,
              "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
              "productFamily": null,
              "file": null,
              "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
              "productFamily": null,
              "file": null,
              "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
              "productFamily": null,
              "file": null,
              "id": "9535e906-0749-4d42-8d15-d3442e9af496"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
              "productFamily": null,
              "file": null,
              "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
              "productFamily": null,
              "file": null,
              "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
              "productFamily": null,
              "file": null,
              "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "023f6531-47c0-4752-aad6-e389da984715",
              "productFamily": null,
              "file": null,
              "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
              "productFamily": null,
              "file": null,
              "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
            },
            null,
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
              "productFamily": null,
              "file": null,
              "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
      },
      {
        "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
        "fileId": "df5b4c7b-e648-47a4-b410-aadaea12faaf",
        "productFamily": {
          "name": "Flat Disc Top",
          "displayOrder": 35,
          "icon": "https://my.aptar.mobi/images/api/product/flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "a3fbd2c6-ddfd-430e-a8e9-5a20687aebf9",
              "productFamily": null,
              "file": null,
              "id": "b0668aec-9037-4d82-bb15-e684404ac7c5"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "c1e7a3d7-369a-44c3-8a1b-cdeda46689ce",
              "productFamily": null,
              "file": null,
              "id": "b030912b-df96-4c61-9efc-fdae755ca852"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "8e9f8ec2-97c3-4aa2-88f4-bf2264bd8c3e",
              "productFamily": null,
              "file": null,
              "id": "0affa1bb-c7c0-4e5c-b1c4-5405049c2aec"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "07c6c5a0-f910-4483-a0f9-5377659eab81",
              "productFamily": null,
              "file": null,
              "id": "d2f4a6e0-5059-4f37-bca2-8c75dfbfb65b"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "23790d65-e81d-48fa-ab12-1a958dfdec4a",
              "productFamily": null,
              "file": null,
              "id": "c0d32317-2253-4fdc-9434-991afd8fc19e"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "0744566b-90a3-45b9-9352-346e336d52ea",
              "productFamily": null,
              "file": null,
              "id": "99ee68fe-7692-4fb8-8045-a0ccb0c6af71"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5f7471fb-3ec7-4a06-9efc-60613999905a"
        },
        "file": null,
        "id": "e441f4e0-5ac0-4534-8f88-d50a4de7150f"
      },
      {
        "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
        "fileId": "a3fbd2c6-ddfd-430e-a8e9-5a20687aebf9",
        "productFamily": {
          "name": "Flat Disc Top",
          "displayOrder": 35,
          "icon": "https://my.aptar.mobi/images/api/product/flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "df5b4c7b-e648-47a4-b410-aadaea12faaf",
              "productFamily": null,
              "file": null,
              "id": "e441f4e0-5ac0-4534-8f88-d50a4de7150f"
            },
            null,
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "c1e7a3d7-369a-44c3-8a1b-cdeda46689ce",
              "productFamily": null,
              "file": null,
              "id": "b030912b-df96-4c61-9efc-fdae755ca852"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "8e9f8ec2-97c3-4aa2-88f4-bf2264bd8c3e",
              "productFamily": null,
              "file": null,
              "id": "0affa1bb-c7c0-4e5c-b1c4-5405049c2aec"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "07c6c5a0-f910-4483-a0f9-5377659eab81",
              "productFamily": null,
              "file": null,
              "id": "d2f4a6e0-5059-4f37-bca2-8c75dfbfb65b"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "23790d65-e81d-48fa-ab12-1a958dfdec4a",
              "productFamily": null,
              "file": null,
              "id": "c0d32317-2253-4fdc-9434-991afd8fc19e"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "0744566b-90a3-45b9-9352-346e336d52ea",
              "productFamily": null,
              "file": null,
              "id": "99ee68fe-7692-4fb8-8045-a0ccb0c6af71"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5f7471fb-3ec7-4a06-9efc-60613999905a"
        },
        "file": null,
        "id": "b0668aec-9037-4d82-bb15-e684404ac7c5"
      },
      {
        "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
        "fileId": "c1e7a3d7-369a-44c3-8a1b-cdeda46689ce",
        "productFamily": {
          "name": "Flat Disc Top",
          "displayOrder": 35,
          "icon": "https://my.aptar.mobi/images/api/product/flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "df5b4c7b-e648-47a4-b410-aadaea12faaf",
              "productFamily": null,
              "file": null,
              "id": "e441f4e0-5ac0-4534-8f88-d50a4de7150f"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "a3fbd2c6-ddfd-430e-a8e9-5a20687aebf9",
              "productFamily": null,
              "file": null,
              "id": "b0668aec-9037-4d82-bb15-e684404ac7c5"
            },
            null,
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "8e9f8ec2-97c3-4aa2-88f4-bf2264bd8c3e",
              "productFamily": null,
              "file": null,
              "id": "0affa1bb-c7c0-4e5c-b1c4-5405049c2aec"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "07c6c5a0-f910-4483-a0f9-5377659eab81",
              "productFamily": null,
              "file": null,
              "id": "d2f4a6e0-5059-4f37-bca2-8c75dfbfb65b"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "23790d65-e81d-48fa-ab12-1a958dfdec4a",
              "productFamily": null,
              "file": null,
              "id": "c0d32317-2253-4fdc-9434-991afd8fc19e"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "0744566b-90a3-45b9-9352-346e336d52ea",
              "productFamily": null,
              "file": null,
              "id": "99ee68fe-7692-4fb8-8045-a0ccb0c6af71"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5f7471fb-3ec7-4a06-9efc-60613999905a"
        },
        "file": null,
        "id": "b030912b-df96-4c61-9efc-fdae755ca852"
      },
      {
        "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
        "fileId": "8e9f8ec2-97c3-4aa2-88f4-bf2264bd8c3e",
        "productFamily": {
          "name": "Flat Disc Top",
          "displayOrder": 35,
          "icon": "https://my.aptar.mobi/images/api/product/flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "df5b4c7b-e648-47a4-b410-aadaea12faaf",
              "productFamily": null,
              "file": null,
              "id": "e441f4e0-5ac0-4534-8f88-d50a4de7150f"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "a3fbd2c6-ddfd-430e-a8e9-5a20687aebf9",
              "productFamily": null,
              "file": null,
              "id": "b0668aec-9037-4d82-bb15-e684404ac7c5"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "c1e7a3d7-369a-44c3-8a1b-cdeda46689ce",
              "productFamily": null,
              "file": null,
              "id": "b030912b-df96-4c61-9efc-fdae755ca852"
            },
            null,
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "07c6c5a0-f910-4483-a0f9-5377659eab81",
              "productFamily": null,
              "file": null,
              "id": "d2f4a6e0-5059-4f37-bca2-8c75dfbfb65b"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "23790d65-e81d-48fa-ab12-1a958dfdec4a",
              "productFamily": null,
              "file": null,
              "id": "c0d32317-2253-4fdc-9434-991afd8fc19e"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "0744566b-90a3-45b9-9352-346e336d52ea",
              "productFamily": null,
              "file": null,
              "id": "99ee68fe-7692-4fb8-8045-a0ccb0c6af71"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5f7471fb-3ec7-4a06-9efc-60613999905a"
        },
        "file": null,
        "id": "0affa1bb-c7c0-4e5c-b1c4-5405049c2aec"
      },
      {
        "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
        "fileId": "07c6c5a0-f910-4483-a0f9-5377659eab81",
        "productFamily": {
          "name": "Flat Disc Top",
          "displayOrder": 35,
          "icon": "https://my.aptar.mobi/images/api/product/flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "df5b4c7b-e648-47a4-b410-aadaea12faaf",
              "productFamily": null,
              "file": null,
              "id": "e441f4e0-5ac0-4534-8f88-d50a4de7150f"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "a3fbd2c6-ddfd-430e-a8e9-5a20687aebf9",
              "productFamily": null,
              "file": null,
              "id": "b0668aec-9037-4d82-bb15-e684404ac7c5"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "c1e7a3d7-369a-44c3-8a1b-cdeda46689ce",
              "productFamily": null,
              "file": null,
              "id": "b030912b-df96-4c61-9efc-fdae755ca852"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "8e9f8ec2-97c3-4aa2-88f4-bf2264bd8c3e",
              "productFamily": null,
              "file": null,
              "id": "0affa1bb-c7c0-4e5c-b1c4-5405049c2aec"
            },
            null,
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "23790d65-e81d-48fa-ab12-1a958dfdec4a",
              "productFamily": null,
              "file": null,
              "id": "c0d32317-2253-4fdc-9434-991afd8fc19e"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "0744566b-90a3-45b9-9352-346e336d52ea",
              "productFamily": null,
              "file": null,
              "id": "99ee68fe-7692-4fb8-8045-a0ccb0c6af71"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5f7471fb-3ec7-4a06-9efc-60613999905a"
        },
        "file": null,
        "id": "d2f4a6e0-5059-4f37-bca2-8c75dfbfb65b"
      },
      {
        "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
        "fileId": "23790d65-e81d-48fa-ab12-1a958dfdec4a",
        "productFamily": {
          "name": "Flat Disc Top",
          "displayOrder": 35,
          "icon": "https://my.aptar.mobi/images/api/product/flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "df5b4c7b-e648-47a4-b410-aadaea12faaf",
              "productFamily": null,
              "file": null,
              "id": "e441f4e0-5ac0-4534-8f88-d50a4de7150f"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "a3fbd2c6-ddfd-430e-a8e9-5a20687aebf9",
              "productFamily": null,
              "file": null,
              "id": "b0668aec-9037-4d82-bb15-e684404ac7c5"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "c1e7a3d7-369a-44c3-8a1b-cdeda46689ce",
              "productFamily": null,
              "file": null,
              "id": "b030912b-df96-4c61-9efc-fdae755ca852"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "8e9f8ec2-97c3-4aa2-88f4-bf2264bd8c3e",
              "productFamily": null,
              "file": null,
              "id": "0affa1bb-c7c0-4e5c-b1c4-5405049c2aec"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "07c6c5a0-f910-4483-a0f9-5377659eab81",
              "productFamily": null,
              "file": null,
              "id": "d2f4a6e0-5059-4f37-bca2-8c75dfbfb65b"
            },
            null,
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "0744566b-90a3-45b9-9352-346e336d52ea",
              "productFamily": null,
              "file": null,
              "id": "99ee68fe-7692-4fb8-8045-a0ccb0c6af71"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5f7471fb-3ec7-4a06-9efc-60613999905a"
        },
        "file": null,
        "id": "c0d32317-2253-4fdc-9434-991afd8fc19e"
      },
      {
        "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
        "fileId": "9152b337-a85c-4d17-8e12-9d1f23c6756d",
        "productFamily": {
          "name": "2\" Flat Disc Top",
          "displayOrder": 32,
          "icon": "https://my.aptar.mobi/images/api/product/2in_flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
              "fileId": "f1db9ce7-1afd-49e4-a4dd-7e8f157911aa",
              "productFamily": null,
              "file": null,
              "id": "9bf6b216-d5f6-4ac9-b321-b101400dcc5d"
            },
            {
              "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
              "fileId": "629f122f-9c51-4325-a388-2de3bf7dee74",
              "productFamily": null,
              "file": null,
              "id": "f14b764a-20bd-4134-943c-3fb3ca32ca06"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a"
        },
        "file": null,
        "id": "be5672a8-9938-4446-a019-4454376bfffd"
      },
      {
        "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
        "fileId": "f1db9ce7-1afd-49e4-a4dd-7e8f157911aa",
        "productFamily": {
          "name": "2\" Flat Disc Top",
          "displayOrder": 32,
          "icon": "https://my.aptar.mobi/images/api/product/2in_flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
              "fileId": "9152b337-a85c-4d17-8e12-9d1f23c6756d",
              "productFamily": null,
              "file": null,
              "id": "be5672a8-9938-4446-a019-4454376bfffd"
            },
            null,
            {
              "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
              "fileId": "629f122f-9c51-4325-a388-2de3bf7dee74",
              "productFamily": null,
              "file": null,
              "id": "f14b764a-20bd-4134-943c-3fb3ca32ca06"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a"
        },
        "file": null,
        "id": "9bf6b216-d5f6-4ac9-b321-b101400dcc5d"
      },
      {
        "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
        "fileId": "629f122f-9c51-4325-a388-2de3bf7dee74",
        "productFamily": {
          "name": "2\" Flat Disc Top",
          "displayOrder": 32,
          "icon": "https://my.aptar.mobi/images/api/product/2in_flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
              "fileId": "9152b337-a85c-4d17-8e12-9d1f23c6756d",
              "productFamily": null,
              "file": null,
              "id": "be5672a8-9938-4446-a019-4454376bfffd"
            },
            {
              "productFamilyId": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a",
              "fileId": "f1db9ce7-1afd-49e4-a4dd-7e8f157911aa",
              "productFamily": null,
              "file": null,
              "id": "9bf6b216-d5f6-4ac9-b321-b101400dcc5d"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "bddcc069-b9ec-4eb5-88cf-419cb1d7911a"
        },
        "file": null,
        "id": "f14b764a-20bd-4134-943c-3fb3ca32ca06"
      },
      {
        "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
        "fileId": "be276645-3403-4f8b-be6c-deb195d00e8a",
        "productFamily": {
          "name": "Classic Ultra Flip Top",
          "displayOrder": 42,
          "icon": "https://my.aptar.mobi/images/api/product/classic_ultra_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "9681c17e-1c99-4ef4-add7-937452970ce6",
              "productFamily": null,
              "file": null,
              "id": "e5e9269f-56a5-4b89-9649-fbc07f5f6113"
            },
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "4f95f7a8-4699-4850-b2df-444a25439797",
              "productFamily": null,
              "file": null,
              "id": "36bc243b-e455-4ae4-b138-0e98f6de1c72"
            },
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "16094f06-ae68-4c06-8f4c-68c28492ee58",
              "productFamily": null,
              "file": null,
              "id": "5799ea68-055d-4ba7-a9aa-eafaf31e6a34"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "2af2605b-53bc-4ad7-bfed-7f33876f1799"
        },
        "file": null,
        "id": "9643848e-dc6d-4cf1-b87f-50aff8e0afc5"
      },
      {
        "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
        "fileId": "9681c17e-1c99-4ef4-add7-937452970ce6",
        "productFamily": {
          "name": "Classic Ultra Flip Top",
          "displayOrder": 42,
          "icon": "https://my.aptar.mobi/images/api/product/classic_ultra_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "be276645-3403-4f8b-be6c-deb195d00e8a",
              "productFamily": null,
              "file": null,
              "id": "9643848e-dc6d-4cf1-b87f-50aff8e0afc5"
            },
            null,
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "4f95f7a8-4699-4850-b2df-444a25439797",
              "productFamily": null,
              "file": null,
              "id": "36bc243b-e455-4ae4-b138-0e98f6de1c72"
            },
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "16094f06-ae68-4c06-8f4c-68c28492ee58",
              "productFamily": null,
              "file": null,
              "id": "5799ea68-055d-4ba7-a9aa-eafaf31e6a34"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "2af2605b-53bc-4ad7-bfed-7f33876f1799"
        },
        "file": null,
        "id": "e5e9269f-56a5-4b89-9649-fbc07f5f6113"
      },
      {
        "productFamilyId": "c67d767c-efba-4470-96b5-90eb9345ccc3",
        "fileId": "bb104b0b-270e-4624-beab-e3b037261f92",
        "productFamily": {
          "name": "Small Symphony Oval Flip Top",
          "displayOrder": 54,
          "icon": "https://my.aptar.mobi/images/api/product/small_symphony_oval_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "c67d767c-efba-4470-96b5-90eb9345ccc3",
              "fileId": "943d9e1f-1ffb-4fea-96c3-bc409bcc6b6d",
              "productFamily": null,
              "file": null,
              "id": "4c9b25c2-3649-4505-ab1f-6b45c7506a52"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "c67d767c-efba-4470-96b5-90eb9345ccc3"
        },
        "file": null,
        "id": "b4e5b940-2f0a-418b-becc-2442268e08e9"
      },
      {
        "productFamilyId": "0f141d17-2c53-4adf-8511-2f92ec731d69",
        "fileId": "2a92de8e-559a-44f2-a703-0f0fb54a1163",
        "productFamily": {
          "name": "Large Gem Oval Flip Top",
          "displayOrder": 48,
          "icon": "https://my.aptar.mobi/images/api/product/gemini.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "0f141d17-2c53-4adf-8511-2f92ec731d69"
        },
        "file": null,
        "id": "d9a00569-862c-46e6-ab77-8e3c87ff0743"
      },
      {
        "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
        "fileId": "0727a10e-289d-4ab9-b081-48eea92bed94",
        "productFamily": {
          "name": "Ecolite Pour Spout",
          "displayOrder": 38,
          "icon": "https://my.aptar.mobi/images/api/product/ecolite_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "c140c5dc-103b-4fe2-8d31-1b7ff755655d",
              "productFamily": null,
              "file": null,
              "id": "63e0eb84-0b1a-4d97-84a7-20c8e6c092aa"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "39a0da27-9be6-43ec-886a-62c79daeb4b4",
              "productFamily": null,
              "file": null,
              "id": "a23f3fa8-482b-40f7-9e55-e071b3f814e6"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "8c633b37-8c65-4699-9ebc-6c87796854e4",
              "productFamily": null,
              "file": null,
              "id": "b6daee05-89e0-4913-a803-fba1d6be5a12"
            },
            null,
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "5c6efaa6-196e-40bb-bb3e-65bc9528781a",
              "productFamily": null,
              "file": null,
              "id": "1fd71c6b-2936-4b1d-add8-20251b7b2cd0"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "75ff2259-59ab-4e09-bac2-18298f524af8"
        },
        "file": null,
        "id": "c2736950-a708-4d51-9744-624905c42349"
      },
      {
        "productFamilyId": "a5ba2eca-77d7-4996-ab75-deffa2ea1571",
        "fileId": "d8213da2-ac70-4533-92fe-0d2c5fb78e43",
        "productFamily": {
          "name": "HiFlow E-Commerce",
          "displayOrder": 10,
          "icon": "https://my.aptar.mobi/images/api/product/hiflow-e-commerce.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "a5ba2eca-77d7-4996-ab75-deffa2ea1571"
        },
        "file": null,
        "id": "0a1e5a75-4f36-48c1-8134-fd7952c1088a"
      },
      {
        "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
        "fileId": "038eee91-8066-4e6c-94ac-4f3a49b91175",
        "productFamily": {
          "name": "Original",
          "displayOrder": 30,
          "icon": "https://my.aptar.mobi/images/api/product/original.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "464e103b-62aa-41cb-955b-f5d6af10caf0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
              "fileId": "db364083-5e09-4511-bad6-e312a93dfcf2",
              "productFamily": null,
              "file": null,
              "id": "daa04836-4c1d-4b6b-8410-390c7618d61f"
            },
            {
              "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
              "fileId": "4adda1a3-3161-458f-870b-e9bf56b2dfb8",
              "productFamily": null,
              "file": null,
              "id": "bd24cec9-e380-444f-8361-a9b2ac5170c0"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "0f8f9749-c6cf-49fa-9a76-07af9057ee29"
        },
        "file": null,
        "id": "ff414053-7141-48d2-a458-bf6c9e32fa37"
      },
      {
        "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
        "fileId": "9bfb6e3b-37e3-4cc2-9803-4558369c9822",
        "productFamily": {
          "name": "Domed Disc Top",
          "displayOrder": 34,
          "icon": "https://my.aptar.mobi/images/api/product/domed_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "a18e5b5e-dc74-47bc-92e1-d4481a0b2a04",
              "productFamily": null,
              "file": null,
              "id": "d17bce63-3c19-4a88-ac0e-2ff9b4133955"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "3f067500-3644-433d-830a-b0eed5980a0e",
              "productFamily": null,
              "file": null,
              "id": "9535e906-0749-4d42-8d15-d3442e9af496"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "b063c9f8-677c-494d-9b3d-97983f192678",
              "productFamily": null,
              "file": null,
              "id": "782dda47-9e2b-47ed-824b-7667c0888b77"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "6d0db9ed-2ce8-41f0-a2ff-42fee3192aa2",
              "productFamily": null,
              "file": null,
              "id": "4f5b8d0d-426b-4ebe-bb5e-da0f7ef7e986"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "59b7c1cd-fe4e-4451-a150-5d87e4254a1e",
              "productFamily": null,
              "file": null,
              "id": "f3617fcc-9ce9-4638-9bc5-4a4ce10202ff"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "023f6531-47c0-4752-aad6-e389da984715",
              "productFamily": null,
              "file": null,
              "id": "579ed287-befe-4f02-bcb0-3a38f3b46b5c"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "90b56ae9-3471-45dd-81ff-b4a0755b7e88",
              "productFamily": null,
              "file": null,
              "id": "f3870a45-e6e2-410a-9dbb-812edb976af7"
            },
            {
              "productFamilyId": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2",
              "fileId": "d57aa7f5-6fed-4c93-938e-969556e61809",
              "productFamily": null,
              "file": null,
              "id": "ac66692f-afb3-4bae-b385-686b3767bd60"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fa11c4d9-545f-49e9-b784-cd767ecdf2d2"
        },
        "file": null,
        "id": "80fe2c56-e1cc-41b3-9be3-859225d75c4f"
      },
      {
        "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
        "fileId": "4f95f7a8-4699-4850-b2df-444a25439797",
        "productFamily": {
          "name": "Classic Ultra Flip Top",
          "displayOrder": 42,
          "icon": "https://my.aptar.mobi/images/api/product/classic_ultra_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "be276645-3403-4f8b-be6c-deb195d00e8a",
              "productFamily": null,
              "file": null,
              "id": "9643848e-dc6d-4cf1-b87f-50aff8e0afc5"
            },
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "9681c17e-1c99-4ef4-add7-937452970ce6",
              "productFamily": null,
              "file": null,
              "id": "e5e9269f-56a5-4b89-9649-fbc07f5f6113"
            },
            null,
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "16094f06-ae68-4c06-8f4c-68c28492ee58",
              "productFamily": null,
              "file": null,
              "id": "5799ea68-055d-4ba7-a9aa-eafaf31e6a34"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "2af2605b-53bc-4ad7-bfed-7f33876f1799"
        },
        "file": null,
        "id": "36bc243b-e455-4ae4-b138-0e98f6de1c72"
      },
      {
        "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
        "fileId": "44d290ba-9c9c-4913-be09-686145cca5e4",
        "productFamily": {
          "name": "Classic Tube Top",
          "displayOrder": 63,
          "icon": "https://my.aptar.mobi/images/api/product/classic_tube_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "759903bf-0e3b-4fc2-b2ce-c7fa409754d2",
              "productFamily": null,
              "file": null,
              "id": "69adf1e6-925c-49f7-bd89-96daddc5c29f"
            },
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "f3626d0b-ba0c-44a5-b924-c9cef1316e2a",
              "productFamily": null,
              "file": null,
              "id": "93b8b0c1-8273-4b17-bc64-4de85b8ffea9"
            },
            {
              "productFamilyId": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f",
              "fileId": "7a7303ac-3a9c-4af8-ba38-18615ea1f3b0",
              "productFamily": null,
              "file": null,
              "id": "21761979-16c9-463d-a164-53226155c7d7"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "9b07a9f3-8ad0-4135-b56c-17e3ed3d7a3f"
        },
        "file": null,
        "id": "48d8f0df-786e-4fce-b199-2fa4d67c0c6d"
      },
      {
        "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
        "fileId": "5c6efaa6-196e-40bb-bb3e-65bc9528781a",
        "productFamily": {
          "name": "Ecolite Pour Spout",
          "displayOrder": 38,
          "icon": "https://my.aptar.mobi/images/api/product/ecolite_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "c140c5dc-103b-4fe2-8d31-1b7ff755655d",
              "productFamily": null,
              "file": null,
              "id": "63e0eb84-0b1a-4d97-84a7-20c8e6c092aa"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "39a0da27-9be6-43ec-886a-62c79daeb4b4",
              "productFamily": null,
              "file": null,
              "id": "a23f3fa8-482b-40f7-9e55-e071b3f814e6"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "8c633b37-8c65-4699-9ebc-6c87796854e4",
              "productFamily": null,
              "file": null,
              "id": "b6daee05-89e0-4913-a803-fba1d6be5a12"
            },
            {
              "productFamilyId": "75ff2259-59ab-4e09-bac2-18298f524af8",
              "fileId": "0727a10e-289d-4ab9-b081-48eea92bed94",
              "productFamily": null,
              "file": null,
              "id": "c2736950-a708-4d51-9744-624905c42349"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "75ff2259-59ab-4e09-bac2-18298f524af8"
        },
        "file": null,
        "id": "1fd71c6b-2936-4b1d-add8-20251b7b2cd0"
      },
      {
        "productFamilyId": "51bc28a7-8385-4ba4-b60d-b738e6ffcc19",
        "fileId": "ed94dca0-b63a-455a-ae01-2b3da2d13834",
        "productFamily": {
          "name": "Uno",
          "displayOrder": 31,
          "icon": "https://my.aptar.mobi/images/api/product/uno.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "464e103b-62aa-41cb-955b-f5d6af10caf0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "51bc28a7-8385-4ba4-b60d-b738e6ffcc19",
              "fileId": "eab3b26a-be53-4eb8-a557-1613e72dfb08",
              "productFamily": null,
              "file": null,
              "id": "81d000db-c63f-4796-85d0-3fdaa9c975be"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "51bc28a7-8385-4ba4-b60d-b738e6ffcc19"
        },
        "file": null,
        "id": "87abe78b-5392-49a0-8535-c87d3f8ba082"
      },
      {
        "productFamilyId": "1c5b79a8-c31f-47e4-b31d-7b484e2f08ea",
        "fileId": "8d5b2c72-ade8-4c9f-8e61-be81b05b7203",
        "productFamily": {
          "name": "Mini Sense Oval Flip Top",
          "displayOrder": 50,
          "icon": "https://my.aptar.mobi/images/api/product/mini_sense_oval_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "1c5b79a8-c31f-47e4-b31d-7b484e2f08ea",
              "fileId": "a0bb2978-1c30-4178-8b0f-8f67c2cb57e6",
              "productFamily": null,
              "file": null,
              "id": "a8eb110f-f1a2-43c4-b32c-80f20eae06ed"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "1c5b79a8-c31f-47e4-b31d-7b484e2f08ea"
        },
        "file": null,
        "id": "72fb2f2f-199f-45cd-8c9b-8e3fe950bdf0"
      },
      {
        "productFamilyId": "4bce6d9b-e5be-4091-8c5b-fe0cca8e1257",
        "fileId": "31b56115-d377-4340-bc2d-595697b3c401",
        "productFamily": {
          "name": "Minisense",
          "displayOrder": 29,
          "icon": "https://my.aptar.mobi/images/api/product/minisense.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "464e103b-62aa-41cb-955b-f5d6af10caf0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "4bce6d9b-e5be-4091-8c5b-fe0cca8e1257",
              "fileId": "3b939d16-fdfd-4ff3-a5c6-c840919e8754",
              "productFamily": null,
              "file": null,
              "id": "94213f3c-936c-4239-8917-180635fdfab1"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "4bce6d9b-e5be-4091-8c5b-fe0cca8e1257"
        },
        "file": null,
        "id": "e810ea6b-d647-4793-8b05-c4b895527f53"
      },
      {
        "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
        "fileId": "eb897110-d917-4a53-882d-c15cf7d9f720",
        "productFamily": {
          "name": "GS",
          "displayOrder": 3,
          "icon": "https://my.aptar.mobi/images/api/product/gs.png",
          "shortDescription": "GS Twist & Lock offers a range of dispensing lotion pumps",
          "description": "GS Twist & Lock offers a range of dispensing lotion pumps with a wide choice of aesthetic options and finishes to make your product stand out and meet the dispensing needs of personal care market.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7fa10693-df29-4d98-847a-226e16aa8172",
              "productFamily": null,
              "file": null,
              "id": "364076d2-caa2-4e42-ae3e-8ba480224da2"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "032c1483-be23-4848-8984-c949792ebc13",
              "productFamily": null,
              "file": null,
              "id": "6f5534af-5324-4b8b-9d0d-9c2c0c1bed59"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7e96e5aa-0c9a-483d-9e02-13c038fa6040",
              "productFamily": null,
              "file": null,
              "id": "12e70cd1-edfd-4891-b3d9-ec426cfd79ac"
            },
            null,
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "1531f521-582b-434d-8779-3dcd64e548cf",
              "productFamily": null,
              "file": null,
              "id": "3dfe37e3-9fd8-4a7c-a1a5-d99f733e6ed6"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "fc048843-9f7c-4440-97e2-3c681a7b3e9b",
              "productFamily": null,
              "file": null,
              "id": "60ce1f72-e20e-4fa1-8126-fa49570f5ecf"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed"
        },
        "file": null,
        "id": "97d50e18-5f93-4d35-987c-f8c6a4502b8e"
      },
      {
        "productFamilyId": "97d17697-900c-4dee-9b2c-89804c76b042",
        "fileId": "ee2c30ac-2372-44e5-bf14-dd7b0ed34d56",
        "productFamily": {
          "name": "Amplitude",
          "displayOrder": 91,
          "icon": "https://my.aptar.mobi/images/api/product/amplitude.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "1a31e118-40e4-43e6-926d-396bee187413",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": "2023-04-13T15:33:21.709828Z",
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "97d17697-900c-4dee-9b2c-89804c76b042"
        },
        "file": null,
        "id": "aa688b95-dfc3-4aa2-b33e-d11e37a27d6a"
      },
      {
        "productFamilyId": "615babe8-43cf-4ae3-9acb-ceb4e5d580e4",
        "fileId": "854d3c3b-ae75-48ae-9141-518bfee43700",
        "productFamily": {
          "name": "Ecolite SSQZ",
          "displayOrder": 45,
          "icon": "https://my.aptar.mobi/images/api/product/ecolite_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "615babe8-43cf-4ae3-9acb-ceb4e5d580e4"
        },
        "file": null,
        "id": "6a7582aa-87e0-45c6-a4dd-e67e01d17b2a"
      },
      {
        "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
        "fileId": "3f61dde4-0ea9-4492-8b5f-72ff919d9df0",
        "productFamily": {
          "name": "Ultra SSQZ",
          "displayOrder": 61,
          "icon": "https://my.aptar.mobi/images/api/product/ultra_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
              "fileId": "1376431a-c7b4-4892-9ab8-8ede5cc307f2",
              "productFamily": null,
              "file": null,
              "id": "2ac16318-1132-45c8-97a9-95f6f6728415"
            },
            {
              "productFamilyId": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52",
              "fileId": "c7f63059-4044-414b-9b0c-8c070ce65d7a",
              "productFamily": null,
              "file": null,
              "id": "9451ea6b-6650-4b37-b3c8-4cd634ba61a8"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "2b4dafd8-c4f1-44ca-b870-6d5dde7b6f52"
        },
        "file": null,
        "id": "551f15e0-b39f-454f-8a9e-4bd492f89fe6"
      },
      {
        "productFamilyId": "f0a73b57-e719-4377-97f2-668dae843804",
        "fileId": "08c6758b-e50c-4d51-bdf9-235eebf3803d",
        "productFamily": {
          "name": "Ultra Pour Spout",
          "displayOrder": 40,
          "icon": "https://my.aptar.mobi/images/api/product/ultra_pour_spout.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "a2732347-e65b-4fb8-915e-e02dc470fff6",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f0a73b57-e719-4377-97f2-668dae843804"
        },
        "file": null,
        "id": "b85771af-84ab-4546-b5e3-70dc79b66d80"
      },
      {
        "productFamilyId": "4bce6d9b-e5be-4091-8c5b-fe0cca8e1257",
        "fileId": "3b939d16-fdfd-4ff3-a5c6-c840919e8754",
        "productFamily": {
          "name": "Minisense",
          "displayOrder": 29,
          "icon": "https://my.aptar.mobi/images/api/product/minisense.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "464e103b-62aa-41cb-955b-f5d6af10caf0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "4bce6d9b-e5be-4091-8c5b-fe0cca8e1257",
              "fileId": "31b56115-d377-4340-bc2d-595697b3c401",
              "productFamily": null,
              "file": null,
              "id": "e810ea6b-d647-4793-8b05-c4b895527f53"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "4bce6d9b-e5be-4091-8c5b-fe0cca8e1257"
        },
        "file": null,
        "id": "94213f3c-936c-4239-8917-180635fdfab1"
      },
      {
        "productFamilyId": "1c5b79a8-c31f-47e4-b31d-7b484e2f08ea",
        "fileId": "a0bb2978-1c30-4178-8b0f-8f67c2cb57e6",
        "productFamily": {
          "name": "Mini Sense Oval Flip Top",
          "displayOrder": 50,
          "icon": "https://my.aptar.mobi/images/api/product/mini_sense_oval_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "1c5b79a8-c31f-47e4-b31d-7b484e2f08ea",
              "fileId": "8d5b2c72-ade8-4c9f-8e61-be81b05b7203",
              "productFamily": null,
              "file": null,
              "id": "72fb2f2f-199f-45cd-8c9b-8e3fe950bdf0"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "1c5b79a8-c31f-47e4-b31d-7b484e2f08ea"
        },
        "file": null,
        "id": "a8eb110f-f1a2-43c4-b32c-80f20eae06ed"
      },
      {
        "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
        "fileId": "db364083-5e09-4511-bad6-e312a93dfcf2",
        "productFamily": {
          "name": "Original",
          "displayOrder": 30,
          "icon": "https://my.aptar.mobi/images/api/product/original.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "464e103b-62aa-41cb-955b-f5d6af10caf0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
              "fileId": "038eee91-8066-4e6c-94ac-4f3a49b91175",
              "productFamily": null,
              "file": null,
              "id": "ff414053-7141-48d2-a458-bf6c9e32fa37"
            },
            null,
            {
              "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
              "fileId": "4adda1a3-3161-458f-870b-e9bf56b2dfb8",
              "productFamily": null,
              "file": null,
              "id": "bd24cec9-e380-444f-8361-a9b2ac5170c0"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "0f8f9749-c6cf-49fa-9a76-07af9057ee29"
        },
        "file": null,
        "id": "daa04836-4c1d-4b6b-8410-390c7618d61f"
      },
      {
        "productFamilyId": "397b4be4-54b5-4268-b3e6-2f21b5ba4911",
        "fileId": "1eeffa85-524c-49e1-b565-59d5938ffaea",
        "productFamily": {
          "name": "Tapered SSQZ",
          "displayOrder": 57,
          "icon": "https://my.aptar.mobi/images/api/product/tapered_ssqz.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "397b4be4-54b5-4268-b3e6-2f21b5ba4911"
        },
        "file": null,
        "id": "05ee270f-7db1-4ffb-9065-d2bf6cb2d28f"
      },
      {
        "productFamilyId": "58fe9e77-f200-4ceb-a12a-38eb1c8f648d",
        "fileId": "e3374d1f-f57d-4714-a083-034af474de29",
        "productFamily": {
          "name": "Tapered Snap Top",
          "displayOrder": 56,
          "icon": "https://my.aptar.mobi/images/api/product/tapered_snap_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "58fe9e77-f200-4ceb-a12a-38eb1c8f648d"
        },
        "file": null,
        "id": "14402645-68f5-480d-aa66-dcb78e29801c"
      },
      {
        "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
        "fileId": "1531f521-582b-434d-8779-3dcd64e548cf",
        "productFamily": {
          "name": "GS",
          "displayOrder": 3,
          "icon": "https://my.aptar.mobi/images/api/product/gs.png",
          "shortDescription": "GS Twist & Lock offers a range of dispensing lotion pumps",
          "description": "GS Twist & Lock offers a range of dispensing lotion pumps with a wide choice of aesthetic options and finishes to make your product stand out and meet the dispensing needs of personal care market.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7fa10693-df29-4d98-847a-226e16aa8172",
              "productFamily": null,
              "file": null,
              "id": "364076d2-caa2-4e42-ae3e-8ba480224da2"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "032c1483-be23-4848-8984-c949792ebc13",
              "productFamily": null,
              "file": null,
              "id": "6f5534af-5324-4b8b-9d0d-9c2c0c1bed59"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7e96e5aa-0c9a-483d-9e02-13c038fa6040",
              "productFamily": null,
              "file": null,
              "id": "12e70cd1-edfd-4891-b3d9-ec426cfd79ac"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "eb897110-d917-4a53-882d-c15cf7d9f720",
              "productFamily": null,
              "file": null,
              "id": "97d50e18-5f93-4d35-987c-f8c6a4502b8e"
            },
            null,
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "fc048843-9f7c-4440-97e2-3c681a7b3e9b",
              "productFamily": null,
              "file": null,
              "id": "60ce1f72-e20e-4fa1-8126-fa49570f5ecf"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed"
        },
        "file": null,
        "id": "3dfe37e3-9fd8-4a7c-a1a5-d99f733e6ed6"
      },
      {
        "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
        "fileId": "4db7d592-cc0f-479f-a86d-20e218fa5971",
        "productFamily": {
          "name": "GSA",
          "displayOrder": 1,
          "icon": "https://my.aptar.mobi/images/api/product/gsa.png",
          "shortDescription": "GSA Luxe is the premium version of our iconic GSA lotion pump.",
          "description": "The metal actuator and collar provide a unique and luxe design to your Personal Care finalProducts, while guaranteeing the same high perfomance technology featured in our well-known GSA lotion pump. Several bottle options are available: glass, aluminum, ceramic and porcelain.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "56639561-efff-4708-8099-39a1bb8bb278",
              "productFamily": null,
              "file": null,
              "id": "8e9595ed-1042-4768-9911-637462165c5b"
            },
            null,
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "1a83344f-602d-494b-8b94-40aa7506c5bc",
              "productFamily": null,
              "file": null,
              "id": "084b74a4-4f3c-43a7-bde5-b8024a8bd560"
            },
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "ee7b7a1d-d0db-4c28-aa4b-81530ce06cc0",
              "productFamily": null,
              "file": null,
              "id": "078b9ed1-1691-41ce-9c78-c7fbca2527d2"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "87539f71-6c06-425d-9821-ec7c2b2fc1e9"
        },
        "file": null,
        "id": "ad435d61-bb91-4d5e-b82a-c806122f5ffd"
      },
      {
        "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
        "fileId": "1a83344f-602d-494b-8b94-40aa7506c5bc",
        "productFamily": {
          "name": "GSA",
          "displayOrder": 1,
          "icon": "https://my.aptar.mobi/images/api/product/gsa.png",
          "shortDescription": "GSA Luxe is the premium version of our iconic GSA lotion pump.",
          "description": "The metal actuator and collar provide a unique and luxe design to your Personal Care finalProducts, while guaranteeing the same high perfomance technology featured in our well-known GSA lotion pump. Several bottle options are available: glass, aluminum, ceramic and porcelain.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "56639561-efff-4708-8099-39a1bb8bb278",
              "productFamily": null,
              "file": null,
              "id": "8e9595ed-1042-4768-9911-637462165c5b"
            },
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "4db7d592-cc0f-479f-a86d-20e218fa5971",
              "productFamily": null,
              "file": null,
              "id": "ad435d61-bb91-4d5e-b82a-c806122f5ffd"
            },
            null,
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "ee7b7a1d-d0db-4c28-aa4b-81530ce06cc0",
              "productFamily": null,
              "file": null,
              "id": "078b9ed1-1691-41ce-9c78-c7fbca2527d2"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "87539f71-6c06-425d-9821-ec7c2b2fc1e9"
        },
        "file": null,
        "id": "084b74a4-4f3c-43a7-bde5-b8024a8bd560"
      },
      {
        "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
        "fileId": "543ae354-8cbe-49d2-8910-09d10189030c",
        "productFamily": {
          "name": "Evolution",
          "displayOrder": 13,
          "icon": "https://my.aptar.mobi/images/api/product/evolution.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "1a31e118-40e4-43e6-926d-396bee187413",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "85a05e59-b36a-42a0-a37b-bd3da1bd6d1b",
              "productFamily": null,
              "file": null,
              "id": "2e1e9090-f245-4e16-a4f5-a8712266e1cd"
            },
            null,
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "12ea6259-c23f-4a64-946e-75354f3c1f44",
              "productFamily": null,
              "file": null,
              "id": "3083ff88-a950-413c-8c4e-269e48121acb"
            },
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "32d92baf-5826-4edb-a62e-fabaf3f1f12e",
              "productFamily": null,
              "file": null,
              "id": "756c5a22-db72-4711-99a7-2ccbe04782ec"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "6cc88fd1-bdcb-4d98-8d34-5353a397202f"
        },
        "file": null,
        "id": "2e5034ea-3511-4103-8073-1a9b5b696f76"
      },
      {
        "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
        "fileId": "12ea6259-c23f-4a64-946e-75354f3c1f44",
        "productFamily": {
          "name": "Evolution",
          "displayOrder": 13,
          "icon": "https://my.aptar.mobi/images/api/product/evolution.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "1a31e118-40e4-43e6-926d-396bee187413",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "85a05e59-b36a-42a0-a37b-bd3da1bd6d1b",
              "productFamily": null,
              "file": null,
              "id": "2e1e9090-f245-4e16-a4f5-a8712266e1cd"
            },
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "543ae354-8cbe-49d2-8910-09d10189030c",
              "productFamily": null,
              "file": null,
              "id": "2e5034ea-3511-4103-8073-1a9b5b696f76"
            },
            null,
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "32d92baf-5826-4edb-a62e-fabaf3f1f12e",
              "productFamily": null,
              "file": null,
              "id": "756c5a22-db72-4711-99a7-2ccbe04782ec"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "6cc88fd1-bdcb-4d98-8d34-5353a397202f"
        },
        "file": null,
        "id": "3083ff88-a950-413c-8c4e-269e48121acb"
      },
      {
        "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
        "fileId": "32d92baf-5826-4edb-a62e-fabaf3f1f12e",
        "productFamily": {
          "name": "Evolution",
          "displayOrder": 13,
          "icon": "https://my.aptar.mobi/images/api/product/evolution.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "1a31e118-40e4-43e6-926d-396bee187413",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "85a05e59-b36a-42a0-a37b-bd3da1bd6d1b",
              "productFamily": null,
              "file": null,
              "id": "2e1e9090-f245-4e16-a4f5-a8712266e1cd"
            },
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "543ae354-8cbe-49d2-8910-09d10189030c",
              "productFamily": null,
              "file": null,
              "id": "2e5034ea-3511-4103-8073-1a9b5b696f76"
            },
            {
              "productFamilyId": "6cc88fd1-bdcb-4d98-8d34-5353a397202f",
              "fileId": "12ea6259-c23f-4a64-946e-75354f3c1f44",
              "productFamily": null,
              "file": null,
              "id": "3083ff88-a950-413c-8c4e-269e48121acb"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "6cc88fd1-bdcb-4d98-8d34-5353a397202f"
        },
        "file": null,
        "id": "756c5a22-db72-4711-99a7-2ccbe04782ec"
      },
      {
        "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
        "fileId": "bcd7727e-2734-4512-8ccf-b8c2bed60e53",
        "productFamily": {
          "name": "Euromist",
          "displayOrder": 23,
          "icon": "https://my.aptar.mobi/images/api/product/euromist.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "4106cbc9-6743-4ad7-9209-9b5bf94e46ea",
              "productFamily": null,
              "file": null,
              "id": "8913c8cb-4dd7-4582-8b80-4ee772816cd9"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "cb0750a6-b7aa-40ca-ba01-81c635d173f0",
              "productFamily": null,
              "file": null,
              "id": "3b6e6d68-b15a-48c4-a053-19819c2f245c"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "370927f7-18d4-4e86-b425-9fb4db174c2b",
              "productFamily": null,
              "file": null,
              "id": "472f88a4-1b45-472b-b44b-45d381565ac4"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "21dae560-69dc-40ca-9502-08dc3c89bcbf",
              "productFamily": null,
              "file": null,
              "id": "ba2eff51-08c3-472c-a066-eaef824f34ee"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c6020ed7-aa5b-4435-b2ef-47822873b5ea",
              "productFamily": null,
              "file": null,
              "id": "43b9dc12-dd05-48ac-b375-720c567455bc"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "168c8f2e-997d-432e-ae78-d3218f542b0f",
              "productFamily": null,
              "file": null,
              "id": "ae212f08-b05d-4af8-8373-0cdf5b9fe318"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "c822d4c5-be3c-4681-bbe3-67cbeddf0176",
              "productFamily": null,
              "file": null,
              "id": "5c0aa594-00bf-4c58-a8aa-1382a20721dd"
            },
            {
              "productFamilyId": "5ed98ba8-c44a-4c67-9474-e7a725e02078",
              "fileId": "2c008d31-bb61-4269-a60d-b1151a1208a6",
              "productFamily": null,
              "file": null,
              "id": "e83b78ed-ae7a-442b-86df-bdfaa7bbea4d"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5ed98ba8-c44a-4c67-9474-e7a725e02078"
        },
        "file": null,
        "id": "5617e0bd-b067-4e36-ad34-318ca228f75b"
      },
      {
        "productFamilyId": "fea747b7-41ac-4831-a406-3705fa270282",
        "fileId": "c358cfd8-f20c-44d2-8e9a-1b812634eeea",
        "productFamily": {
          "name": "Euromist Heaven",
          "displayOrder": 24,
          "icon": "https://my.aptar.mobi/images/api/product/euromist_heaven.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "fea747b7-41ac-4831-a406-3705fa270282",
              "fileId": "014721d5-c4f5-4e44-a90a-cb9152189de9",
              "productFamily": null,
              "file": null,
              "id": "7a7b37d2-3eef-48ee-9ccc-12fcab417d2f"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fea747b7-41ac-4831-a406-3705fa270282"
        },
        "file": null,
        "id": "c153cbfe-e828-4fcd-84d5-ac18cd91f0b0"
      },
      {
        "productFamilyId": "fea747b7-41ac-4831-a406-3705fa270282",
        "fileId": "014721d5-c4f5-4e44-a90a-cb9152189de9",
        "productFamily": {
          "name": "Euromist Heaven",
          "displayOrder": 24,
          "icon": "https://my.aptar.mobi/images/api/product/euromist_heaven.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "fea747b7-41ac-4831-a406-3705fa270282",
              "fileId": "c358cfd8-f20c-44d2-8e9a-1b812634eeea",
              "productFamily": null,
              "file": null,
              "id": "c153cbfe-e828-4fcd-84d5-ac18cd91f0b0"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "fea747b7-41ac-4831-a406-3705fa270282"
        },
        "file": null,
        "id": "7a7b37d2-3eef-48ee-9ccc-12fcab417d2f"
      },
      {
        "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
        "fileId": "fc048843-9f7c-4440-97e2-3c681a7b3e9b",
        "productFamily": {
          "name": "GS",
          "displayOrder": 3,
          "icon": "https://my.aptar.mobi/images/api/product/gs.png",
          "shortDescription": "GS Twist & Lock offers a range of dispensing lotion pumps",
          "description": "GS Twist & Lock offers a range of dispensing lotion pumps with a wide choice of aesthetic options and finishes to make your product stand out and meet the dispensing needs of personal care market.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7fa10693-df29-4d98-847a-226e16aa8172",
              "productFamily": null,
              "file": null,
              "id": "364076d2-caa2-4e42-ae3e-8ba480224da2"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "032c1483-be23-4848-8984-c949792ebc13",
              "productFamily": null,
              "file": null,
              "id": "6f5534af-5324-4b8b-9d0d-9c2c0c1bed59"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "7e96e5aa-0c9a-483d-9e02-13c038fa6040",
              "productFamily": null,
              "file": null,
              "id": "12e70cd1-edfd-4891-b3d9-ec426cfd79ac"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "eb897110-d917-4a53-882d-c15cf7d9f720",
              "productFamily": null,
              "file": null,
              "id": "97d50e18-5f93-4d35-987c-f8c6a4502b8e"
            },
            {
              "productFamilyId": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed",
              "fileId": "1531f521-582b-434d-8779-3dcd64e548cf",
              "productFamily": null,
              "file": null,
              "id": "3dfe37e3-9fd8-4a7c-a1a5-d99f733e6ed6"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "44d0ee9b-4583-4019-ab22-b3dc2b70c5ed"
        },
        "file": null,
        "id": "60ce1f72-e20e-4fa1-8126-fa49570f5ecf"
      },
      {
        "productFamilyId": "a7ad1be5-4f04-4697-8e19-0b05db17272d",
        "fileId": "a7073891-6daf-4aff-8909-ba83338c41e5",
        "productFamily": {
          "name": "Embrace Flip Top",
          "displayOrder": 46,
          "icon": "https://my.aptar.mobi/images/api/product/embrace_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            null,
            {
              "productFamilyId": "a7ad1be5-4f04-4697-8e19-0b05db17272d",
              "fileId": "d8076876-3201-4dee-bbdb-bc2ce21f7998",
              "productFamily": null,
              "file": null,
              "id": "fc22eb4d-1d23-4434-910e-397bc4e53816"
            }
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "a7ad1be5-4f04-4697-8e19-0b05db17272d"
        },
        "file": null,
        "id": "899238d6-e4e8-487c-8d58-e8c38125f234"
      },
      {
        "productFamilyId": "a7ad1be5-4f04-4697-8e19-0b05db17272d",
        "fileId": "d8076876-3201-4dee-bbdb-bc2ce21f7998",
        "productFamily": {
          "name": "Embrace Flip Top",
          "displayOrder": 46,
          "icon": "https://my.aptar.mobi/images/api/product/embrace_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "a7ad1be5-4f04-4697-8e19-0b05db17272d",
              "fileId": "a7073891-6daf-4aff-8909-ba83338c41e5",
              "productFamily": null,
              "file": null,
              "id": "899238d6-e4e8-487c-8d58-e8c38125f234"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "a7ad1be5-4f04-4697-8e19-0b05db17272d"
        },
        "file": null,
        "id": "fc22eb4d-1d23-4434-910e-397bc4e53816"
      },
      {
        "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
        "fileId": "16094f06-ae68-4c06-8f4c-68c28492ee58",
        "productFamily": {
          "name": "Classic Ultra Flip Top",
          "displayOrder": 42,
          "icon": "https://my.aptar.mobi/images/api/product/classic_ultra_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "be276645-3403-4f8b-be6c-deb195d00e8a",
              "productFamily": null,
              "file": null,
              "id": "9643848e-dc6d-4cf1-b87f-50aff8e0afc5"
            },
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "9681c17e-1c99-4ef4-add7-937452970ce6",
              "productFamily": null,
              "file": null,
              "id": "e5e9269f-56a5-4b89-9649-fbc07f5f6113"
            },
            {
              "productFamilyId": "2af2605b-53bc-4ad7-bfed-7f33876f1799",
              "fileId": "4f95f7a8-4699-4850-b2df-444a25439797",
              "productFamily": null,
              "file": null,
              "id": "36bc243b-e455-4ae4-b138-0e98f6de1c72"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "2af2605b-53bc-4ad7-bfed-7f33876f1799"
        },
        "file": null,
        "id": "5799ea68-055d-4ba7-a9aa-eafaf31e6a34"
      },
      {
        "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
        "fileId": "9ea4b41f-f01f-43cb-8511-83de803dc33c",
        "productFamily": {
          "name": "Classic Flip Top",
          "displayOrder": 41,
          "icon": "https://my.aptar.mobi/images/api/product/classic_flip_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "bce2dc8a-4808-4e85-bd33-62c67295967a",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "71639515-38c9-41ed-8e0e-05c5c5a08ff5",
              "productFamily": null,
              "file": null,
              "id": "872620f8-5919-4a7e-b3d1-66089ff9bbb1"
            },
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "7681a261-4143-45d2-9fe4-78c2c04bf934",
              "productFamily": null,
              "file": null,
              "id": "096d3c26-25a8-4d95-846f-34766730f194"
            },
            {
              "productFamilyId": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8",
              "fileId": "4d715cee-0a72-47c6-b23a-f6c543609d72",
              "productFamily": null,
              "file": null,
              "id": "8e5d61e8-1ae4-44a2-8940-aaea4a59a349"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "8b8b8271-5b0b-45b3-a4db-bd401b496ca8"
        },
        "file": null,
        "id": "611ff5a8-fd94-4920-a99f-b2e48bb2d1fb"
      },
      {
        "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
        "fileId": "4adda1a3-3161-458f-870b-e9bf56b2dfb8",
        "productFamily": {
          "name": "Original",
          "displayOrder": 30,
          "icon": "https://my.aptar.mobi/images/api/product/original.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "464e103b-62aa-41cb-955b-f5d6af10caf0",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
              "fileId": "038eee91-8066-4e6c-94ac-4f3a49b91175",
              "productFamily": null,
              "file": null,
              "id": "ff414053-7141-48d2-a458-bf6c9e32fa37"
            },
            {
              "productFamilyId": "0f8f9749-c6cf-49fa-9a76-07af9057ee29",
              "fileId": "db364083-5e09-4511-bad6-e312a93dfcf2",
              "productFamily": null,
              "file": null,
              "id": "daa04836-4c1d-4b6b-8410-390c7618d61f"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "0f8f9749-c6cf-49fa-9a76-07af9057ee29"
        },
        "file": null,
        "id": "bd24cec9-e380-444f-8361-a9b2ac5170c0"
      },
      {
        "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
        "fileId": "0744566b-90a3-45b9-9352-346e336d52ea",
        "productFamily": {
          "name": "Flat Disc Top",
          "displayOrder": 35,
          "icon": "https://my.aptar.mobi/images/api/product/flat_disc_top.png",
          "shortDescription": null,
          "description": null,
          "categoryId": "afc2b34d-5a7f-4847-b301-6af17336b894",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "df5b4c7b-e648-47a4-b410-aadaea12faaf",
              "productFamily": null,
              "file": null,
              "id": "e441f4e0-5ac0-4534-8f88-d50a4de7150f"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "a3fbd2c6-ddfd-430e-a8e9-5a20687aebf9",
              "productFamily": null,
              "file": null,
              "id": "b0668aec-9037-4d82-bb15-e684404ac7c5"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "c1e7a3d7-369a-44c3-8a1b-cdeda46689ce",
              "productFamily": null,
              "file": null,
              "id": "b030912b-df96-4c61-9efc-fdae755ca852"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "8e9f8ec2-97c3-4aa2-88f4-bf2264bd8c3e",
              "productFamily": null,
              "file": null,
              "id": "0affa1bb-c7c0-4e5c-b1c4-5405049c2aec"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "07c6c5a0-f910-4483-a0f9-5377659eab81",
              "productFamily": null,
              "file": null,
              "id": "d2f4a6e0-5059-4f37-bca2-8c75dfbfb65b"
            },
            {
              "productFamilyId": "5f7471fb-3ec7-4a06-9efc-60613999905a",
              "fileId": "23790d65-e81d-48fa-ab12-1a958dfdec4a",
              "productFamily": null,
              "file": null,
              "id": "c0d32317-2253-4fdc-9434-991afd8fc19e"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "5f7471fb-3ec7-4a06-9efc-60613999905a"
        },
        "file": null,
        "id": "99ee68fe-7692-4fb8-8045-a0ccb0c6af71"
      },
      {
        "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
        "fileId": "ee7b7a1d-d0db-4c28-aa4b-81530ce06cc0",
        "productFamily": {
          "name": "GSA",
          "displayOrder": 1,
          "icon": "https://my.aptar.mobi/images/api/product/gsa.png",
          "shortDescription": "GSA Luxe is the premium version of our iconic GSA lotion pump.",
          "description": "The metal actuator and collar provide a unique and luxe design to your Personal Care finalProducts, while guaranteeing the same high perfomance technology featured in our well-known GSA lotion pump. Several bottle options are available: glass, aluminum, ceramic and porcelain.",
          "categoryId": "9987514e-7518-45ef-a1f4-163c22358e46",
          "category": null,
          "compatibilityVariances": null,
          "recyclabilityVariances": null,
          "productFamilyMarketSegments": null,
          "productRegions": null,
          "productFamilyApplicationFields": null,
          "productFamilyAptarSegments": null,
          "productFamilyDigitalServices": [],
          "productFamilyFiles": [
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "56639561-efff-4708-8099-39a1bb8bb278",
              "productFamily": null,
              "file": null,
              "id": "8e9595ed-1042-4768-9911-637462165c5b"
            },
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "4db7d592-cc0f-479f-a86d-20e218fa5971",
              "productFamily": null,
              "file": null,
              "id": "ad435d61-bb91-4d5e-b82a-c806122f5ffd"
            },
            {
              "productFamilyId": "87539f71-6c06-425d-9821-ec7c2b2fc1e9",
              "fileId": "1a83344f-602d-494b-8b94-40aa7506c5bc",
              "productFamily": null,
              "file": null,
              "id": "084b74a4-4f3c-43a7-bde5-b8024a8bd560"
            },
            null
          ],
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "87539f71-6c06-425d-9821-ec7c2b2fc1e9"
        },
        "file": null,
        "id": "078b9ed1-1691-41ce-9c78-c7fbca2527d2"
      }
    ];
    const categories = [
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
        "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/pumps.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            null,
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/spray_pumps.svg",
              "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Spray Pumps",
              "displayOrder": 2,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0"
            }
          ],
          "productFamilies": null,
          "name": "Pumps",
          "displayOrder": 4,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5"
        },
        "childCategories": [
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
            "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Lotion Pumps (Over 1 CC)",
            "displayOrder": 6,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "9987514e-7518-45ef-a1f4-163c22358e46"
          },
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/treatment pumps under 1 cc.svg",
            "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Treatment Pumps (Under 1 CC)",
            "displayOrder": 7,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "1a31e118-40e4-43e6-926d-396bee187413"
          }
        ],
        "productFamilies": null,
        "name": "Lotion Pumps",
        "displayOrder": 1,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/spray_pumps.svg",
        "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/pumps.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
              "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
              "parentCategory": null,
              "childCategories": [
                {
                  "comingSoon": false,
                  "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
                  "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
                  "parentCategory": null,
                  "childCategories": null,
                  "productFamilies": null,
                  "name": "Lotion Pumps (Over 1 CC)",
                  "displayOrder": 6,
                  "createdBy": null,
                  "createdOn": null,
                  "lastUpdatedBy": null,
                  "lastUpdatedOn": null,
                  "id": "9987514e-7518-45ef-a1f4-163c22358e46"
                },
                {
                  "comingSoon": false,
                  "icon": "https://my.aptar.mobi/images/api/product_category/treatment pumps under 1 cc.svg",
                  "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
                  "parentCategory": null,
                  "childCategories": null,
                  "productFamilies": null,
                  "name": "Treatment Pumps (Under 1 CC)",
                  "displayOrder": 7,
                  "createdBy": null,
                  "createdOn": null,
                  "lastUpdatedBy": null,
                  "lastUpdatedOn": null,
                  "id": "1a31e118-40e4-43e6-926d-396bee187413"
                }
              ],
              "productFamilies": null,
              "name": "Lotion Pumps",
              "displayOrder": 1,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb"
            },
            null
          ],
          "productFamilies": null,
          "name": "Pumps",
          "displayOrder": 4,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Spray Pumps",
        "displayOrder": 2,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/valves.svg",
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": [
          {
            "comingSoon": false,
            "icon": null,
            "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Bag On Valve",
            "displayOrder": 14,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "a8b21efc-30fc-4984-aa73-25d9c5cb02e7"
          },
          {
            "comingSoon": false,
            "icon": null,
            "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Continuous",
            "displayOrder": 15,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "fc6d17ee-122f-4f69-9390-d0dd0fe09cf1"
          },
          {
            "comingSoon": false,
            "icon": null,
            "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Metered",
            "displayOrder": 16,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "4f3d5959-4d87-4d2a-8f98-87b238b5820b"
          }
        ],
        "productFamilies": null,
        "name": "Valves",
        "displayOrder": 3,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "f6db40f3-7cf5-4341-95f7-a97293cebf68"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/pumps.svg",
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": [
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
            "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
            "parentCategory": null,
            "childCategories": [
              {
                "comingSoon": false,
                "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
                "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
                "parentCategory": null,
                "childCategories": null,
                "productFamilies": null,
                "name": "Lotion Pumps (Over 1 CC)",
                "displayOrder": 6,
                "createdBy": null,
                "createdOn": null,
                "lastUpdatedBy": null,
                "lastUpdatedOn": null,
                "id": "9987514e-7518-45ef-a1f4-163c22358e46"
              },
              {
                "comingSoon": false,
                "icon": "https://my.aptar.mobi/images/api/product_category/treatment pumps under 1 cc.svg",
                "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
                "parentCategory": null,
                "childCategories": null,
                "productFamilies": null,
                "name": "Treatment Pumps (Under 1 CC)",
                "displayOrder": 7,
                "createdBy": null,
                "createdOn": null,
                "lastUpdatedBy": null,
                "lastUpdatedOn": null,
                "id": "1a31e118-40e4-43e6-926d-396bee187413"
              }
            ],
            "productFamilies": null,
            "name": "Lotion Pumps",
            "displayOrder": 1,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb"
          },
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/spray_pumps.svg",
            "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Spray Pumps",
            "displayOrder": 2,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0"
          }
        ],
        "productFamilies": null,
        "name": "Pumps",
        "displayOrder": 4,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/closures.svg",
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": [
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/disctop.svg",
            "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Disc Tops",
            "displayOrder": 8,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "afc2b34d-5a7f-4847-b301-6af17336b894"
          },
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/wide mouth.svg",
            "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Wide Mouth Snap Tops",
            "displayOrder": 9,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "35dea2c0-fc90-47a7-92eb-c79aa9ea5994"
          },
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/snap tops.svg",
            "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Snap Tops",
            "displayOrder": 10,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "bce2dc8a-4808-4e85-bd33-62c67295967a"
          },
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/tube tops.svg",
            "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Tube Tops",
            "displayOrder": 11,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94"
          },
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/pour-spot.svg",
            "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Pour Spouts",
            "displayOrder": 12,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "a2732347-e65b-4fb8-915e-e02dc470fff6"
          },
          {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/beverage closure.svg",
            "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Beverage Closures",
            "displayOrder": 13,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "464e103b-62aa-41cb-955b-f5d6af10caf0"
          }
        ],
        "productFamilies": null,
        "name": "Closures",
        "displayOrder": 5,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
        "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
          "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
          "parentCategory": {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/pumps.svg",
            "parentCategoryId": null,
            "parentCategory": null,
            "childCategories": [
              null,
              {
                "comingSoon": false,
                "icon": "https://my.aptar.mobi/images/api/product_category/spray_pumps.svg",
                "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
                "parentCategory": null,
                "childCategories": null,
                "productFamilies": null,
                "name": "Spray Pumps",
                "displayOrder": 2,
                "createdBy": null,
                "createdOn": null,
                "lastUpdatedBy": null,
                "lastUpdatedOn": null,
                "id": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0"
              }
            ],
            "productFamilies": null,
            "name": "Pumps",
            "displayOrder": 4,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5"
          },
          "childCategories": [
            null,
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/treatment pumps under 1 cc.svg",
              "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Treatment Pumps (Under 1 CC)",
              "displayOrder": 7,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "1a31e118-40e4-43e6-926d-396bee187413"
            }
          ],
          "productFamilies": null,
          "name": "Lotion Pumps",
          "displayOrder": 1,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Lotion Pumps (Over 1 CC)",
        "displayOrder": 6,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "9987514e-7518-45ef-a1f4-163c22358e46"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/treatment pumps under 1 cc.svg",
        "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
          "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
          "parentCategory": {
            "comingSoon": false,
            "icon": "https://my.aptar.mobi/images/api/product_category/pumps.svg",
            "parentCategoryId": null,
            "parentCategory": null,
            "childCategories": [
              null,
              {
                "comingSoon": false,
                "icon": "https://my.aptar.mobi/images/api/product_category/spray_pumps.svg",
                "parentCategoryId": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5",
                "parentCategory": null,
                "childCategories": null,
                "productFamilies": null,
                "name": "Spray Pumps",
                "displayOrder": 2,
                "createdBy": null,
                "createdOn": null,
                "lastUpdatedBy": null,
                "lastUpdatedOn": null,
                "id": "64eb3b66-49e3-4b58-89db-f10b9d1e38b0"
              }
            ],
            "productFamilies": null,
            "name": "Pumps",
            "displayOrder": 4,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "b9e94e7c-3818-46ca-b0ad-08a07c62a2a5"
          },
          "childCategories": [
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/lotion pump.svg",
              "parentCategoryId": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Lotion Pumps (Over 1 CC)",
              "displayOrder": 6,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "9987514e-7518-45ef-a1f4-163c22358e46"
            },
            null
          ],
          "productFamilies": null,
          "name": "Lotion Pumps",
          "displayOrder": 1,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "7057e2b2-7600-4fe3-ab8e-112cb77d11cb"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Treatment Pumps (Under 1 CC)",
        "displayOrder": 7,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "1a31e118-40e4-43e6-926d-396bee187413"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/disctop.svg",
        "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/closures.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            null,
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/wide mouth.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Wide Mouth Snap Tops",
              "displayOrder": 9,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "35dea2c0-fc90-47a7-92eb-c79aa9ea5994"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/snap tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Snap Tops",
              "displayOrder": 10,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "bce2dc8a-4808-4e85-bd33-62c67295967a"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/tube tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Tube Tops",
              "displayOrder": 11,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/pour-spot.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Pour Spouts",
              "displayOrder": 12,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "a2732347-e65b-4fb8-915e-e02dc470fff6"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/beverage closure.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Beverage Closures",
              "displayOrder": 13,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "464e103b-62aa-41cb-955b-f5d6af10caf0"
            }
          ],
          "productFamilies": null,
          "name": "Closures",
          "displayOrder": 5,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Disc Tops",
        "displayOrder": 8,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "afc2b34d-5a7f-4847-b301-6af17336b894"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/wide mouth.svg",
        "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/closures.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/disctop.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Disc Tops",
              "displayOrder": 8,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "afc2b34d-5a7f-4847-b301-6af17336b894"
            },
            null,
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/snap tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Snap Tops",
              "displayOrder": 10,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "bce2dc8a-4808-4e85-bd33-62c67295967a"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/tube tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Tube Tops",
              "displayOrder": 11,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/pour-spot.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Pour Spouts",
              "displayOrder": 12,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "a2732347-e65b-4fb8-915e-e02dc470fff6"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/beverage closure.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Beverage Closures",
              "displayOrder": 13,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "464e103b-62aa-41cb-955b-f5d6af10caf0"
            }
          ],
          "productFamilies": null,
          "name": "Closures",
          "displayOrder": 5,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Wide Mouth Snap Tops",
        "displayOrder": 9,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "35dea2c0-fc90-47a7-92eb-c79aa9ea5994"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/snap tops.svg",
        "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/closures.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/disctop.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Disc Tops",
              "displayOrder": 8,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "afc2b34d-5a7f-4847-b301-6af17336b894"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/wide mouth.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Wide Mouth Snap Tops",
              "displayOrder": 9,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "35dea2c0-fc90-47a7-92eb-c79aa9ea5994"
            },
            null,
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/tube tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Tube Tops",
              "displayOrder": 11,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/pour-spot.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Pour Spouts",
              "displayOrder": 12,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "a2732347-e65b-4fb8-915e-e02dc470fff6"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/beverage closure.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Beverage Closures",
              "displayOrder": 13,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "464e103b-62aa-41cb-955b-f5d6af10caf0"
            }
          ],
          "productFamilies": null,
          "name": "Closures",
          "displayOrder": 5,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Snap Tops",
        "displayOrder": 10,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "bce2dc8a-4808-4e85-bd33-62c67295967a"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/tube tops.svg",
        "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/closures.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/disctop.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Disc Tops",
              "displayOrder": 8,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "afc2b34d-5a7f-4847-b301-6af17336b894"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/wide mouth.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Wide Mouth Snap Tops",
              "displayOrder": 9,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "35dea2c0-fc90-47a7-92eb-c79aa9ea5994"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/snap tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Snap Tops",
              "displayOrder": 10,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "bce2dc8a-4808-4e85-bd33-62c67295967a"
            },
            null,
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/pour-spot.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Pour Spouts",
              "displayOrder": 12,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "a2732347-e65b-4fb8-915e-e02dc470fff6"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/beverage closure.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Beverage Closures",
              "displayOrder": 13,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "464e103b-62aa-41cb-955b-f5d6af10caf0"
            }
          ],
          "productFamilies": null,
          "name": "Closures",
          "displayOrder": 5,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Tube Tops",
        "displayOrder": 11,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/pour-spot.svg",
        "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/closures.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/disctop.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Disc Tops",
              "displayOrder": 8,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "afc2b34d-5a7f-4847-b301-6af17336b894"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/wide mouth.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Wide Mouth Snap Tops",
              "displayOrder": 9,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "35dea2c0-fc90-47a7-92eb-c79aa9ea5994"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/snap tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Snap Tops",
              "displayOrder": 10,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "bce2dc8a-4808-4e85-bd33-62c67295967a"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/tube tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Tube Tops",
              "displayOrder": 11,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94"
            },
            null,
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/beverage closure.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Beverage Closures",
              "displayOrder": 13,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "464e103b-62aa-41cb-955b-f5d6af10caf0"
            }
          ],
          "productFamilies": null,
          "name": "Closures",
          "displayOrder": 5,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Pour Spouts",
        "displayOrder": 12,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "a2732347-e65b-4fb8-915e-e02dc470fff6"
      },
      {
        "comingSoon": false,
        "icon": "https://my.aptar.mobi/images/api/product_category/beverage closure.svg",
        "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/closures.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/disctop.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Disc Tops",
              "displayOrder": 8,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "afc2b34d-5a7f-4847-b301-6af17336b894"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/wide mouth.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Wide Mouth Snap Tops",
              "displayOrder": 9,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "35dea2c0-fc90-47a7-92eb-c79aa9ea5994"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/snap tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Snap Tops",
              "displayOrder": 10,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "bce2dc8a-4808-4e85-bd33-62c67295967a"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/tube tops.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Tube Tops",
              "displayOrder": 11,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "09ac8788-cf92-4cf9-b2f7-60fc4cf6fd94"
            },
            {
              "comingSoon": false,
              "icon": "https://my.aptar.mobi/images/api/product_category/pour-spot.svg",
              "parentCategoryId": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Pour Spouts",
              "displayOrder": 12,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "a2732347-e65b-4fb8-915e-e02dc470fff6"
            },
            null
          ],
          "productFamilies": null,
          "name": "Closures",
          "displayOrder": 5,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f946716e-4b8c-4b5c-92aa-60536fd1dbaf"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Beverage Closures",
        "displayOrder": 13,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "464e103b-62aa-41cb-955b-f5d6af10caf0"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/valves.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            null,
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Continuous",
              "displayOrder": 15,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "fc6d17ee-122f-4f69-9390-d0dd0fe09cf1"
            },
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Metered",
              "displayOrder": 16,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "4f3d5959-4d87-4d2a-8f98-87b238b5820b"
            }
          ],
          "productFamilies": null,
          "name": "Valves",
          "displayOrder": 3,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f6db40f3-7cf5-4341-95f7-a97293cebf68"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Bag On Valve",
        "displayOrder": 14,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "a8b21efc-30fc-4984-aa73-25d9c5cb02e7"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/valves.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Bag On Valve",
              "displayOrder": 14,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "a8b21efc-30fc-4984-aa73-25d9c5cb02e7"
            },
            null,
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Metered",
              "displayOrder": 16,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "4f3d5959-4d87-4d2a-8f98-87b238b5820b"
            }
          ],
          "productFamilies": null,
          "name": "Valves",
          "displayOrder": 3,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f6db40f3-7cf5-4341-95f7-a97293cebf68"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Continuous",
        "displayOrder": 15,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "fc6d17ee-122f-4f69-9390-d0dd0fe09cf1"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
        "parentCategory": {
          "comingSoon": false,
          "icon": "https://my.aptar.mobi/images/api/product_category/valves.svg",
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Bag On Valve",
              "displayOrder": 14,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "a8b21efc-30fc-4984-aa73-25d9c5cb02e7"
            },
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f6db40f3-7cf5-4341-95f7-a97293cebf68",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Continuous",
              "displayOrder": 15,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "fc6d17ee-122f-4f69-9390-d0dd0fe09cf1"
            },
            null
          ],
          "productFamilies": null,
          "name": "Valves",
          "displayOrder": 3,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f6db40f3-7cf5-4341-95f7-a97293cebf68"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Metered",
        "displayOrder": 16,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "4f3d5959-4d87-4d2a-8f98-87b238b5820b"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": null,
        "productFamilies": null,
        "name": "Valve Actuators",
        "displayOrder": 17,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "7b2dcc53-b342-4812-93ad-3315f5f7e0cb"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": null,
        "productFamilies": null,
        "name": "Airless",
        "displayOrder": 18,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "6be31351-4486-4c88-8b74-384b27b851b9"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": null,
        "productFamilies": null,
        "name": "Applicators & Droppers",
        "displayOrder": 19,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "e32b26ff-ea1c-4e4e-868d-a7c441715121"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": [
          {
            "comingSoon": false,
            "icon": null,
            "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Guided",
            "displayOrder": 23,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "d080f1b7-abf9-4972-a398-a095a22f1ec0"
          },
          {
            "comingSoon": false,
            "icon": null,
            "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Non-Guided",
            "displayOrder": 24,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "bce652ce-15bf-436d-a9cc-0a18583f56f1"
          },
          {
            "comingSoon": false,
            "icon": null,
            "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
            "parentCategory": null,
            "childCategories": null,
            "productFamilies": null,
            "name": "Mini",
            "displayOrder": 25,
            "createdBy": null,
            "createdOn": null,
            "lastUpdatedBy": null,
            "lastUpdatedOn": null,
            "id": "321fbd2d-25a2-4eda-813a-f481a6e8b4e9"
          }
        ],
        "productFamilies": null,
        "name": "Lipstick Packaging",
        "displayOrder": 20,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": null,
        "productFamilies": null,
        "name": "Collars",
        "displayOrder": 21,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "d49df255-047f-4fee-87be-5d3759910a22"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": null,
        "parentCategory": null,
        "childCategories": null,
        "productFamilies": null,
        "name": "Mini/On the Go Packaging",
        "displayOrder": 22,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "d36557cf-7552-460f-b9bb-4b7c92e7567c"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
        "parentCategory": {
          "comingSoon": false,
          "icon": null,
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            null,
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Non-Guided",
              "displayOrder": 24,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "bce652ce-15bf-436d-a9cc-0a18583f56f1"
            },
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Mini",
              "displayOrder": 25,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "321fbd2d-25a2-4eda-813a-f481a6e8b4e9"
            }
          ],
          "productFamilies": null,
          "name": "Lipstick Packaging",
          "displayOrder": 20,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Guided",
        "displayOrder": 23,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "d080f1b7-abf9-4972-a398-a095a22f1ec0"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
        "parentCategory": {
          "comingSoon": false,
          "icon": null,
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Guided",
              "displayOrder": 23,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "d080f1b7-abf9-4972-a398-a095a22f1ec0"
            },
            null,
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Mini",
              "displayOrder": 25,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "321fbd2d-25a2-4eda-813a-f481a6e8b4e9"
            }
          ],
          "productFamilies": null,
          "name": "Lipstick Packaging",
          "displayOrder": 20,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Non-Guided",
        "displayOrder": 24,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "bce652ce-15bf-436d-a9cc-0a18583f56f1"
      },
      {
        "comingSoon": false,
        "icon": null,
        "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
        "parentCategory": {
          "comingSoon": false,
          "icon": null,
          "parentCategoryId": null,
          "parentCategory": null,
          "childCategories": [
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Guided",
              "displayOrder": 23,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "d080f1b7-abf9-4972-a398-a095a22f1ec0"
            },
            {
              "comingSoon": false,
              "icon": null,
              "parentCategoryId": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4",
              "parentCategory": null,
              "childCategories": null,
              "productFamilies": null,
              "name": "Non-Guided",
              "displayOrder": 24,
              "createdBy": null,
              "createdOn": null,
              "lastUpdatedBy": null,
              "lastUpdatedOn": null,
              "id": "bce652ce-15bf-436d-a9cc-0a18583f56f1"
            },
            null
          ],
          "productFamilies": null,
          "name": "Lipstick Packaging",
          "displayOrder": 20,
          "createdBy": null,
          "createdOn": null,
          "lastUpdatedBy": null,
          "lastUpdatedOn": null,
          "id": "f63ba9e1-1d99-4d9c-b8fc-1bb84eeee1d4"
        },
        "childCategories": null,
        "productFamilies": null,
        "name": "Mini",
        "displayOrder": 25,
        "createdBy": null,
        "createdOn": null,
        "lastUpdatedBy": null,
        "lastUpdatedOn": null,
        "id": "321fbd2d-25a2-4eda-813a-f481a6e8b4e9"
      }
    ];
    const finalCustomers = [
      {
        "partnerId": "27ed76ce-bdb9-41f0-aca2-a12c59ed2d17",
        "finalCustomer": "Aptar rep"
      },
      {
        "partnerId": "27ed76ce-bdb9-41f0-aca2-a12c59ed2d17",
        "finalCustomer": "Henkil"
      },
      {
        "partnerId": "27ed76ce-bdb9-41f0-aca2-a12c59ed2d17",
        "finalCustomer": "new customer"
      },
      {
        "partnerId": "27ed76ce-bdb9-41f0-aca2-a12c59ed2d17",
        "finalCustomer": "Henkel"
      },
      {
        "partnerId": "27ed76ce-bdb9-41f0-aca2-a12c59ed2d17",
        "finalCustomer": "west cost"
      },
      {
        "partnerId": "27ed76ce-bdb9-41f0-aca2-a12c59ed2d17",
        "finalCustomer": "p and g"
      },
      {
        "partnerId": "27ed76ce-bdb9-41f0-aca2-a12c59ed2d17",
        "finalCustomer": "integrant"
      }
    ];
    return {products, categories, finalCustomers};
  }

}
