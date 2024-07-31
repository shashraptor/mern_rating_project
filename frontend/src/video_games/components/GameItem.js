import React from "react";

import Card from "../../shared/components/UIElements/Card";
import './GameItem.css';

const GameItem = props => {
    return (
        <li className="game-item">
            <Card className="game-item__content">
                <div className="game-item__image">
                    <img src={props.image} alt={props.title}  />
                </div>
                <div className="game-item__info">
                    <h2>{props.title}</h2>
                </div>
                <div className="game-item__actions">
                    <button>VIEW GAME</button>
                </div>
            </Card>
        </li>
    );
};

export default GameItem;