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
