import express from 'express';
import dbConection from './config/mongo.js';

const app = express();

// Connect to MongoDB
dbConection();

// Middleware to read JSON
app.use(express.json());
// Rute base of testing
app.get('/', (req, res)=> {
    res.send( { message: 'API is running...'});
});

export default app;