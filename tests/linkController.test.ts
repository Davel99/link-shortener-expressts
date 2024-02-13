import { Request, Response } from 'express';
import LinkController from '../src/controllers/LinkController';
import linkService from '../src/services/LinkService';
import appMessages from '../src/utility/appMessages';
import { LinkDTO } from '../src/dto/LinkDTO';

describe('LinkController.postLink()', () => {
  it('Should return TRUE when valid data is provided', async () => {
    const full_url: string = 'https://www.google.com/';
    const short_url: string = 'goo';
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
      id: 1,
      full_url,
      short_url,
      created_at: ''
    };

    linkService.postLink = jest.fn().mockResolvedValue(linkDTO);

    const linkController = new LinkController();
    await linkController.postLink(mockRequest, mockResponse, next);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(linkDTO);
  });

  it('Should return ERROR when MISSING short_url', async () => {
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

  it('Should return ERROR when MISSING full_url', async () => {
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

  it('Should return ERROR when EMPTY full_url', async () => {
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

  it('Should return ERROR when EMPTY short_url', async () => {
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

  it('Should return ERROR when INVALID full_url', async () => {
    const mockRequest: Request = {
      body: {
        full_url: 'https://invalidddd',
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
    expect(errorPassedToNext.message).toBe(appMessages.link.controller.invalid_fullUrl);
    expect(errorPassedToNext.statusCode).toBe(400);
  });
});

describe('LinkController.deleteLink()', () => {
  it('Should return TRUE when valid data is provided', async () => {
    const short_url: string = 'goo';
    const mockRequest: Request = {
      params: {
        short_url
      }
    } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;
    const next = jest.fn();

    const response = true;
    linkService.deleteLink = jest.fn().mockResolvedValue(response);

    const linkController = new LinkController();
    await linkController.deleteLink(mockRequest, mockResponse, next);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ response });
  });

  it('Should return ERROR when MISSING short_url', async () => {
    const mockRequest: Request = {
      params: {
        short_url: ''
      }
    } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;
    const next = jest.fn();

    const linkController = new LinkController();
    linkController.deleteLink(mockRequest, mockResponse, next);

    // Assert that next was called
    expect(next).toHaveBeenCalled();

    // Get the error passed to next
    const errorPassedToNext = next.mock.calls[0][0];

    // Assert specific properties of the error
    expect(errorPassedToNext).toBeInstanceOf(Error);
    expect(errorPassedToNext.message).toBe(appMessages.link.controller.invalid_shortUrl);
    expect(errorPassedToNext.statusCode).toBe(400);
  });
});

describe('LinkController.redirect()', () => {
  it('Should return REDIRECTION when valid data is provided', async () => {
    const short_url: string = 'goo';
    const mockRequest: Request = {
      params: {
        short_url
      }
    } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      redirect: jest.fn()
    } as unknown as Response;
    const next = jest.fn();

    const response = "https://google.com";
    linkService.getUrl = jest.fn().mockResolvedValue(response);

    const linkController = new LinkController();
    await linkController.redirect(mockRequest, mockResponse, next);

    expect(mockResponse.redirect).toHaveBeenCalledWith(response);
  });

  it('Should return ERROR when INVALID full_url', async () => {
    const mockRequest: Request = {
      params: {
        short_url: 'goo'
      }
    } as unknown as Request;
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;
    const next = jest.fn();

    const invalidUrl = "httx://goo.com";
    linkService.getUrl = jest.fn().mockResolvedValue(invalidUrl);

    const linkController = new LinkController();
    await linkController.redirect(mockRequest, mockResponse, next);

    // Assert that next was called
    expect(next).toHaveBeenCalled();

    // Get the error passed to next
    const errorPassedToNext = next.mock.calls[0][0];

    // Assert specific properties of the error
    expect(errorPassedToNext).toBeInstanceOf(Error);
    expect(errorPassedToNext.message).toBe(appMessages.link.controller.invalid_fullUrl);
    expect(errorPassedToNext.statusCode).toBe(400);
  });
});