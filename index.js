// implement your API here
const express = require('express');

const db = require('./data/db.js');
const server = express();

// Middleware
server.use(express.json());

// Key
const { users } = db;

//*** Endpoints ***\\

// Test  
//  server.get('/api', (req, res) => {
//      res.send('<h1>This is a test</h1>');
//  });


// Create - create a user using info sent inside the request body.
server.post('/api/users', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    users.insert(newUser)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(400).send({ errMessage: "Please provide name and bio for the user." });
        });
});



// Read - return/get all users from the database.
server.get('/api/users', (req, res) => {
    users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});



// Read - return/get the user with the specified id.
server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    users.findById(id)
        .then(usersId => {
            res.status(201).json(usersId);
        })
        // Not recieving message.
        .catch(err => {
            res.status(404).send({ message: "The users with the specified ID does not exist." });
        });
});



// Delete - remove users with a specified id and returns deleted user
server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    users.remove(id)
        .then(destroyUsers => {
            res.status(201).json(destroyUsers);
        })
        .catch(err => {
            res.status(404).send({ message: "The user with the specified ID does not exist." });
        });
});



// Put = Update - Updates the user with the specified id using data from the request body. Returns the modified document, NOT the original.
server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;

    users.update(id)
        .then(updateUsers => {
            res.status(201).json(updateUsers);
        })
        .catch(err => {
            res.status(500).send({ error: "The user information could not be modified." });
        });
});



// Listerning
server.listen(5000, () => {
    console.log('Server is running on port 5000');
});