const { ResourceManagementClient } = require("@azure/arm-resources");
const { DefaultAzureCredential } = require("@azure/identity");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const credential = new DefaultAzureCredential();
    const client = new ResourceManagementClient(credential, process.env["SUBSCRIPTION_ID"]);
    const rg = await client.resourceGroups.createOrUpdate(req.body.rgname, {"location": req.body.location});

    context.res = {
        status: rg._response.status,
        body: rg._response.bodyAsText
    };
}