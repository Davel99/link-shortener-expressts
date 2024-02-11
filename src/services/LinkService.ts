import { Response, Request } from 'express';
import db from '../../database/dbCreation';
import LinkDTO from '../dto/LinkDTO';

class LinkService {

    async postLink(full_url: string, short_url: string): Promise<LinkDTO> {
        let response: LinkDTO;
        let query = `INSERT INTO Links (full_url, short_url)
        VALUES (?, ?)`
        try{
            response = await new Promise((resolve, reject) => {
                db.run(query, [full_url, short_url],  (err : Error) => {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    } else {
                        const linkDTO : LinkDTO = {
                            id: 1,
                            full_url,
                            short_url,
                            created_at: ''
                        }
                        resolve(linkDTO);
                    }
                });
            })
            return response;

        } catch(error){
            console.error(error);
            const result : LinkDTO = {
                id: -1,
                full_url,
                short_url,
                created_at: ''
            }
            return result;
        }
    };

}

const linkService = new LinkService();
export default linkService;