import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route } from 'react-router-dom';
//component file


import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <TodoContainer />
    </Router>
  </React.StrictMode>
);
