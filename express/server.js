const express = require("express");

const next = require("next");
const compression = require("compression");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const config = require("./config");

const app = next({ dev });
const handle = app.getRequestHandler(); // This is a Next-specific Express setup

const bodyParser = require("body-parser");

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/portfolio/:id", (req, res) => {
      const actualPage = "/portfolio";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Blog server on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
