import React from "react";

import GameList from "../components/GameList";


const GAMES = [
    {
        id: 'g1',
        title: 'The Legend Of Zelda: Tears of the Kingdom',
        imageUrl: 'https://images.nintendolife.com/880243a8baed2/switch-tloz-totk-artwork-01.large.jpg'
    },
    {
        id: 'g2',
        title: 'NieR:Automata',
        imageUrl: 'https://image.api.playstation.com/cdn/HP0082/CUSA06592_00/O9k8kwZ1hbPiFTXYN2DJ2G5XxLik6gJEBd19vNPN1jSAJIVyD9fgxrkdkUIiErJw.png'
    }
]

const UserGames = () => {
    return (
        <GameList items={GAMES} />
    );
};

export default UserGames;