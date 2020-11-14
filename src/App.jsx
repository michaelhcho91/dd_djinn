import { useState, useEffect } from 'react';
import './App.scss';
import djinn from './resources/djinn.json';
import DjinnCard from './js/DjinnCard.jsx';
import { Switch, Route } from 'react-router-dom';
import Home from './js/Home.jsx';
import Venus from './js/Venus.jsx';
import Mercury from './js/Mercury.jsx';
import Mars from './js/Mars.jsx';
import Jupiter from './js/Jupiter.jsx';

const App = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => setCount(count + 1);

  useEffect(() => {
    // Perform side effects here to be called after each render including the first.
    console.log(djinn);

    return () => {
      // Return a clean up function to be called on component unmount.
      console.log('cleaning up');
    }
  })

  let venusDjinn = null;
  venusDjinn = djinn.venus.djinn.map(djinn => {
    return (
      <DjinnCard djinn={djinn} />
    );
  })
  
  return (
    <>
      <Switch>
        <Route path="/venus" component={Venus} />
        <Route path="/mercury" component={Mercury} />
        <Route path="/mars" component={Mars} />
        <Route path="/jupiter" component={Jupiter} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;