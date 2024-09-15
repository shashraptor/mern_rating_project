const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const usersController = require('../controllers/users');


router.get('/', usersController.getUsers);

router.get('/:userID/ratings', usersController.userRatings);

router.post('/register', usersController.registerUser);

router.post('/login', usersController.loginUser);


module.exports = router;