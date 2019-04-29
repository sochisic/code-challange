import React from 'react';
import { Router, Route } from "wouter";
import Profile from './components/Profile';
import Main from './components/Main';

import './styles.css';

function App() {
  return (
    <Router>
      <Route path="/" component={Main} />
      <Route path="/:user" component={Profile} />
    </Router>
  );
}

export default App;


