const express = require('express');
const { get } = require('mongoose');
const { getAllworkers,
    getworkerById,
    createworker,
    deleteworker } = require('../controllers/workers.controller');
const routes = express.Router();

routes.get("/", getAllworkers);
routes.get("/:id", getworkerById)
routes.post("/", createworker);
routes.delete("/:id", deleteworker);


module.exports = routes;
