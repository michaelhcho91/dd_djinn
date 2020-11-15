import { Switch, Route } from 'react-router-dom';
import djinn from './resources/djinn';
import './App.scss';
import DjinnCard from './js/DjinnCard';
import Header from './js/Header';
import Home from './js/Home';
import Venus from './js/Venus';
import Mercury from './js/Mercury';
import Mars from './js/Mars';
import Jupiter from './js/Jupiter';

const App = () => {
  // let venusDjinn = null;
  // venusDjinn = djinn.venus.djinn.map(djinn => {
  //   return (
  //     <DjinnCard djinn={djinn} />
  //   );
  // });

  return (
    <>
      <Header />
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