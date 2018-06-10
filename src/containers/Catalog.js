import React, { Component } from 'react';
import { Button, Card } from 'react-materialize';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Dates from '../components/Dates';
import { STOCK } from '../constants';
import { toogleCalendarField } from '../modules/toggler';
import { resetButton, toggleButton } from '../style';

class Catalog extends Component {

  render() {
    const { toogleCalendarField } = this.props;
    return (
      <Card>
        <h2>Catalog</h2>
        {
          STOCK.map((item, index) =>
            <CatalogItem item={item}/>)
        }
        <Dates
          {...this.props}
        />
        <Button
          bsStyle="danger"
          style={resetButton}
          onClick={toogleCalendarField}>
          Clear
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  day: state.toggler.day,
  month: state.toggler.month,
  year: state.toggler.year
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toogleCalendarField,
  changePage: () => push('/about')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
