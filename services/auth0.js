import auth0 from "auth0-js";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import axios from "axios";

class Auth0 {
  constructor(props) {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-wpp.auth0.com",
      clientID: "khiJQiJHDJvENvCtC6jVK4vHgOSYvVAA",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid"
    });
    this.login = this.login.bind(this);
    this.lhandleAuthentication = this.handleAuthentication.bind(this);
    //this.logout = this.logout.bind(this);
  }

  setSession() {
    //TBD save tokens
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  login() {
    this.auth0.authorize();
  }
}

const Auth0Client = new Auth0();

export default Auth0Client;
