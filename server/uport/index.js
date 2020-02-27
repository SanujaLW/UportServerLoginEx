const { Credentials } = require('uport-credentials');
const { Resolver } = require('did-resolver');
const { getResolver } = require('ethr-did-resolver');
const getRoutes = require('./routes');

const providerConfig = { rpcUrl: process.env.RPC_URL }

const credentials = new Credentials({
    appName: process.env.APP_NAME,
    did: process.env.DID,
    privateKey: process.env.PRIVATE_KEY,
    resolver: new Resolver(getResolver(providerConfig)),
});

const uportRoutes = getRoutes(credentials);

module.exports = { uportRoutes }



