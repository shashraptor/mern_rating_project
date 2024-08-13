import React from "react";

import './GameList.css';
import Card from "../../shared/components/UIElements/Card";
import GameItem from "./GameItem";

const GameList = props => {
    if (props.items.length === 0) {
        return (
            <div className="game-list center">
                <Card>
                    <h2>No Games Rated. Get Started!</h2>
                    <button>Rate Game</button>
                </Card>
            </div>
        );
    } else {
        return (
            <ul className="game-list">
                {props.items.map(game => (
                    <GameItem
                        key = {game.id}
                        id = {game.id}
                        image = {game.imageUrl}
                        title = {game.title}
                        defaultRating = {game.defaultRating}
                    />
                ))}
            </ul>
        );
    }
};

export default GameList;