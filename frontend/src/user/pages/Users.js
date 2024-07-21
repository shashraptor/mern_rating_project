import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'dummy_user',
            image: 'https://i1.sndcdn.com/artworks-TApbvfhp1rdFp1wz-nkjSqg-t500x500.jpg',
            //image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png',
            games: 3
        }
        // {
        //     id: 'u2',
        //     name: 'dummy_user2',
        //     image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png',
        //     games: 1
        // }
    ];

    return (
        <UsersList items={USERS} />
    );
}

export default Users;