import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Notfound default />
    </Router>    
  );
}

export default App;
