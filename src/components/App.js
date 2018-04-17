import React from 'react';
import './App.css';
import { Navbar, NavDropdown, NavItem, Nav, MenuItem } from 'react-bootstrap';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Ranking</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
              Favorite Songs
              </NavItem>
              <NavItem eventKey={2} href="#">
              Your Ranking
              </NavItem>
              <NavDropdown eventKey={3} title="All Rankings" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Top 5</MenuItem>
                <MenuItem eventKey={3.2}>Top 10</MenuItem>
                <MenuItem eventKey={3.3}>Top 100</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Top Memorable Songs</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </header>
    </div>
  );
}

export default App;
