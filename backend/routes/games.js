const express = require('express');
const { check } = require('express-validator');

const router = express.Router();


const gamesController = require('../controllers/games');


router.get('/', (req, res, next) => {
    console.log("GET request in ratings");
    
    res.json([
        { game_id: 'g1', title: 'Game One' },
        { game_id: 'g2', title: 'Game Two' }
    ]);
    
});

router.post('/:gameID/rate', gamesController.rateGameByID);

router.patch('/:gameID/rate', gamesController.updateRating);

router.get('/:gameID/ratings', gamesController.getRatingsByGameID);


module.exports = router;