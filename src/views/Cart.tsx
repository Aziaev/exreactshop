import * as React from 'react';
import { Button, Col, Container, Modal, Row } from 'react-materialize';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCartCost, getCartSize, getSortedFullDataCart } from '../helpers';
import * as actions from './../modules/shop';
import Navigation from '../components/Navigation';
import CartTable from '../components/CartTable';

class Cart extends React.Component<ICartState & ICartProps> {
  componentWillMount() {
    const { sortedCart, fetchFromLocalStorage } = this.props;
    if ( sortedCart.length === 0 ) {
      fetchFromLocalStorage();
    }
  }

  componentDidUpdate( prevProps: ICartState ) {
    const { sortedCart, pushToLocalStorage } = this.props;
    const prevCart = prevProps.cart;
    if ( prevCart !== sortedCart ) {
      pushToLocalStorage( sortedCart );
    }
  }

  render() {
    const {
      addToCart, cartSize, cartCost, sortedCart, sortedBy,
      sortOrder, reduceQuantity, removeFromCart, setSort
    } = this.props;
    return (
      <div>
        <Navigation cartSize={cartSize}/>
        <Container>
          <Row>
            <Col s={12}>
              <h2>Shopping cart</h2>
              {sortedCart.length === 0 ?
                <div>
                  <hr/>
                  <h5>Cart is empty</h5>
                </div>
                :
                <div>
                  <CartTable
                    cart={sortedCart}
                    addToCart={addToCart}
                    reduceQuantity={reduceQuantity}
                    removeFromCart={removeFromCart}
                    setSort={setSort}
                    sortedBy={sortedBy}
                    sortOrder={sortOrder}
                  />
                  <hr/>
                  <h5>Total: {cartCost} ₽</h5>
                  <Modal
                    header="Cart total"
                    trigger={<Button className="blue">Check Out</Button>}
                  >
                    <CartTable cart={sortedCart}/>
                    <hr/>
                    <h5>Total: {cartCost} ₽</h5>
                    <hr/>
                    Serialized cart:
                    <div>
                      <pre>{JSON.stringify( sortedCart, null, 2 )}</pre>
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

const mapStateToProps = ( state: ICartState ) => {
  const { cart, sortedBy, sortOrder } = state.shop;
  const sortedCart = getSortedFullDataCart( cart, sortedBy, sortOrder );
  const cartSize = getCartSize( sortedCart );
  const cartCost = getCartCost( sortedCart );
  return {
    sortedBy,
    sortOrder,
    sortedCart,
    cartSize,
    cartCost,
  };
};

const mapDispatchToProps = ( dispatch: Dispatch<IAction> ) => bindActionCreators( {
  addToCart: actions.addToCart,
  fetchFromLocalStorage: actions.fetchFromLocalStorage,
  pushToLocalStorage: actions.pushToLocalStorage,
  reduceQuantity: actions.reduceQuantity,
  removeFromCart: actions.removeFromCart,
  setSort: actions.setSort
}, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( Cart );
