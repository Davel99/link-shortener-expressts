import { Application, Request, Response, NextFunction } from 'express';
import db from '../database/dbCreation';
import linksRouter from './routes/linkRouter';

const express = require('express');
require('dotenv').config();

// Create an Express application instance
const app: Application = express();
const PORT = process.env.PORT || 5500;
const KEY = process.env.XAPIKEY;
const SECRET = process.env.XAPISECRET;

// Middleware to parse JSON bodies
app.use(express.json());


// Sample route
app.get('/', (req: Request, res: Response, next: NextFunction) => {    

    db.all('SELECT * FROM Links', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.use(linksRouter);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});