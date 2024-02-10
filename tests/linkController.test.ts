import { Request, Response } from 'express';
import LinkController from '../src/controllers/LinkController';
import linkService from '../src/services/LinkService';
import appMessages from '../src/utility/appMessages';

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
    const next = jest.fn();

    linkService.postLink = jest.fn().mockResolvedValue(true);

    const linkController = new LinkController();
    await linkController.postLink(mockRequest, mockResponse,next);

    const response : Boolean = true;

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({response});
  });

  it('Should return Error when short_url is mising', async () => {
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
    const next = jest.fn();

    const linkController = new LinkController();
    linkController.postLink(mockRequest,mockResponse,next);

     // Assert that next was called
     expect(next).toHaveBeenCalled();

     // Get the error passed to next
     const errorPassedToNext = next.mock.calls[0][0];
 
     // Assert specific properties of the error
     expect(errorPassedToNext).toBeInstanceOf(Error);
     expect(errorPassedToNext.message).toBe(appMessages.link.controller.invalid_params);
     expect(errorPassedToNext.statusCode).toBe(400);
  });

  // it('Should return false when full_url is missing', async () => {
  //   const mockRequest: Request = {
  //       body: {
  //         short_url: 'goo'
  //       }
  //     } as unknown as Request;
  //   const mockResponse = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn(),
  //   } as unknown as Response;

  //   linkService.postLink = jest.fn().mockResolvedValue(true);

  //   const linkController = new LinkController();
  //   await linkController.postLink(mockRequest, mockResponse);

  //   const response : Boolean = false;

  //   expect(mockResponse.status).toHaveBeenCalledWith(400);
  //   expect(mockResponse.json).toHaveBeenCalledWith({response});
  // });

  // it('Should return false when full_url is empty', async () => {
  //   const mockRequest: Request = {
  //       body: {
  //         full_url: ' ',
  //         short_url: 'goo'
  //       }
  //     } as unknown as Request;
  //   const mockResponse = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn(),
  //   } as unknown as Response;

  //   linkService.postLink = jest.fn().mockResolvedValue(true);

  //   const linkController = new LinkController();
  //   await linkController.postLink(mockRequest, mockResponse);

  //   const response : Boolean = false;

  //   expect(mockResponse.status).toHaveBeenCalledWith(400);
  //   expect(mockResponse.json).toHaveBeenCalledWith({response});
  // });

  // it('Should return false when short_url is empty', async () => {
  //   const mockRequest: Request = {
  //       body: {
  //         full_url: 'google.com',
  //         short_url: ''
  //       }
  //     } as unknown as Request;
  //   const mockResponse = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn(),
  //   } as unknown as Response;

  //   linkService.postLink = jest.fn().mockResolvedValue(true);

  //   const linkController = new LinkController();
  //   await linkController.postLink(mockRequest, mockResponse);

  //   const response : Boolean = false;

  //   expect(mockResponse.status).toHaveBeenCalledWith(400);
  //   expect(mockResponse.json).toHaveBeenCalledWith({response});
  // });
});