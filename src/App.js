import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';


function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Switch>
          <Route component={Home} exact location="/" />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
