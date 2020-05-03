import React from 'react';
import Navbar from './components/Navbar'
import {NavbarContextProvider}  from './components/Navbar.context'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Projects from './pages/projects'
import './App.css';

function App() {
  return (
    <NavbarContextProvider>
      <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/projects" component={Projects}/>
          </Switch>
        </BrowserRouter>
      </div>
    </NavbarContextProvider>
  );
}

export default App;
