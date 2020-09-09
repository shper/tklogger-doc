import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Detail from './pages/detail';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createHashHistory } from "history";

const hashHistory = createHashHistory();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route exact path="/" component={Home}/>
    <Route path="/detail" component={Detail}/>
  </Router>,
  document.getElementById('root')
);