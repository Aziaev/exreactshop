import React from 'react';
import { Button, Icon, Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <Navbar left fixed>
      <NavItem><Link to='/'>Catalog</Link></NavItem>
      <NavItem><Link to='/about'>About</Link></NavItem>
      <NavItem><Link style={{ display: 'flex' }} to='/cart'><Icon>shopping_cart</Icon>{`(${props.cartSize})`}
      </Link></NavItem>

      {props.putToCartRandomly &&
      <Button flat onClick={() => props.putToCartRandomly()} style={{ color: '#ffffff' }}>
        Add to cart randomly
      </Button>}
    </Navbar>
  );
}
