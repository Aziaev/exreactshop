import React, { Component } from 'react';
import { Col, Container, Row, } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CatalogItem, Navigation } from '../components';
import { getCartSize } from '../helpers';
import { addToCart, fetchFromLocalStorage, pushToLocalStorage } from './../modules/shop';

class Catalog extends Component {
  componentWillMount() {
    const { cart, fetchFromLocalStorage } = this.props;
    if (cart.length === 0) {
      fetchFromLocalStorage();
    }
  }

  componentDidUpdate(prevProps) {
    const { cart, pushToLocalStorage } = this.props;
    const preCart = prevProps.cart;
    if (preCart !== cart) {
      pushToLocalStorage(cart);
    }
  }

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
  addToCart,
  pushToLocalStorage,
  fetchFromLocalStorage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
