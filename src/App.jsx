import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './Components/shared/Router';
import Navigation from './Components/shared/Navigation';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
