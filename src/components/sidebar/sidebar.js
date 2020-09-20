import React from 'react';
import './Sidebar.css'
// import react router dom
import {Link} from "react-router-dom";  



  
  export default function SidebarExample() {
    return (
        <div className="sidebar">
            <ul>
            <li>
                <Link to="/Exercise/Week1day1">Week 1 day 1</Link>
            </li>
            <li>
                <Link to="/Exercise/Week1day2">Weed 1 day 2</Link>
            </li>
            <li>
                <Link to="/Exercise/Week1day3">Week 1 day 2</Link>
            </li>
            </ul>
      </div>
    )
  }  