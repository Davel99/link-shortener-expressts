import { Response, Request } from 'express';
import db from '../../database/dbCreation';
import LinkDTO from '../dto/LinkDTO';
import linkRepository from '../repository/linkRepository';

class LinkService {

    async postLink(full_url: string, short_url: string): Promise<LinkDTO> {
        let response: LinkDTO = {
            id: -1,
            full_url: '',
            short_url: '',
            created_at: ''
        };
        let answer: boolean = await linkRepository.insert(full_url, short_url);
        if (answer) response = await linkRepository.get(short_url);
        return response;
    }



}

const linkService = new LinkService();
export default linkService;