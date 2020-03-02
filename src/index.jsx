import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';

const app = (
  <Router>
    <App />
  </Router>
);

render(app, document.getElementById('root'));
