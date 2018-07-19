import Vue from 'vue'
import Loginservice from 'vue-loginservice'

// Load the configuration. This directory should be included in .gitignore.
import Config from '../protected-config/websiteConfig'
console.log('Config from protected-config/websiteConfig:\n', Config)

let websiteURL = `${Config.website.protocol}://${Config.website.host}:${Config.website.port}`

const options = {
  protocol: Config.loginservice.protocol,
  host: Config.loginservice.host,
  port: Config.loginservice.port,
  version: Config.loginservice.version,
  apikey: Config.loginservice.apikey,
  hints: {
    usernames: false,
    sitename: 'ADL Forms',
    login: {
      // resumeURL: 'http://localhost:8080/editor',
      // email: false,
      // facebook: true,
      // google: true,
      // github: true,
      // linkedin: true,
      // twitter: true,
      // registerMessage: 'Don\'t have an account yet?'
    },
    register: {
      password: true,
      // firstname: true,
      // middlename: true,
      // lastname: true,
      resumeURL: `${websiteURL}${Config.loginservice.registerPath}`,
      //termsMessage: 'Agree to our terms?',
      //termsRoute: '/terms-and-conditions'
    },
    forgot: {
      resumeURL: `${websiteURL}${Config.loginservice.forgotPath}`
    }
  }
}
Vue.use(Loginservice, options)
