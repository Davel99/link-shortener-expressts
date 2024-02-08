import { Response, Request } from 'express';
import LinksController from '../controllers/LinksController';

const express = require('express');
const LinksRouter = express.Router();

const linkController = new LinksController();

LinksRouter.post('/api/links', linkController.postUser);


export default LinksRouter;