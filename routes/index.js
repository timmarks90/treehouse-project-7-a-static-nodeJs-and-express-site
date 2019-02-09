const express = require ('express');
const router = express.Router();

// Create routes/endpoints
// Home route
router.get('/', (req, res) => {
    res.render('index');
});

// Export router to reference in app.js
module.exports = router;