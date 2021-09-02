/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { FeatureClientContext } from "./featureClientContext";


class FeatureClient extends FeatureClientContext {
  // Operation groups
  features: operations.Features;
  subscriptionFeatureRegistrations: operations.SubscriptionFeatureRegistrations;

  /**
   * Initializes a new instance of the FeatureClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The Azure subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.FeatureClientOptions) {
    super(credentials, subscriptionId, options);
    this.features = new operations.Features(this);
    this.subscriptionFeatureRegistrations = new operations.SubscriptionFeatureRegistrations(this);
  }

  /**
   * Lists all of the available Microsoft.Features REST API operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListOperationsResponse>
   */
  listOperations(options?: msRest.RequestOptionsBase): Promise<Models.ListOperationsResponse>;
  /**
   * @param callback The callback
   */
  listOperations(callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperations(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  listOperations(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationListResult>, callback?: msRest.ServiceCallback<Models.OperationListResult>): Promise<Models.ListOperationsResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      listOperationsOperationSpec,
      callback) as Promise<Models.ListOperationsResponse>;
  }

  /**
   * Lists all of the available Microsoft.Features REST API operations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListOperationsNextResponse>
   */
  listOperationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ListOperationsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listOperationsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listOperationsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  listOperationsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationListResult>, callback?: msRest.ServiceCallback<Models.OperationListResult>): Promise<Models.ListOperationsNextResponse> {
    return this.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listOperationsNextOperationSpec,
      callback) as Promise<Models.ListOperationsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Features/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

export {
  FeatureClient,
  FeatureClientContext,
  Models as FeatureModels,
  Mappers as FeatureMappers
};
export * from "./operations";
