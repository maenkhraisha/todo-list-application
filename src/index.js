import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//component file

import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';

import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
        <Route path="/" element={<TodoContainer />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
