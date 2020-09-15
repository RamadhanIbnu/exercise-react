import React from 'react';
import SideBar from '../sidebar/sidebar'
// import router
import { 
    BrowserRouter as Router,
    Switch,
    Route
   } from "react-router-dom";
// import pages
import Answer1 from '../../pages/ExerciseAnswer/Week1-Day1/CounterFunction.js';
import CounterClass from '../../pages/ExerciseAnswer/Week1-Day1/CounterClass';
import Product from '../../pages/ExerciseAnswer/Week1-Day1/Product';

const MainContent = () =>{
    return(
        <div>
            <Answer1/>
            <CounterClass/>
            <Product/>
        </div>
    )
}

export default MainContent;