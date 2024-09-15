const { v4 : uuidv4 } = require('uuid');
const HttpError = require('../models/http-error');

const DUMMY_USERS = [
    {
        id: 'u1',
        username: 'test',
        email: 'testing@test.com',
        password: 'tester'
    }
]

const getUsers = (req, res, next) => {
    res.json({users: DUMMY_USERS});
};

const userRatings = (req, res, next) => {
    const userID = req.params.userID;

    res.json({ message: 'it works'});

};

const registerUser = (req, res, next) => {
    const { username, email, password } = req.body;

    const user_exists = DUMMY_USERS.find(u => u.email === email);
    if (user_exists) {
        return next(new HttpError(
            'Email already exists', 422
        ));
    }
    
    const new_user = {
        id: uuidv4(),
        username,
        email,
        password
    };

    // add user to db
    DUMMY_USERS.push(new_user);

    res.status(201).json({
        message: `User ${username} registered succesfully`
    });
};


const loginUser = (req, res, next) => {
    const { email, password } = req.body;

    // verify username and password, return token
    const identified_user = DUMMY_USERS.find(u => u.email === email);
    
    if (!identified_user || password !== identified_user.password) {
        return next(new HttpError(
            'Incorrect login credentials', 401
        ));
    }
    
    res.status(200).json({ message: `User ${email} logged in` });
};

exports.getUsers = getUsers;
exports.userRatings = userRatings;
exports.registerUser = registerUser;
exports.loginUser = loginUser;