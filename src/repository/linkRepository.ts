import db from "../../database/dbCreation";
import LinkDTO from "../dto/LinkDTO";

class LinkRepository {
    insertQuery: string = "INSERT INTO Links (full_url, short_url) VALUES (?, ?)";
    getQuery: string = "SELECT * FROM Links WHERE short_url = ?";

    async insert(full_url: string, short_url: string): Promise<boolean> {
        let response: boolean = false;
        let query = `INSERT INTO Links (full_url, short_url)
        VALUES (?, ?)`
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
        let response: LinkDTO = {
            id: -1,
            full_url: '',
            short_url: '',
            created_at: ''
        }
        try {
            response = await new Promise((resolve, reject) => {
                let answer: LinkDTO = {
                    id: -1,
                    full_url: '',
                    short_url: '',
                    created_at: ''
                }
                db.get(this.getQuery, [short_url], (err, row: LinkDTO | undefined) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    if (row) {
                        answer.id = row.id;
                        answer.full_url = row.full_url;
                        answer.short_url = row.short_url;
                        answer.created_at = row.created_at;
                    }
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