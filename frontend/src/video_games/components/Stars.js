import React, {useState} from "react";

import './Stars.css';

const DEFAULT_COUNT = 5
const DEFAULT_ICON = "1"
const DEFAULT_UNSELECTED_COLOR = "grey";
const DEFAULT_COLOR = "yellow";

const Stars = props => {
    const [rating, setRating] = useState(props.defaultRating);
    const [temporaryRating, setTemporaryRating] = useState(0);

    const handleClick = (rating) => {
        setRating(rating)
    }

    let stars = Array(DEFAULT_COUNT).fill(DEFAULT_ICON);
    
    return (
        <div className="starsContainer">
            {stars.map((item, index) => {
                const isActiveColor = (rating || temporaryRating) &&
                (index < rating || index < temporaryRating)

                let elementColor = "";

                if (isActiveColor) {
                    elementColor = DEFAULT_COLOR
                } else {
                    elementColor = DEFAULT_UNSELECTED_COLOR
                }

                return (
                <div 
                    className="star"
                    key={index}
                    style={{
                        fontSize: "40px" ,
                        color: elementColor,
                        filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`
                    }}
                    onMouseEnter = {() => setTemporaryRating(index + 1)}
                    onMouseLeave={() => setTemporaryRating(0)}
                    onClick={() => handleClick(index + 1)}
                >
                        ☆
                </div>
                );
            })}
        </div>
    );
};

export default Stars;