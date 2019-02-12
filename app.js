const express = require('express');
const { projects } = require('./data.json');

// initiate express
const app = express();

const PORT = 3000;

// Use a static route and the express.static method to serve the static files located in the public folder
app.use("/static", express.static("public"));

// Load Pug into Express app - set view engine to pug
app.set('view engine', 'pug');

// Home route
app.get('/', (req, res) => {
    res.locals.projects = projects; 
    res.render('index');
});

// About route
app.get('/about', (req, res) => {
    res.render('about');
});

// Projects dynamic route
app.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    res.locals.projects = projects[id]; 
    res.render('project', projects[id]);
});

// Log error if non-existent route
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    console.log(`There was an error: ${err.message}`);
    next(err);
});

// Log errors if failed request
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});

// Launch server on localhost:3000
app.listen(PORT, () => {
    console.log(`This app is running on port ${PORT}`);
});