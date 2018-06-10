import React from 'react';
import { Col, Container, Icon, Navbar, NavItem, Row, } from 'react-materialize';
import { Link, Route } from 'react-router-dom';
import { About, Catalog } from "./containers";

const App = () => (
  <Row>
    <Navbar brand='ExReactShop' right divider>
      <NavItem componentClass={Link} href='/about'>About</NavItem>
      <NavItem href='get-started.html'><Icon value={5}>shopping_cart</Icon></NavItem>
      4
    </Navbar>

    <Container>
      <Row>
        <Col s={12}>
          <Route exact path="/" component={Catalog}/>
          <Route exact path="/about" component={About}/>
        </Col>
      </Row>
    </Container>
  </Row>
);

export default App;
