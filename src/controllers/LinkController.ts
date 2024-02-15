import { Response, Request, NextFunction } from 'express';
import linkService from '../services/LinkService';
import ShortenerAppError from '../utility/ShortenerAppError';
import appMessages from '../utility/appMessages';
import { LinkDTO } from '../dto/LinkDTO';
import { strValidator, urlValidator } from '../utility/Validators';

class LinkController {

    async redirect(req: Request, res: Response, next: NextFunction): Promise<void> {
        let url: string = '';
        let short_url: string = req.params.short_url;
        try {
            if (strValidator(short_url)) {
                url = await linkService.getUrl(short_url);
                if (!urlValidator(url)) throw new ShortenerAppError(appMessages.link.controller.invalid_fullUrl, 400);
                else res.redirect(url);
            } else throw new ShortenerAppError(appMessages.link.controller.invalid_shortUrl, 400);

        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async getAll(req: Request, res: Response) : Promise<void> {
        let response : LinkDTO[] = await linkService.getAll();
        res.json(response);
    }

    async postLink(req: Request, res: Response, next: NextFunction): Promise<void> {
        let response: LinkDTO;
        let full_url: string = req.body.full_url;
        let short_url: string = req.body.short_url;
        try {
            if (strValidator(full_url, short_url)) {
                full_url = full_url.trim();
                short_url = short_url.trim();
                if (!urlValidator(full_url)) throw new ShortenerAppError(appMessages.link.controller.invalid_fullUrl, 400);
                else {
                    response = await linkService.postLink(full_url, short_url);
                    if (response.id < 0) throw new ShortenerAppError(appMessages.gral.SQL_creation, 500);
                    else res.status(200).json(response);
                }
            } else throw new ShortenerAppError(appMessages.link.controller.invalid_params, 400);

        } catch (error) {
            next(error);
        }
    }

    async deleteLink(req: Request, res: Response, next: NextFunction): Promise<void> {
        let short_url: string = req.params.short_url;
        try {
            if (strValidator(short_url)) {
                short_url = short_url.trim();
                let response: boolean = await linkService.deleteLink(short_url);
                res.status(200).json({ response })
            } else throw new ShortenerAppError(appMessages.link.controller.invalid_shortUrl, 400);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

}

export default LinkController;