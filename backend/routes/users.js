const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users');


router.get('/', (req, res, next) => {
    console.log("GET request in ratings");
    res.json({message: 'it works!'});
});

router.get('/:userID/ratings', usersControllers.userRatings);

router.post('/register', usersControllers.registerUser);

router.post('/login', usersControllers.loginUser);


module.exports = router;