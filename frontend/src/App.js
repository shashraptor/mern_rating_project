import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Users from './user/pages/Users';
import NewGame from './video_games/pages/NewGame';
import MainNav from './shared/components/Navigation/MainNav';
import UserGames from './video_games/pages/UserGames';

const App = () => {
  return (
    <Router>
      <MainNav />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/ratings" exact>
            <UserGames/>
          </Route>
          <Route path="/ratings/new" exact>
            <NewGame />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
