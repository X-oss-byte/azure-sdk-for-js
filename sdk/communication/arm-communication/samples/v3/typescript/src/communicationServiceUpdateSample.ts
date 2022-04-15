/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CommunicationServiceResource,
  CommunicationServiceUpdateOptionalParams,
  CommunicationServiceManagementClient
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Operation to update an existing CommunicationService.
 *
 * @summary Operation to update an existing CommunicationService.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/stable/2020-08-20/examples/update.json
 */
async function updateResource() {
  const subscriptionId = "12345";
  const resourceGroupName = "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const parameters: CommunicationServiceResource = {
    tags: { newTag: "newVal" }
  };
  const options: CommunicationServiceUpdateOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.communicationService.update(
    resourceGroupName,
    communicationServiceName,
    options
  );
  console.log(result);
}

updateResource().catch(console.error);