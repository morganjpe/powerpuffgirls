import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Layout from './app/layout';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
