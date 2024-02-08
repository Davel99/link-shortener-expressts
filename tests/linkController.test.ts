import { Request, Response } from 'express';
import LinkController from '../src/controllers/LinkController';
import LinkService from '../src/services/LinkService';

describe('LinkController', () => {
  it('should return true when valid data is provided', async () => {
    const mockRequest: Request = {
        body: {
          full_url: 'https://www.google.com/',
          short_url: 'goo'
        }
      } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    const linkService = new LinkService();
    linkService.postUser = jest.fn().mockResolvedValue(true);

    const linkController = new LinkController(linkService);
    await linkController.postUser(mockRequest, mockResponse);

    const response : Boolean = true;

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({response});
  });
});