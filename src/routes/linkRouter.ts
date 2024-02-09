import { Response, Request } from 'express';
import LinkController from '../controllers/LinkController';
import { SecureAPIMiddleware } from '../middleware/SecureAPIMiddleware';

const express = require('express');
const linksRouter = express.Router();
const linkService = 1;

const linkController = new LinkController(linkService);

linksRouter.use(SecureAPIMiddleware);
linksRouter.post('/api/links', linkController.postUser);


export default linksRouter;