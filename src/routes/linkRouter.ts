import { Response, Request } from 'express';
import LinkController from '../controllers/LinkController';
import LinkService from '../services/LinkService';
import { SecureAPIMiddleware } from '../middleware/SecureApiMiddleware';

const express = require('express');
const linksRouter = express.Router();
const linkService : LinkService = new LinkService();

const linkController = new LinkController(linkService);

linksRouter.use(SecureAPIMiddleware);

linksRouter.post('/api/links', linkController.postUser);


export default linksRouter;