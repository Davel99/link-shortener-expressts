import { LinkDTO, voidLinkDTO } from '../dto/LinkDTO';
import linkRepository from '../repository/linkRepository';
import ShortenerAppError from '../utility/ShortenerAppError';
import appMessages from '../utility/appMessages';

class LinkService {

    async postLink(full_url: string, short_url: string): Promise<LinkDTO> {
        let response: LinkDTO = voidLinkDTO;
        let answer: boolean = await linkRepository.insert(full_url, short_url);
        if (!answer) throw new ShortenerAppError(appMessages.link.service.CREATION_ERROR, 500);
        response = await linkRepository.get(short_url);
        return response;
    }

    async deleteLink(short_url : string): Promise<boolean> {
        return true;
    }



}

const linkService = new LinkService();
export default linkService;