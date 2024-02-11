import { Response, Request } from 'express';
import db from '../../database/dbCreation';

class LinkService {

    async postLink(full_url: String, short_url: String): Promise<Boolean> {
        let response: Boolean = false;
        let query = `INSERT INTO Links (full_url, short_url)
        VALUES (?, ?)`
        try{
            response = await new Promise((resolve, reject) => {
                db.run(query, [full_url, short_url], function (err : Error) {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    } else {
                        resolve(true);
                    }
                });
            })
            return response;

        } catch(error){
            console.error(error);
            return false;
        }
    };

}

const linkService = new LinkService();
export default linkService;