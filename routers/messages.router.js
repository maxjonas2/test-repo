const express = require("express");
const messagesControler = require("../controllers/messages.controller");

const messagesRouter = express.Router();

messagesRouter.get("/", messagesControler.getMesages);
messagesRouter.post("/", messagesControler.postMessage);

module.exports = messagesRouter;
