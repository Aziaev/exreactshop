import * as React from 'react';
import { Row } from 'react-materialize';
import { Route } from 'react-router-dom';
import Catalog from './views/Catalog';
import About from './views/About';
import Cart from './views/Cart';

class App extends React.Component<{}, {}> {

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
