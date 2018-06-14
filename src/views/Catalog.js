import React, { Component } from 'react';
import { Col, Container, Row, } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CatalogItem, Navigation } from '../components';
import { addToCart } from './../modules/shop';
import { getCartSize } from '../helpers';

class Catalog extends Component {
  render() {
    const { cart, stock, addToCart } = this.props;
    return (
      <div>
        <Navigation cartSize={getCartSize(cart)}/>
        <Container>
          <Row>
            <Col s={12}>
              <h2>Catalog</h2>
              {
                stock.map((product, index) =>
                  <CatalogItem
                    key={index}
                    addToCart={addToCart}
                    {...product}
                  />)
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stock: state.shop.stock,
  cart: state.shop.cart
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
