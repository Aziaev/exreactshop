import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CatalogItem } from '../components/index';
import { updateCart } from './../modules/shop';

class Catalog extends Component {
  render() {
    console.log(`CATALOG PROPS = ${JSON.stringify(this.props)}`);
    const { stock, updateCart } = this.props;
    return (
      <div>
        <h2>Catalog</h2>
        {
          stock.map((product, index) =>
            <CatalogItem
              key={index}
              onAddAction={updateCart}
              {...product}
            />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stock: state.shop.stock
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
