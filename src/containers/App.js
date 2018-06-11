import React from 'react';
import { Col, Container, Icon, Navbar, NavItem, Row, } from 'react-materialize';
import { Link, Route } from 'react-router-dom';
import { About, Catalog, Cart } from "./containers";

const App = () => (
  <Row>
    <Navbar brand='ExReactShop' right fixed>
      <NavItem componentClass={Link} href='/about'>About</NavItem>
      <NavItem componentClass={Link} href='/cart'><Icon value={5}>shopping_cart</Icon></NavItem>
      4
    </Navbar>

    <Container>
      <Row>
        <Col s={12}>
          <Route exact path="/" component={Catalog}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/cart" component={Cart}/>
        </Col>
      </Row>
    </Container>
  </Row>
);

export default App;
