import express, { Application, Request, Response, NextFunction } from 'express';

// Create an Express application instance
const app: Application = express();
const port : number = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, world!');
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});