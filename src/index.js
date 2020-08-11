import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/index.css';
// import App from './components/App'; // Lo comentamos porque antes lo usábamos entre los React.StrictMode, donde ahora usamos Navbar
// import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';

import './assets/css/main.css'
import Wrapper from './components/Wrapper';

ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
