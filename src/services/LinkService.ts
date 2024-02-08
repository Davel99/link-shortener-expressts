import { Response, Request } from 'express';
import db from '../../database/dbCreation';

export default class LinkService {

    async postUser(full_url: String, short_url: String): Promise<Boolean> {
        let response: Boolean = false;
        let date: Date = new Date();
        let query = `INSERT INTO Links (full_url, short_url, created_at)
        VALUES (?, ?, ?)`
        try{
            response = await new Promise((resolve, reject) => {
                db.run(query, [full_url, short_url, date], function (err : Error) {
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