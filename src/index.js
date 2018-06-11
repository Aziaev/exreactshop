import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from "./containers/App";
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App/>
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
