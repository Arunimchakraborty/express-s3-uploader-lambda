const app = require('./dist/index')
// const awsServerlessExpress = require('aws-serverless-express')
const serverless = require('serverless-http')
// const server = awsServerlessExpress.createServer(app);

// module.exports.handler = (event, context) => {
// 	awsServerlessExpress.proxy(server, event, context);
// };

module.exports.handler = serverless(app)