import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from './components/Profile';
import Main from './components/Main';
import { createBrowserHistory } from 'history';

//main styles
import './styles.css';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path='/' component={Main} />
      <Route path='/:user' component={Profile} />
    </Router>
  );
}

export default App;


