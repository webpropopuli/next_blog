const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod ? "https://david-marlowe-website.herokuapp.com" : "https://localhost:3000",
  "process.env.NAMESPACE": "https://david-marlowe-website.herokuapp.com",
  "process.env.CLIENT_ID": "khiJQiJHDJvENvCtC6jVK4vHgOSYvVAA"
};
