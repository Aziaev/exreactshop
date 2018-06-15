import React from 'react';
import { Button, Icon, Table } from 'react-materialize';
import CartTableQuantityTd from './CartTableQuantityTd';
import TableHeaderWithButton from './HeaderButton';

export default function (props) {
  const { cart, reduceQuantity, addToCart, removeFromCart } = props;

  return (
    <Table hoverable centered>
      <thead>
      <tr>
        <TableHeaderWithButton fieldName={"name"} {...props}/>
        <TableHeaderWithButton fieldName={"quantity"} {...props}/>
        <TableHeaderWithButton fieldName={"price"} {...props}/>
        {removeFromCart && <th data-field="control"><Button flat disabled>Remove</Button></th>}
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
              <Button flat onClick={() => removeFromCart(product.id)}>
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
