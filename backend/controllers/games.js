const { v4 : uuidv4 } = require('uuid');
const HttpError = require("../models/http-error");

const dummy_ratings = [
    
]

const rateGameByID = (req, res, next) => {
    const gameID = req.params.gameID;
    const { rating, review } = req.body;
    
    const createdRating = {
        ratingID: uuidv4(),
        gameID,
        rating,
        review
    };

    // insert rating into db
    dummy_ratings.push(createdRating);
    
    res.status(201).json({
        message: `Rating number ${createdRating.ratingID} of ${rating} stars added for game ${gameID}`,
        review: review
    });
};

const updateRating = (req, res, next) => {
    const gameID = req.params.gameID;
    const { rating, review } = req.body;
    
    const rating_index = dummy_ratings.findIndex(r => r.gameID === gameID);
    if (rating_index === -1) {
        return next(new HttpError(
            'Rating for this game not found', 404
        ));
    }

    const updated_rating = { ...dummy_ratings.find(r => r.gameID === gameID)};
    updated_rating.rating = rating;
    updated_rating.review = review;

    dummy_ratings[rating_index] = updated_rating;

    res.status(200).json({
        message: `Rating of ${rating} updated for game ${gameID}`,
        review: review
    });

};

const getRatingsByGameID = (req, res, next) => {
    const gameID = req.params.gameID;

    const all_ratings = dummy_ratings.filter(r => r.gameID === gameID);

    if (all_ratings.length === 0) {
        return next(new HttpError(
            'No ratings exist for this game', 404
        ));
    }

    res.status(200).json({
        ratings: all_ratings
    });
};

exports.rateGameByID = rateGameByID;
exports.updateRating = updateRating;
exports.getRatingsByGameID = getRatingsByGameID;