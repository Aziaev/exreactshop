import React, { Component } from 'react';
import { Icon, Table } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STOCK } from '../constants/index';
import { updateCart } from './../modules/shop';

class Cart extends Component {

  render() {
    console.log(`cart PROPS = ${JSON.stringify(this.props)}`);
    const { cart} = this.props;
    return (
      <div>
        <h2>Shopping cart</h2>
        <Table hoverable>
          <thead>
          <tr>
            <th data-field="name">Name</th>
            <th data-field="quantity">Qnt</th>
            <th data-field="price">Price</th>
            <th data-field="delete">Delete</th>
          </tr>
          </thead>

          <tbody>
          {
            STOCK.map((product, index) =>
              <tr key={index}>
                <td>{product.item.name}</td>
                <td><Icon>remove</Icon>{product.stock}<Icon>add</Icon></td>
                <td>{`${product.item.price}₽`}</td>
                <td><Icon>clear</Icon></td>
              </tr>)
          }
          {
            cart.map((product, index) =>
              <tr key={index}>
                <td>{product.item.name}</td>
                <td><Icon>remove</Icon> {product.stock} <Icon>add</Icon></td>
                <td>{`${product.item.price}₽`}</td>
                <td><Icon>clear</Icon></td>
              </tr>)
          }
          </tbody>
        </Table>
        <hr/>
        <h5>Итого: {
          STOCK.reduce(((sum, product) => {
              return sum + +product.item.price * product.stock;
            }
          ), 0)} ₽</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.shop.cart
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

