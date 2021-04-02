import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} location="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
