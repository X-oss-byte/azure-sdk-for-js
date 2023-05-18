/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ForecastDefinition,
  ForecastUsageOptionalParams,
  ForecastUsageResponse,
  ExternalCloudProviderType,
  ForecastExternalCloudProviderUsageOptionalParams,
  ForecastExternalCloudProviderUsageResponse
} from "../models";

/** Interface representing a Forecast. */
export interface Forecast {
  /**
   * Lists the forecast charges for scope defined.
   * @param scope The scope associated with forecast operations. This includes
   *              '/subscriptions/{subscriptionId}/' for subscription scope,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}
   *              for Management Group scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for billingProfile scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   *              for invoiceSection scope, and
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific
   *              for partners.
   * @param parameters Parameters supplied to the CreateOrUpdate Forecast Config operation.
   * @param options The options parameters.
   */
  usage(
    scope: string,
    parameters: ForecastDefinition,
    options?: ForecastUsageOptionalParams
  ): Promise<ForecastUsageResponse>;
  /**
   * Lists the forecast charges for external cloud provider type defined.
   * @param externalCloudProviderType The external cloud provider type associated with dimension/query
   *                                  operations. This includes 'externalSubscriptions' for linked account and 'externalBillingAccounts'
   *                                  for consolidated account.
   * @param externalCloudProviderId This can be '{externalSubscriptionId}' for linked account or
   *                                '{externalBillingAccountId}' for consolidated account used with dimension/query operations.
   * @param parameters Parameters supplied to the CreateOrUpdate Forecast Config operation.
   * @param options The options parameters.
   */
  externalCloudProviderUsage(
    externalCloudProviderType: ExternalCloudProviderType,
    externalCloudProviderId: string,
    parameters: ForecastDefinition,
    options?: ForecastExternalCloudProviderUsageOptionalParams
  ): Promise<ForecastExternalCloudProviderUsageResponse>;
}
