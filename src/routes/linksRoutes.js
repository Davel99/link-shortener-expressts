"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinksController_1 = require("../controllers/LinksController");
var express = require('express');
var LinksRouter = express.Router();
var linkController = new LinksController_1.default();
LinksRouter.post('/api/links', linkController.postUser);
exports.default = LinksRouter;
