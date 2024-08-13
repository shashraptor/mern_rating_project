import React from "react";

import Button from "../../shared/components/FormElements/Button";
import './GameItem.css';
import Stars from "./Stars";

const GameItem = props => {
    return (
        <li className="game-item">
                <div className="game-item__image">
                    <img src={props.image} alt={props.title}  />
                </div>
                <div className="game-item__info">
                    <h2>{props.title}</h2>
                    <Stars defaultRating={props.defaultRating}/>
                </div>
                <div className="game-item__actions">
                    <Button to={`/games/${props.id}`}>VIEW GAME</Button>
                </div>
        </li>
    );
};

export default GameItem;