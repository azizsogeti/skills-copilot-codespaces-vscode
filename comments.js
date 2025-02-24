// Create web server with express
// Create a route for comments
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete
// Create a route for comments/:id/update
// Create a route for comments/new
// Create a route for comments/create
// Create a route for comments/:id/like
// Create a route for comments/:id/dislike

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', (req, res) => {
    res.send('Get all comments');
});

app.get('/comments/:id', (req, res) => {
    res.send(`Get comment with id ${req.params.id}`);
});

app.get('/comments/:id/edit', (req, res) => {
    res.send(`Edit comment with id ${req.params.id}`);
});

app.get('/comments/:id/delete', (req, res) => {
    res.send(`Delete comment with id ${req.params.id}`);
});

app.post('/comments/:id/update', (req, res) => {
    res.send(`Update comment with id ${req.params.id}`);
});

app.get('/comments/new', (req, res) => {
    res.send('Create a new comment');
});

app.post('/comments/create', (req, res) => {
    res.send('Create a new comment');
});

app.get('/comments/:id/like', (req, res) => {
    res.send(`Like comment with id ${req.params.id}`);
});

app.get('/comments/:id/dislike', (req, res) => {
    res.send(`Dislike comment with id ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


