import { Switch, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const PageLink = (props) => (
  <NavLink className="App-link" activeClassName="App-link-active" {...props} />
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Page">
          <Switch>
            <Route exact path="/">
              Home page content
            </Route>
            <Route path="/about">About page content</Route>
          </Switch>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <PageLink exact to="/">
          Home
        </PageLink>
        <PageLink to="/about">About</PageLink>
      </header>
    </div>
  );
}

export default App;
