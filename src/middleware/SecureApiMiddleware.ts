import { Request, Response, NextFunction } from 'express';
import { apiKey, apiSecret } from '../utility/envValues';

export const SecureAPIMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { api_key, api_secret } = req.headers;

    if (!api_key || !api_secret) {
        return res.status(500).json({ error: 'Unauthorized' });
    }

    if (
        api_key !== apiKey ||
        api_secret !== apiSecret
    ) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
};
