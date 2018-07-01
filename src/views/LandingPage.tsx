import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Navbar left fixed>
      <NavItem><Link to="/">Catalog</Link></NavItem>
      <NavItem><Link to="/about">Landing page task</Link></NavItem>
      <NavItem>
        <Link style={{ display: 'flex' }} to="/cart"><Icon>shopping_cart</Icon>{`(${cartSize})`}</Link>
      </NavItem>
    </Navbar>
    <h2>About</h2>
    <p>
      <a href="https://github.com/Aziaev/thatcalendar.git">Github link</a>
    </p>
  </div>
);
