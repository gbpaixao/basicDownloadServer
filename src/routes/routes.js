const express = require("express");
const controller = require("../controller/file.controller");

const router = express.Router();

let routes = (app) => {
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);

  app.use(router);
};

module.exports = routes;