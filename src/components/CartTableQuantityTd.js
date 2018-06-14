import React from 'react';
import { Icon } from 'react-materialize';

export default function (props) {
  const { id, quantity, reduceQuantity, addToCart } = props;
  return (
    <div>
      {reduceQuantity &&
      <div onClick={() => reduceQuantity(id)}>
        <Icon>remove</Icon>
      </div>
      }
      {quantity}
      {addToCart &&
      <div onClick={() => addToCart(id)}>
        <Icon>add</Icon>
      </div>
      }
    </div>
  );
}
