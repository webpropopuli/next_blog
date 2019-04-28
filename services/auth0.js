import auth0 from "auth0-js";
import Cookies from "js-cookie";

//import jwt from "jsonwebtoken";
//import axios from "axios";

const CLIENT_ID = process.env.CLIENT_ID;

class Auth0 {
  constructor(props) {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-wpp.auth0.com",
      clientID: "khiJQiJHDJvENvCtC6jVK4vHgOSYvVAA",
      redirectUri: "http://localhost:3000/callback",
      responseType: "token id_token",
      scope: "openid profile"
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.lhandleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  //####
  // getAccessToken() {
  //   return this.accessToken;
  // }

  //####
  getIdToken() {
    return Cookies.get("jwt");
  }

  //####
  setSession(authResult) {
    localStorage.setItem("isLoggedIn", "true");
    debugger;
    Cookies.set("user", authResult.idTokenPayload);
    Cookies.set("jwt", authResult.idToken);
    Cookies.set("expiresAt", authResult.expiresIn * 1000 + new Date().getTime());
  }

  //####
  // renewSession() {
  //   this.auth0.checkSession({}, (err, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       this.setSession(authResult);
  //     } else if (err) {
  //       this.logout();
  //       console.log(err);
  //       alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
  //     }
  //   });
  // }

  //####
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          console.log(err);
          reject(err);
        }
      });
    });
  }

  //####
  login() {
    this.auth0.authorize();
  }

  //####
  logout() {
    Cookies.remove("user");
    Cookies.remove("jwt");
    Cookies.remove("expiresAt");

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");

    this.auth0.logout({
      returnTo: window.location.origin,
      clientId: "khiJQiJHDJvENvCtC6jVK4vHgOSYvVAA"
    });
  }

  //####
  isAuthenticated() {
    // check if cookie expires.
    //TBD what is getJson result if cookie not set?
    return new Date().getTime() < Cookies.getJson("expiresAt");
  }
}

const Auth0Client = new Auth0();

export default Auth0Client;
