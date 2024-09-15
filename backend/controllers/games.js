const dummy_ratings = [
    
]

const rateGameByID = (req, res, next) => {
    const gameID = req.params.gameID;
    const { rating, review } = req.body;
    
    const createdRating = {
        gameID,
        rating,
        review
    };

    // insert rating into db
    dummy_ratings.push(createdRating);
    
    res.status(201).json({
        message: `Rating of ${rating} added for game ${gameID}`,
        review: review
    });
};

const updateRating = (req, res, next) => {
    const gameID = req.params.gameID;
    const { rating, review } = req.body;
    
    const rating_index = dummy_ratings.findIndex(r => r.gameID === gameID);
    if (rating_index === -1) {
        return res.status(404).json({
            message: `Rating for game ${gameID} not found`
        });
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

exports.rateGameByID = rateGameByID;
exports.updateRating = updateRating;