import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import './GameItem.css';

const GameItem = props => {
    return (
        <li className="game-item">
                <div className="game-item__image">
                    <img src={props.image} alt={props.title}  />
                </div>
                <div className="game-item__info">
                    <h2>{props.title}</h2>
                </div>
                <div className="game-item__actions">
                    <Button to={`/games/${props.id}`}>VIEW GAME</Button>
                </div>
        </li>
    );
};

export default GameItem;