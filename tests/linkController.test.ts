import { Request, Response } from 'express';
import LinkController from '../src/controllers/LinkController';
import linkService from '../src/services/LinkService';
import appMessages from '../src/utility/appMessages';
import { LinkDTO } from '../src/dto/LinkDTO';

describe('LinkController', () => {
  it('Should return true when valid data is provided', async () => {
    const full_url : string = 'https://www.google.com/'; 
    const short_url : string = 'goo';
    const mockRequest: Request = {
      body: {
        full_url,
        short_url
      }
    } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    const linkDTO: LinkDTO = {
      id : 1,
      full_url,
      short_url,
      created_at : ''
    };

    linkService.postLink = jest.fn().mockResolvedValue(linkDTO);

    const linkController = new LinkController();
    await linkController.postLink(mockRequest, mockResponse, next);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(linkDTO);
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
    linkController.postLink(mockRequest, mockResponse, next);

    // Assert that next was called
    expect(next).toHaveBeenCalled();

    // Get the error passed to next
    const errorPassedToNext = next.mock.calls[0][0];

    // Assert specific properties of the error
    expect(errorPassedToNext).toBeInstanceOf(Error);
    expect(errorPassedToNext.message).toBe(appMessages.link.controller.invalid_params);
    expect(errorPassedToNext.statusCode).toBe(400);
  });

  it('Should return Error when full_url is missing', async () => {
    const mockRequest: Request = {
      body: {
        short_url: 'goo'
      }
    } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    const next = jest.fn();

    const linkController = new LinkController();
    linkController.postLink(mockRequest, mockResponse, next);

    // Assert that next was called
    expect(next).toHaveBeenCalled();

    // Get the error passed to next
    const errorPassedToNext = next.mock.calls[0][0];

    // Assert specific properties of the error
    expect(errorPassedToNext).toBeInstanceOf(Error);
    expect(errorPassedToNext.message).toBe(appMessages.link.controller.invalid_params);
    expect(errorPassedToNext.statusCode).toBe(400);
  });

  it('Should return Error when full_url is empty', async () => {
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
    const next = jest.fn();

    const linkController = new LinkController();
    linkController.postLink(mockRequest, mockResponse, next);

    // Assert that next was called
    expect(next).toHaveBeenCalled();

    // Get the error passed to next
    const errorPassedToNext = next.mock.calls[0][0];

    // Assert specific properties of the error
    expect(errorPassedToNext).toBeInstanceOf(Error);
    expect(errorPassedToNext.message).toBe(appMessages.link.controller.invalid_params);
    expect(errorPassedToNext.statusCode).toBe(400);
  });

  it('Should return Error when short_url is empty', async () => {
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
    const next = jest.fn();

    const linkController = new LinkController();
    linkController.postLink(mockRequest, mockResponse, next);

    // Assert that next was called
    expect(next).toHaveBeenCalled();

    // Get the error passed to next
    const errorPassedToNext = next.mock.calls[0][0];

    // Assert specific properties of the error
    expect(errorPassedToNext).toBeInstanceOf(Error);
    expect(errorPassedToNext.message).toBe(appMessages.link.controller.invalid_params);
    expect(errorPassedToNext.statusCode).toBe(400);
  });
});