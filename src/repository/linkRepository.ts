import db from "../../database/dbCreation";
import { LinkDTO, voidLinkDTO, createDTOfromObj } from "../dto/LinkDTO";

class LinkRepository {
    insertQuery: string = "INSERT INTO Links (full_url, short_url) VALUES (?, ?)";
    getQuery: string = "SELECT * FROM Links WHERE short_url = ?";

    async insert(full_url: string, short_url: string): Promise<boolean> {
        let response: boolean = false;
        try {
            response = await new Promise((resolve, reject) => {
                db.run(this.insertQuery, [full_url, short_url], (err: Error) => {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    } else {
                        resolve(true);
                    }
                });
            })
            return response;

        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async get(short_url: string): Promise<LinkDTO> {
        let response: LinkDTO = voidLinkDTO;
        try {
            response = await new Promise((resolve, reject) => {
                let answer: LinkDTO = voidLinkDTO;
                db.get(this.getQuery, [short_url], (err, row: LinkDTO | undefined) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    if (row) answer = createDTOfromObj(row);
                    resolve(answer);
                })
            });

            return response;

        } catch (error) {
            console.error(error);
            return response;
        }

    }

}

const linkRepository = new LinkRepository();
export default linkRepository;