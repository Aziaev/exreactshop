import React, { Component } from 'react';
import { CatalogItem } from '../components';
import { STOCK } from '../constants';

class Catalog extends Component {

  render() {
    return (
      <div>
        <h2>Catalog</h2>
        {
          STOCK.map((item, index) =>
            <CatalogItem item={item}/>)
        }
      </div>
    );
  }
}


export default Catalog;
