// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary Demonstrates usage of @azure/identity-brokered-auth and @azure/identity
 * packages for WAM MSA support.
 */

const { InteractiveBrowserCredential, useIdentityPlugin } = require("@azure/identity");
const { nativeBrokerPlugin } = require("@azure/identity-brokered-auth");
const dotenv = require("dotenv");

// Load the plugin
useIdentityPlugin(nativeBrokerPlugin);

// Load the environment
dotenv.config();

async function main() {
  const credential = new InteractiveBrowserCredential({
    clientId: process.env.AZURE_CLIENT_ID,
    authorityHost: process.env.AZURE_AUTHORITY_HOST,
    enableMsaPassthrough: true,
    tenantId: process.env.AZURE_TENANT_ID
  });

  // This is the scope we will use to get a token from the AAD token endpoint.
  // By default, we'll use the Microsoft Graph scope as an example, but when
  // you use the credential with an Azure SDK package, it will configure the
  // scope for you automatically.
  const scope = process.env.AAD_TEST_SCOPE ?? "https://graph.microsoft.com/.default";

  const token = await credential.getToken(scope);

  console.log(`Token: ${token}`);
}

main().catch((error) => {
  console.error("The sample encountered an error:", error);
  process.exit(1);
});
