import * as React from 'react';
import { Button, Icon, Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

/**
 * Верхнее навигационное меню
 *
 * @param props
 *  cartSize - количество товаров корзине
 *  putToCartRandomly - добавляет произвольное количство произвольных товаров в корзину
 *
 * @returns рендерит навигационное меню
 */
export default function ( props: any ) {
  const {cartSize, putToCartRandomly} = props;
  return (
    <Navbar left fixed>
      <NavItem><Link to="/">Catalog</Link></NavItem>
      <NavItem><Link to="/about">Landing page task</Link></NavItem>
      <NavItem><Link style={{ display: 'flex' }} to="/cart"><Icon>shopping_cart</Icon>{`(${cartSize})`}
      </Link></NavItem>

      {putToCartRandomly &&
      <Button flat onClick={() => putToCartRandomly()} style={{ color: '#ffffff' }}>
        Add to cart randomly
      </Button>}
    </Navbar>
  );
}
