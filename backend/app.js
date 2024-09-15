const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());


const gamesRoutes = require('./routes/games');
const usersRoutes = require('./routes/users');


app.use('/api/games', gamesRoutes);
app.use('/api/users', usersRoutes);


app.get('/', (req, res, next) => {
    res.send('API is running');
});

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    next(error);
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occured'});
});


app.listen(5000);