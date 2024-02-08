import { Response, Request } from 'express';
import LinksService from '../services/LinkService';

class LinkController{
    private linkService : LinksService;

    constructor(service : LinksService){
        this.linkService  = service;
    }

    async postUser(req: Request, res: Response) : Promise<void> {
        let response : Boolean = false;
        console.log(req.body);
        let { full_url, short_url } = req.body;
        console.log(`Value of URL is ${full_url} and Short is ${short_url}`);
        
        response = await this.linkService.postUser( full_url, short_url );
        res.status(200).json({response});    
    }

}

export default LinkController;