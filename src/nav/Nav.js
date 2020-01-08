import React from 'react';
import {Link} from 'react-router-dom';
import "./../App.css" 

let Nav = function() {
    return(
        <div id="flex">
            <div class='nav'  style={{ fontSize: '1.5em', flex: '10', padding: '5px'}}><Link to = "/">Login</Link></div>
            <div class='nav'  style={{ fontSize: '1.5em', flex: '10', padding: '5px'}}><Link to = "/CreateLogin">Create a Login</Link></div>
            <div class='nav'  style={{ fontSize: '1.5em', flex: '10', padding: '5px'}}><Link to = "/Forgot">Forgot Your Info</Link></div>
        </div>
    )
}
export default Nav;