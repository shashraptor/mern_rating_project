const express = require('express');
const router = express.Router();

const gamesControllers = require('../controllers/games');


router.get('/', (req, res, next) => {
    console.log("GET request in ratings");
    
    res.json([
        { game_id: 'g1', title: 'Game One' },
        { game_id: 'g2', title: 'Game Two' }
    ]);
    
});

router.post('/:gameID/rate', gamesControllers.rateGameByID);

router.patch('/:gameID/rate', gamesControllers.updateRating);


module.exports = router;