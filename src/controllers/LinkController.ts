import { Response, Request } from 'express';
import linkService from '../services/LinkService';

class LinkController {

    async postUser(req: Request, res: Response): Promise<void> {
        let response: Boolean = false;
        let full_url : string = req.body.full_url;
        let short_url : string = req.body.short_url;
        if (
            (full_url != null && short_url != null)
        && (full_url.trim().length > 0 && short_url.trim().length > 0)
        ) {
            full_url = full_url.trim();
            short_url = short_url.trim();
            response = await linkService.postUser(full_url, short_url);
            res.status(200).json({ response });
        }
        else res.status(400).json({ response });
    }

}

export default LinkController;