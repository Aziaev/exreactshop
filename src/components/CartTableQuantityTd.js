import React from 'react';

export default function (props) {
  const { id, quantity, reduceQuantity, addToCart } = props;
  return (
    <div>
      {reduceQuantity &&
      <div onClick={() => reduceQuantity(id)} style={{ display: 'inline-flex', padding: '15px' }}>
        <h5>-</h5>
      </div>
      }
      <div style={{ display: 'inline-flex' }}>{quantity}</div>
      {addToCart &&
      <div onClick={() => addToCart(id)} style={{ display: 'inline-flex', padding: '15px' }}>
        <h5>+</h5>
      </div>
      }
    </div>
  );
}
