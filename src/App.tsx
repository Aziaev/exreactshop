import * as React from 'react';
import { Route } from 'react-router-dom';
import Catalog from './views/Catalog';
import LandingPage from './views/LandingPage';
import Cart from './views/Cart';

class App extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <Route exact path="/" component={Catalog}/>
        <Route exact path="/landing_page" component={LandingPage}/>
        <Route exact path="/cart" component={Cart}/>
      </div>
    );
  }
}

export default App;
