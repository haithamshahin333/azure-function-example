# Azure Function Example

### Sample: Azure Function to Create/Update a Resource Group using a Managed Identity

1. Follow this tutorial to create a JavaScript Function Resource in Azure: https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node.

2. Add an App Setting for the `SUBSCRIPTION_ID` property for this function.

3. Create a managed identity for the function and assign the identity to have the proper role to create and manage resource groups under the specified subscription. Here's a reference for how to create a managed identity: https://docs.microsoft.com/en-us/azure/app-service/overview-managed-identity?tabs=dotnet

4. Deploy the function and provide the following input as a POST.

    ```
    {
    "rgname": "rg-name-to-create",
    "location": "eastus"
    }
    ```

5. Validate that the new resource group has been created under the subcription.