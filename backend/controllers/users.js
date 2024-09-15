const userRatings = (req, res, next) => {
    const userID = req.params.userID;

    res.json({ message: 'it works'});

};

const registerUser = (req, res, next) => {
    const { username, password } = req.body;

    // add user to db
    res.json({ message: `User ${username} registered successfully` });
};


const loginUser = (req, res, next) => {
    const { username, password } = req.body;

    // verify username and password, return token
    res.json({ message: `User ${username} logged in` });
};

exports.userRatings = userRatings;
exports.registerUser = registerUser;
exports.loginUser = loginUser;