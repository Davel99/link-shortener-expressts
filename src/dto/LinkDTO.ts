export interface LinkDTO{
    id : number,
    full_url : string,
    short_url: string,
    created_at: string
}


export const voidLinkDTO : LinkDTO = {
    id: -1,
    full_url: '',
    short_url: '',
    created_at: ''
}

export const createDTOfromObj = (dto : LinkDTO) => {
    const newDTO : LinkDTO = {
        id: dto.id,
        full_url: dto.full_url,
        short_url: dto.short_url,
        created_at: dto.created_at
    };
    return newDTO;
}
