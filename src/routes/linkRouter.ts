import { Response, Request } from 'express';
import LinksController from '../controllers/LinkController';
import LinkService from '../services/LinkService';

const express = require('express');
const linksRouter = express.Router();
const linkService : LinkService = new LinkService();

const linkController = new LinksController(linkService);

linksRouter.post('/api/links', linkController.postUser);


export default linksRouter;