import { Response, Request, NextFunction } from 'express';
import linkService from '../services/LinkService';
import ShortenerAppError from '../utility/ShortenerAppError';
import appMessages from '../utility/appMessages';
import { LinkDTO } from '../dto/LinkDTO';
import linksRouter from '../routes/linksRouter';

class LinkController {

    async redirect(req: Request, res : Response, next : NextFunction) : Promise<void> {
        let url : string = '';
        let short_url : string = req.params.short_url;
        try{
            if(short_url != null && short_url.trim().length > 0){
                url = await linkService.getUrl(short_url);
                res.redirect(url);
            } else throw new ShortenerAppError(appMessages.link.controller.invalid_shortUrl, 400);

        } catch(err){
            console.error(err);
            next(err);
        }
    }

    async postLink(req: Request, res: Response, next: NextFunction): Promise<void> {
        let response: LinkDTO;
        let full_url: string = req.body.full_url;
        let short_url: string = req.body.short_url;
        try {
            if (
                (full_url != null && short_url != null)
                && (full_url.trim().length > 0 && short_url.trim().length > 0)
            ) {
                full_url = full_url.trim();
                short_url = short_url.trim();
                response = await linkService.postLink(full_url, short_url);
                if (response.id < 0) throw new ShortenerAppError(appMessages.gral.SQL_creation, 500);
                else res.status(200).json(response);
            } else throw new ShortenerAppError(appMessages.link.controller.invalid_params, 400);

        } catch (error) {
            next(error);
        }
    }

    async deleteLink(req: Request, res: Response, next: NextFunction): Promise<void> {
        let short_url : string  = req.params.short_url;
        try{
            if(short_url != null && short_url.trim().length > 0){
                short_url = short_url.trim();
                let response : boolean = await linkService.deleteLink(short_url);
                res.status(200).json({ response })
            } else throw new ShortenerAppError(appMessages.link.controller.invalid_shortUrl, 400);
        } catch (error){
            console.error(error);
            next(error);
        }
    }

}

export default LinkController;