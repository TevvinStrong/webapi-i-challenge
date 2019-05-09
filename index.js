// implement your API here
const express = require('express');

const db = require('./data/db.js');
const server = express();

// Middleware
server.use(express.json());

//*** Endpoints ***\\

// Test  
server.get('/api', (req, res) => {
    res.send('<h1>This is a test</h1>');
});

// Create




// Delete




// Put - Update




// Listerning
server.listen(5000, () => {
    console.log('Server is running on port 5000');
});