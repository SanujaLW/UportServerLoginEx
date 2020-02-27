var express = require('express');
var router = express.Router();
const { getQR } = require('./controller.js');

module.exports = function getRoutes(credentials){
    router.get('/', (req,res)=>{
        credentials.createDisclosureRequest({
            notifications: true,
            callbackUrl: process.env.CALLBACK_URL
        }).then(requestToken=>{
            let qr = getQR(requestToken);
            res.send(qr);
        });
    });

    router.post('/callback', (req,res)=>{
        credentials.authenticateDisclosureResponse(req.body.access_token).then(creds=>{
            console.log("User: " + creds.did + " logged");
            //Need to redirect client to login success
        }).catch(err=>{
            console.log(err);
        });
    });

    return router;
}