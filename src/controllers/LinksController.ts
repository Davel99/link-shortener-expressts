import { Response, Request } from 'express';
import linksService from '../services/linksService';

class LinksController{

    async postUser(req: Request, res: Response) : Promise<void> {
        let response : Boolean = false;
        console.log(req.body);
        let { full_url, short_url } = req.body;
        console.log(`Value of URL is ${full_url} and Short is ${short_url}`);
        
        response = await linksService.postUser( full_url, short_url );
        res.status(200).json({response});    
    }

}

export default LinksController;