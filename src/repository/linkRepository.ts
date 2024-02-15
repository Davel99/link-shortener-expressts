import db from "../../database/dbCreation";
import { LinkDTO, voidLinkDTO, createDTOfromObj } from "../dto/LinkDTO";

class LinkRepository {
    insertQuery: string = "INSERT INTO Links (full_url, short_url) VALUES (?, ?)";
    getQuery: string = "SELECT * FROM Links WHERE short_url = ?";
    deleteQuery: string = "DELETE FROM Links WHERE short_url = ?"

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

    async getAll(): Promise<LinkDTO[]> {
        let response: LinkDTO[] = [voidLinkDTO];
        try {
            response = await new Promise<LinkDTO[]>((resolve, reject) => {
                db.all('SELECT * FROM Links', (err, rows: LinkDTO[]) => {
                    if (err) {
                        console.error(err);
                        reject([]);
                    } else {
                        let data: LinkDTO[] = [voidLinkDTO];
                        if (rows) {
                            rows.forEach((row, index) => {
                                data[index] = createDTOfromObj(row);
                            });
                        }
                        resolve(data);
                    }
                });
            });
            return response;

        } catch (error) {
            console.error(error);
            return response;
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
                        reject(voidLinkDTO);
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

    async delete(short_url: string): Promise<boolean> {
        let response: boolean = false;
        response = await new Promise((resolve, reject) => {
            db.run(this.deleteQuery, [short_url], err => {
                if (err) {
                    console.error(err);
                    reject(false);
                } else {
                    resolve(true)
                }
            });
        });
        return response;
    }

}

const linkRepository = new LinkRepository();
export default linkRepository;