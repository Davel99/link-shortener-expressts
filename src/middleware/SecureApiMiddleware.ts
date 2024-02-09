import { Request, Response, NextFunction } from 'express';
import { apiKey, apiSecret } from '../utility/envValues';

export const SecureAPIMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { api_key , api_secret } = req.headers;

  if (!apiKey || !apiSecret) {
    return res.status(500).json({ error: 'API key or secret not configured' });
  }

  if (
    api_key !== apiKey ||
    api_secret !== apiSecret
  ) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};
