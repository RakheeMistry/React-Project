import React from 'react';
import './nav.css';

function Nav() {
    return (<div className="title">
        <div className="logo">
            <img src="https://th.bing.com/th?id=OIP.b2ePKH-sbtzeOC6wgoBLnQHaFb&w=292&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={50} alt="" />
        </div>
        <div className="list">
            <a href="menu">Menu</a>
            <a href="location">Location</a>
            <a href="about">About</a>
            <a href="contact">Contact</a>
        </div>
        <div className="btn">
            <button>Login</button>
        </div>
    </div>)
}
export default Nav;