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
  SecureScoreControlsListBySecureScoreOptionalParams,
  SecurityCenter
} from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get all security controls for a specific initiative within a scope
 *
 * @summary Get all security controls for a specific initiative within a scope
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/secureScores/ListSecureScoreControlsForName_builtin_example.json
 */
async function getSecurityControlsAndTheirCurrentScoreForTheSpecifiedInitiative() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const secureScoreName = "ascScore";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.secureScoreControls.listBySecureScore(
    secureScoreName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getSecurityControlsAndTheirCurrentScoreForTheSpecifiedInitiative().catch(
  console.error
);

/**
 * This sample demonstrates how to Get all security controls for a specific initiative within a scope
 *
 * @summary Get all security controls for a specific initiative within a scope
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/secureScores/ListSecureScoreControlsForNameWithExpand_builtin_example.json
 */
async function getSecurityControlsAndTheirCurrentScoreForTheSpecifiedInitiativeWithTheExpandParameter() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const secureScoreName = "ascScore";
  const expand = "definition";
  const options: SecureScoreControlsListBySecureScoreOptionalParams = {
    expand
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.secureScoreControls.listBySecureScore(
    secureScoreName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getSecurityControlsAndTheirCurrentScoreForTheSpecifiedInitiativeWithTheExpandParameter().catch(
  console.error
);