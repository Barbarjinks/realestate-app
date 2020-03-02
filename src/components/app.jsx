import React from 'react';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router';
import Properties from './Properties';
import AddProperty from './AddProperty';

import '../styles/app.css';


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
