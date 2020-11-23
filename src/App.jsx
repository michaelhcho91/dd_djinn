import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './js/Header';
import Home from './js/Home';
import DjinnIndex from './js/DjinnIndex';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/venus" component={DjinnIndex} />
        <Route path="/mercury" component={DjinnIndex} />
        <Route path="/mars" component={DjinnIndex} />
        <Route path="/jupiter" component={DjinnIndex} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;