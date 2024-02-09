import LinkController from '../controllers/LinkController';
import { SecureAPIMiddleware } from '../middleware/SecureAPIMiddleware';

const express = require('express');
const linksRouter = express.Router();

const linkController = new LinkController();

linksRouter.use(SecureAPIMiddleware);
linksRouter.post('/api/links', linkController.postUser);


export default linksRouter;