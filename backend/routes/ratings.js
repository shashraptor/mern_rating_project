const express = require('express');

const router = express.Router();

const dummy_ratings = [
    {
        id: 'g1',
        name: 'botw',
        raters: ['u1', 'u2']
    }
]


router.get('/', (req, res, next) => {
    console.log("GET request in ratings");
    res.json({message: 'it works!'});
});

module.exports = router;