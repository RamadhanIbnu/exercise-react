import React from 'react';
import './App.css';
import MyNavbar from './components/navbar/Navbar.js';
// import react router
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
// import pages
import Home from './pages/Homee';
import Exercise from './pages/Exercise';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <Router>
      <div className="container-navbar">
        <MyNavbar/>
      </div>
      <div className="container-body">
        <Switch>
          <Route path="/Exercise">
            <Exercise/>
          </Route>
          <Route path="/MyProfile">
            <MyProfile/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
