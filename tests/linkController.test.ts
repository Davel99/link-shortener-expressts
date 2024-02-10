import { Request, Response } from 'express';
import LinkController from '../src/controllers/LinkController';
import linkService from '../src/services/LinkService';

describe('LinkController', () => {
  it('Should return true when valid data is provided', async () => {
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

    linkService.postLink = jest.fn().mockResolvedValue(true);

    const linkController = new LinkController();
    await linkController.postLink(mockRequest, mockResponse);

    const response : Boolean = true;

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({response});
  });

  it('Should return false when short_url is mising', async () => {
    const mockRequest: Request = {
        body: {
          full_url: 'https://www.google.com/',
          short_url: ''
        }
      } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    linkService.postLink = jest.fn().mockResolvedValue(true);

    const linkController = new LinkController();
    await linkController.postLink(mockRequest, mockResponse);

    const response : Boolean = false;

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({response});
  });

  it('Should return false when full_url is missing', async () => {
    const mockRequest: Request = {
        body: {
          short_url: 'goo'
        }
      } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    linkService.postLink = jest.fn().mockResolvedValue(true);

    const linkController = new LinkController();
    await linkController.postLink(mockRequest, mockResponse);

    const response : Boolean = false;

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({response});
  });

  it('Should return false when full_url is empty', async () => {
    const mockRequest: Request = {
        body: {
          full_url: ' ',
          short_url: 'goo'
        }
      } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    linkService.postLink = jest.fn().mockResolvedValue(true);

    const linkController = new LinkController();
    await linkController.postLink(mockRequest, mockResponse);

    const response : Boolean = false;

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({response});
  });

  it('Should return false when short_url is empty', async () => {
    const mockRequest: Request = {
        body: {
          full_url: 'google.com',
          short_url: ''
        }
      } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    linkService.postLink = jest.fn().mockResolvedValue(true);

    const linkController = new LinkController();
    await linkController.postLink(mockRequest, mockResponse);

    const response : Boolean = false;

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({response});
  });
});