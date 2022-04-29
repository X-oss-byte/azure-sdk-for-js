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
  ExpressRouteCircuit,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates an express route circuit.
 *
 * @summary Creates or updates an express route circuit.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ExpressRouteCircuitCreate.json
 */
async function createExpressRouteCircuit() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const circuitName = "circuitName";
  const parameters: ExpressRouteCircuit = {
    allowClassicOperations: false,
    authorizations: [],
    location: "Brazil South",
    peerings: [],
    serviceProviderProperties: {
      bandwidthInMbps: 200,
      peeringLocation: "Silicon Valley",
      serviceProviderName: "Equinix"
    },
    sku: {
      name: "Standard_MeteredData",
      family: "MeteredData",
      tier: "Standard"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteCircuits.beginCreateOrUpdateAndWait(
    resourceGroupName,
    circuitName,
    parameters
  );
  console.log(result);
}

createExpressRouteCircuit().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an express route circuit.
 *
 * @summary Creates or updates an express route circuit.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ExpressRouteCircuitCreateOnExpressRoutePort.json
 */
async function createExpressRouteCircuitOnExpressRoutePort() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const circuitName = "expressRouteCircuit1";
  const parameters: ExpressRouteCircuit = {
    bandwidthInGbps: 10,
    expressRoutePort: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/expressRoutePorts/portName"
    },
    location: "westus",
    sku: { name: "Premium_MeteredData", family: "MeteredData", tier: "Premium" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteCircuits.beginCreateOrUpdateAndWait(
    resourceGroupName,
    circuitName,
    parameters
  );
  console.log(result);
}

createExpressRouteCircuitOnExpressRoutePort().catch(console.error);