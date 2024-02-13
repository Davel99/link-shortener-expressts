export interface StatisticsDTO {
    id: number;
    link_id: number;
    user_agent: string;
    geolocation: string;
    ip_address: string;
    device_type: string;
    os: string;
    browser: string;
    timestamp: string;
}

export const voidStatisticDTO: StatisticsDTO = {
    id: -1,
    link_id: 0,
    user_agent: '',
    geolocation: '',
    ip_address: '',
    device_type: '',
    os: '',
    browser: '',
    timestamp: ''
}

export const createStatisticDTOfromObj = (dto: StatisticsDTO) : StatisticsDTO => {
    const response: StatisticsDTO = {
        id: dto.id,
        link_id: dto.link_id,
        user_agent: dto.user_agent,
        geolocation: dto.geolocation,
        ip_address: dto.ip_address,
        device_type: dto.device_type,
        os: dto.os,
        browser: dto.browser,
        timestamp: dto.timestamp
    }
    return response;
}