/*
 *  This file gets overwritten during production deployments,
 *  using a config file copied from /secure-config/website/overlay.
 */
module.exports = {
  website : {
    protocol: 'http',
    host: 'localhost',
    port: 6060,
    // host: 'ttsyp1-a3.tooltwist.website',
    // port: 80,
  },
  api: {
    protocol: 'http',
    host: 'localhost',
    port: 6060,
    // host: 'ttsyp1-a3.tooltwist.website',
    // port: 80,
  },
  loginservice: {

    // Account tooltwist/adlforms-uat
    host: 'ap-southeast-2.authservice.io',
    port: 80,
    protocol: 'http',
    apikey: 'API100ZNCYYE7FK4IIE1IWTOEBFUC',

    version: 'v2',
    registerPath: '/dashboard-admin',
    forgotPath: '/change-password'
  },
  contentservice: {
    host: 'uat.crowdhound.io',
    port: 80,
    protocol: 'http',
    apikey: 'API100ZNCYYE7FK4IIE1IWTOEBFUC',

    // host: 'ttsyp1.loginservice.io',
    version: '2.0',

    // Froala activation key
    // See https://www.froala.com/wysiwyg-editor/pricing
    //froalaActivationKey: 'XXXXXXXXXXXXXXXXXXXXXX=='
  },
}
