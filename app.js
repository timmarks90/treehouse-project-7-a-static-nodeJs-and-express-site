const express = require('express');

// initiate express
const app = express();

// Load Pug into Express app
app.set('view engine', 'pug');

// Create routes/endpoints
// Home route
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/tim', (req, res) => {
    res.send('Tim\'s page');
})

// Launch server on localhost:3000
app.listen(3000);