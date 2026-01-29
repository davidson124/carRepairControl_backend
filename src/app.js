import express from 'express';
const app = express();
// Middleware to read JSON
app.use(express.json());
// Rute base of testing
app.get('/', (req, res)=> {
    res.send( { message: 'API is running...'});
});

export default app;