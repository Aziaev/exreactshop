import React, { Component } from 'react';
import { Col, Container, Row, } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CatalogItem, Navigation } from '../components';
import { getCartSize, getSortedFullDataCart } from '../helpers';
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
    const { cartSize, stock, addToCart } = this.props;
    return (
      <div>
        <Navigation cartSize={cartSize}/>
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

const mapStateToProps = state => {
  const { cart, sortedBy, sortOrder } = state.shop;
  const sortedCart = getSortedFullDataCart(cart, sortedBy, sortOrder);
  const cartSize = getCartSize(sortedCart);
  return {
    stock: state.shop.stock,
    cart: state.shop.cart,
    cartSize
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart,
  pushToLocalStorage,
  fetchFromLocalStorage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
