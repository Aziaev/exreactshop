import React, { Component } from 'react';
import { Col, Container, Icon, Navbar, NavItem, Row, } from 'react-materialize';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { STOCK } from '../constants/index';
import { About, Cart, Catalog } from "../views/index";
import { updateCart } from './../modules/shop';

class App extends Component {

  render() {
    // console.log(`container props = ${JSON.stringify(this.props)}`);
    return (
      <Row>
        <Navbar brand='ExReactShop' right fixed>
          <NavItem componentClass={Link} href='/about'>About</NavItem>
          <NavItem componentClass={Link} href='/cart'><Icon>shopping_cart</Icon></NavItem>
          {STOCK.length}
        </Navbar>

        <Container>
          <Row>
            <Col s={12}>
              <Route exact path="/" component={Catalog} props={this.props}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/cart" component={Cart} props={this.props}/>
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  stock: state.shop.stock
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
