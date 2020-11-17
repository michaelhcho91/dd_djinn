import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './js/Header';
import Home from './js/Home';
import DjinnContainer from './js/DjinnContainer';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/venus" component={DjinnContainer} />
        <Route path="/mercury" component={DjinnContainer} />
        <Route path="/mars" component={DjinnContainer} />
        <Route path="/jupiter" component={DjinnContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;