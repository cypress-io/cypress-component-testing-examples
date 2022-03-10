import { MemoryRouter, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <h2 data-test="current-page-header">
          Current Page is{" "}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </h2>
        <h2>
          Navigate to{" "}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button data-test="home-btn">Home</Button>
            </LinkContainer>
            <LinkContainer to="/about">
              <Button data-test="about-btn">About</Button>
            </LinkContainer>
            <LinkContainer to="/users">
              <Button data-test="users-btn">Users</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
      </Container>
    </Container>
  </MemoryRouter>
);

export default App;
