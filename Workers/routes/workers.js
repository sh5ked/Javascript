const express = require('express');
const { get } = require('mongoose');
const { getAllworkers } = require('../controllers/workers.controller');
const routes = express.Router();

routes.get("/", getAllUsers);
// routes.get("/:id", getUserById)
// routes.post("/", createUser);
// routes.delete("/:id", deleteUser);


module.exports = routes;
