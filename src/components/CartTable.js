import React from 'react';
import { Button, Icon, Table } from 'react-materialize';
import CartTableQuantityTd from './CartTableQuantityTd';

export default function (props) {
  const { cart, reduceQuantity, addToCart, removeFromCart, setSort } = props;

  return (
    <Table hoverable>
      <thead>
      <tr>
        <th data-field="name" onClick={() => setSort('name')}>Name</th>
        <th data-field="quantity" onClick={() => setSort('quantity')}>Qnt</th>
        <th data-field="price" onClick={() => setSort('price')}>Price</th>
        {removeFromCart && <th data-field="control">Control</th>}
      </tr>
      </thead>
      <tbody>
      {
        cart.map((product, index) =>
          <tr key={index}>
            <td>{product.name}</td>
            <td>
              <CartTableQuantityTd
                id={product.id}
                addToCart={addToCart}
                reduceQuantity={reduceQuantity}
                quantity={product.quantity}
              />
            </td>
            <td>{`${product.price}₽`}</td>
            {removeFromCart &&
            <td>
              <Button onClick={() => removeFromCart(product.id)}>
                <Icon>clear</Icon>
              </Button>
            </td>
            }
          </tr>)
      }
      </tbody>
    </Table>
  );
}
