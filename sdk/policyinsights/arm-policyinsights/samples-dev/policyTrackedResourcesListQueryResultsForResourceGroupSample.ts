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
  PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams,
  PolicyInsightsClient
} from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Queries policy tracked resources under the resource group.
 *
 * @summary Queries policy tracked resources under the resource group.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/preview/2018-07-01-preview/examples/PolicyTrackedResources_QueryResourceGroupScope.json
 */
async function queryAtResourceGroupScope() {
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const resourceGroupName = "myResourceGroup";
  const policyTrackedResourcesResource = "default";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyTrackedResources.listQueryResultsForResourceGroup(
    resourceGroupName,
    policyTrackedResourcesResource
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryAtResourceGroupScope().catch(console.error);

/**
 * This sample demonstrates how to Queries policy tracked resources under the resource group.
 *
 * @summary Queries policy tracked resources under the resource group.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/preview/2018-07-01-preview/examples/PolicyTrackedResources_QueryResourceGroupScopeWithFilterAndTop.json
 */
async function queryAtResourceGroupScopeUsingQueryParameters() {
  const subscriptionId = "fffedd8f-ffff-fffd-fffd-fffed2f84852";
  const resourceGroupName = "myResourceGroup";
  const policyTrackedResourcesResource = "default";
  const top = 1;
  const filter =
    "PolicyAssignmentId eq '/subscriptions/fff8dfdb-fff3-fff0-fff4-fffdcbe6b2ef/resourceGroups/myResourceGroup/providers/Microsoft.Authorization/policyAssignments/myPolicyAssignment' AND TrackedResourceId eq '/subscriptions/fff8dfdb-fff3-fff0-fff4-fffdcbe6b2ef/resourceGroups/myResourceGroup/providers/Microsoft.Example/exampleResourceType/myResource/nestedResourceType/TrackedResource1'";
  const options: PolicyTrackedResourcesListQueryResultsForResourceGroupOptionalParams = {
    queryOptions: { top: top, filter: filter }
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyTrackedResources.listQueryResultsForResourceGroup(
    resourceGroupName,
    policyTrackedResourcesResource,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

queryAtResourceGroupScopeUsingQueryParameters().catch(console.error);