import * as React from 'react';
import { Col, Container, Row, } from 'react-materialize';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCartSize, getRandomNumber, getSortedFullDataCart } from '../helpers';
import * as actions from './../modules/shop';
import Navigation from '../components/Navigation';
import CatalogItem from '../components/CatalogItem';

class Catalog extends React.Component<ICatalog & ICatalogProps> {
  componentWillMount() {
    const { cart, fetchFromLocalStorage } = this.props;
    if ( cart.length === 0 ) {
      fetchFromLocalStorage();
    }
  }

  componentDidUpdate( prevProps: ICatalog ) {
    const { cart, pushToLocalStorage } = this.props;
    const prevCart = prevProps.cart;
    if ( prevCart !== cart ) {
      pushToLocalStorage( cart );
    }
  }

  putToCartRandomly() {
    const randomCartSize = getRandomNumber();
    for ( let i = 0; i < randomCartSize; i++ ) {
      const randomProductId = getRandomNumber();
      this.props.addToCart( randomProductId );
    }
  }

  render() {
    const { cartSize, stock, addToCart } = this.props;
    return (
      <div>
        <Navigation cartSize={cartSize} putToCartRandomly={() => this.putToCartRandomly()}/>
        <Container>
          <Row>
            <Col s={12}>
              <h2>Catalog</h2>
              {stock.map( ( product: IStockItem, index: number ) =>
                <CatalogItem
                  key={index}
                  addToCart={addToCart}
                  {...product}
                /> )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ( state: ICatalogState ): ICatalog => {
  const { cart, sortedBy, sortOrder } = state.shop;
  const sortedCart = getSortedFullDataCart( cart, sortedBy, sortOrder );
  const cartSize = getCartSize( sortedCart );
  return {
    stock: state.shop.stock,
    cart: state.shop.cart,
    cartSize
  };
};

const mapDispatchToProps = ( dispatch: Dispatch<IAction> ) => bindActionCreators( {
    addToCart: actions.addToCart,
    pushToLocalStorage: actions.pushToLocalStorage,
    fetchFromLocalStorage: actions.fetchFromLocalStorage
  },
  dispatch );

export default connect<ICatalog, ICatalogProps>( mapStateToProps, mapDispatchToProps )( Catalog );
