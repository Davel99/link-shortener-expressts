import { Response, Request } from 'express';
import LinkController from '../controllers/LinkController';
import LinkService from '../services/LinkService';

const express = require('express');
const linksRouter = express.Router();
const linkService : LinkService = new LinkService();

const linkController = new LinkController(linkService);

linksRouter.post('/api/links', linkController.postUser);


export default linksRouter;