const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.use((req, res, next) => {
    // add later middleware
    next();
})

router.get('/', (req, res) => {
    res.json({
        error: true,
        data: 'page not finished'
    })
})

module.exports = router;