import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartHeader from './CartHeader.js';
import CartFooter from './CartFooter.js';
import CartItems from './CartItems.js';








ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
