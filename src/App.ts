import { Application, Request, Response, NextFunction } from 'express';
import linksRouter from './routes/linksRouter';
import errorHandler from './middleware/errorHandler';

const express = require('express');

// Create an Express application instance
const app: Application = express();
const PORT = process.env.PORT || 5500;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route

app.use(linksRouter);

//Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});