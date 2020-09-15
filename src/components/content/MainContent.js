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

const MainContent = () =>{
    return(
        <div>
            <Answer1/>
        </div>
    )
}

export default MainContent;