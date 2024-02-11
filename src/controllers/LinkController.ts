import { Response, Request, NextFunction } from 'express';
import linkService from '../services/LinkService';
import ShortenerAppError from '../utility/ShortenerAppError';
import appMessages from '../utility/appMessages';
import LinkDTO from '../dto/LinkDTO';

class LinkController {

    async postLink(req: Request, res: Response, next : NextFunction): Promise<void> {
        let response: LinkDTO;
        let full_url : string = req.body.full_url;
        let short_url : string = req.body.short_url;
        if (
            (full_url != null && short_url != null)
        && (full_url.trim().length > 0 && short_url.trim().length > 0)
        ) {
            full_url = full_url.trim();
            short_url = short_url.trim();
            response = await linkService.postLink(full_url, short_url);
            if(response.id < 0) next(new ShortenerAppError(appMessages.gral.SQL_creation, 500))
            else res.status(200).json(response);
        }
        else next(new ShortenerAppError(appMessages.link.controller.invalid_params, 400));
    }  

    async deleteLink(req: Request, res: Response): Promise<void> {
        //Logic to delete 
    }

}

export default LinkController;