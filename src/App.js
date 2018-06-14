import React, { Component } from 'react';
import { Row, } from 'react-materialize';
import { Route } from 'react-router-dom';
import { About, Cart, Catalog } from "./views/index";

class App extends Component {

  render() {
    return (
      <Row>
        <Route exact path="/" component={Catalog}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/cart" component={Cart}/>
      </Row>
    );
  }
}

export default App;
