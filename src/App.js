import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Users from './pages/Users/Users';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>

        <Route path="/" exact>
            <Home />
          </Route>

          <Route exact path="/user">
            <Users />
          </Route> 

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
