import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../containers/NavBar';
import Home from './Home';
import Categories from './Categories';

const App = () => (
  <BrowserRouter>
    <div className="App bg-light">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
