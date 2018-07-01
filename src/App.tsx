import * as React from 'react';
import { Row } from 'react-materialize';
import { Route } from 'react-router-dom';
import Catalog from './views/Catalog';
import LandingPage from './views/LandingPage';
import Cart from './views/Cart';

class App extends React.Component<{}, {}> {

  render() {
    return (
      <Row>
        <Route exact path="/" component={Catalog}/>
        <Route exact path="/landing" component={LandingPage}/>
        <Route exact path="/cart" component={Cart}/>
      </Row>
    );
  }
}

export default App;
