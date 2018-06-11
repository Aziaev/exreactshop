import React, { Component } from 'react';
import { Table } from 'react-materialize';
import { STOCK } from '../constants';

class Cart extends Component {

  render() {
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
            STOCK.map((position, index) =>
              <tr key={index}>
                <td>{position.item.name}</td>
                <td>-{position.stock}+</td>
                <td>{`${position.item.price}₽`}</td>
              </tr>)
          }
          </tbody>
        </Table>
        <hr/>
        <h5>Итого: {
          STOCK.reduce(((sum, position) => {
              return sum + +position.item.price*position.stock;
            }
          ), 0)} ₽</h5>

      </div>
    );
  }
}

export default Cart;
