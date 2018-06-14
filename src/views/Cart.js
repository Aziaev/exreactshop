import React, { Component } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CartTable, Navigation } from '../components';
import { getCartCost, getCartFullData, getCartSize } from '../helpers';
import { addToCart, reduceQuantity, removeFromCart } from './../modules/shop';

class Cart extends Component {
  render() {
    const { addToCart, cart, reduceQuantity, removeFromCart } = this.props;
    const cartWithFullData = getCartFullData(cart);
    const cartSize = getCartSize(cart);
    const cartCost = getCartCost(cartWithFullData);
    return (
      <div>
        <Navigation cartSize={cartSize}/>
        <Container>
          <Row>
            <Col s={12}>
              <h2>Shopping cart</h2>
              {cartWithFullData.length === 0 ?
                <div>
                  <hr/>
                  <h5>Cart is empty</h5>
                </div>
                :
                <div>
                  <CartTable
                    cart={cartWithFullData}
                    addToCart={addToCart}
                    reduceQuantity={reduceQuantity}
                    removeFromCart={removeFromCart}
                  />
                  <hr/>
                  <h5>Total: {cartCost} ₽</h5>
                  <Modal
                    header='Cart total'
                    trigger={
                      <Button className='blue'>Check Out</Button>
                    }>
                    <CartTable cart={cartWithFullData}/>
                    <hr/>
                    <h5>Total: {cartCost} ₽</h5>
                    <hr/>
                    Serialized cart:
                    <div>
                      <pre>{JSON.stringify(cartWithFullData, null, 2)}</pre>
                    </div>
                  </Modal>
                </div>}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.shop.cart
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart,
  reduceQuantity,
  removeFromCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

