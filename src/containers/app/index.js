import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import {Navbar, Nav,NavItem } from 'react-bootstrap';
import '../../App.css';
const App = () => (
  <div>
      <Navbar inverse collapseOnSelect fluid className="No-border">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Inline App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
                {/*<Link to="/">Home</Link>*/}
                {/*<Link to="/about-us">About</Link>*/}
              <NavItem eventKey={1} href='/'>
                  Home
              </NavItem>
              <NavItem eventKey={2} href='/about-us'>
                About
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    <main className='container-fluid'>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)
export default App