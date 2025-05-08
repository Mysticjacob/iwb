const app = require("./app");
const serverless = require("serverless-http");

// Export handler for serverless deployment
module.exports.handler = serverless(app);
