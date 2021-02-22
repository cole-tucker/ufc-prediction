import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/header/component.header';
import Events from './pages/events/page.events';
import Fighters from './pages/fighters/page.fighters';
import Home from './pages/home/page.home';
import Rankings from './pages/rankings/page.rankings';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Header history={history} />
      <div className="container" style={{ marginTop: '20px' }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/fighters" exact component={Fighters} />
          <Route path="/events" exact component={Events} />
          <Route path="/rankings" exact component={Rankings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
