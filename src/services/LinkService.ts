import { LinkDTO, voidLinkDTO } from '../dto/LinkDTO';
import linkRepository from '../repository/linkRepository';
import ShortenerAppError from '../utility/ShortenerAppError';
import { strValidator } from '../utility/Validators';
import appMessages from '../utility/appMessages';

class LinkService {

    async getUrl(short_url : string) : Promise <string> {
        const dto : LinkDTO = await linkRepository.get(short_url);
        const url : string = dto.full_url;
        if( strValidator(url) ) return url;
        else throw new ShortenerAppError(appMessages.link.service.EMPTY_URL, 500);
    }

    async postLink(full_url: string, short_url: string): Promise<LinkDTO> {
        let response: LinkDTO = voidLinkDTO;
        let answer: boolean = await linkRepository.insert(full_url, short_url);
        if (!answer) throw new ShortenerAppError(appMessages.link.service.CREATION_ERROR, 500);
        response = await linkRepository.get(short_url);
        return response;
    }

    async deleteLink(short_url : string): Promise<boolean> {
        let exists : LinkDTO = await linkRepository.get(short_url);
        if(exists.id < 0) throw new ShortenerAppError(appMessages.link.service.DELETION_ERROR,500);
        let response : boolean = await linkRepository.delete(short_url);
        if(!response) throw new ShortenerAppError(appMessages.link.service.DELETION_ERROR,500);
        return true;
    }

}

const linkService = new LinkService();
export default linkService;