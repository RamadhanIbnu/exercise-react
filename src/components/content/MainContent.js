import React from 'react';
import SideBar from '../sidebar/sidebar'
// import router
import { 
    BrowserRouter as Router,
    Switch,
    Route
   } from "react-router-dom";
// import pages
import Answer1 from '../../pages/ExerciseAnswer/Week1-Day1/Answer1.js';
import CounterClass from '../../pages/ExerciseAnswer/Week1-Day1/Answer1-1';

const MainContent = () =>{
    return(
        <div>
            <Answer1/>
            <CounterClass/>
        </div>
    )
}

export default MainContent;