import React from 'react';
// import bootstrap
import {Link} from 'react-router-dom';

const SideBar = () =>{
    return(
        <div>
            <ul>
                <li>
                    <Link to="/week1-day1">Week 1 Day 1</Link>
                </li>
                <li>
                    <Link to="/week1-day2">Week 1 Day 2</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar;