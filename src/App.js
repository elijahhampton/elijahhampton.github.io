import React, { useEffect, useState } from 'react';
import './App.css';



import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useRouter } from './hooks/useRouter';
import Home from './components/Home/Home';


function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Switch>
          <Route component={Home} location="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
