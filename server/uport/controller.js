const transports = require('uport-transports').transport;
const message = require('uport-transports').message.util;

const getQR = (token)=>{
    const uri = message.paramsToQueryString(message.messageToURI(token), {callback_type: 'post'});
    const qr =  transports.ui.getImageDataURI(uri)
    return (`<div><img src="${qr}"/></div>`);
}

module.exports = { getQR }