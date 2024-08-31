const express = require('express');
const bodyParser = require('body-parser');

const ratingsRoute = require('./routes/ratings');

const app = express();

app.use('/api/ratings', ratingsRoute);



app.listen(5000);