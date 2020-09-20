import React from "react";
import "./Exercise.css"
//import bootstrap
import { Container,Row,Col } from "react-bootstrap";
import SideBar from '../components/sidebar/sidebar';
// import react router dom
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  // import exercise pages
import CounterClass from '../pages/ExerciseAnswer/Week1-Day1/CounterClass';
import CounterFunction from '../pages/ExerciseAnswer/Week1-Day1/CounterFunction';


  const routes = [
    {
      path: "/Exercise/Week1day1",
      main: () => 
      <div>
          <CounterClass/> <CounterFunction/>
      </div>
    },
    {
      path: "/Exercise/Week1day2",
      main: () => <h2>Week1 day 2</h2>
    },
    {
      path: "/Exercise/Week1day3",
      main: () => <h2>Week1 day3</h2>
    }
  ];

const Exercise = () =>{
    return (
      <Router>
        {/* <div className="exercise-welcome">
           <h1>You can find exercise in sidebar</h1> 
        </div> */}
        <div className="container-exercise">
          <SideBar />

          <div className="content">
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
}

export default Exercise;