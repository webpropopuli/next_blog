import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dev-wpp.auth0.com",
    clientID: "khiJQiJHDJvENvCtC6jVK4vHgOSYvVAA",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
