/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataCatalogRestClient } from "@azure/arm-datacatalog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The Delete Azure Data Catalog Service operation deletes an existing data catalog.
 *
 * @summary The Delete Azure Data Catalog Service operation deletes an existing data catalog.
 * x-ms-original-file: specification/datacatalog/resource-manager/Microsoft.DataCatalog/stable/2016-03-30/examples/DeleteADCCatalog.json
 */
async function deleteAzureDataCatalogService() {
  const subscriptionId = "12345678-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const catalogName = "exampleCatalog";
  const credential = new DefaultAzureCredential();
  const client = new DataCatalogRestClient(credential, subscriptionId);
  const result = await client.aDCCatalogs.beginDeleteAndWait(
    resourceGroupName,
    catalogName
  );
  console.log(result);
}

deleteAzureDataCatalogService().catch(console.error);