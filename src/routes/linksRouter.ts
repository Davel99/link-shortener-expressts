import LinkController from '../controllers/LinkController';
import { SecureAPIMiddleware } from '../middleware/SecureAPIMiddleware';

const express = require('express');
const linksRouter = express.Router();

const linkController = new LinkController();
const linkAPIPath = '/api/link';

linksRouter.get('/:short_url', linkController.redirect);
linksRouter.use(SecureAPIMiddleware);
linksRouter.get(linkAPIPath, linkController.getAll)
linksRouter.post(linkAPIPath, linkController.postLink);
linksRouter.delete(linkAPIPath+'/:short_url', linkController.deleteLink);


export default linksRouter;