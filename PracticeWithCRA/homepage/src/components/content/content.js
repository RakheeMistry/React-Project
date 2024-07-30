import './content.css';
import React from 'react';
function Content(){
    return (<div className="container">
        <div className="detail">
        <div className="tit"><p>YOUR FEET DESERVE THE BEST</p></div>
        <div className="desc"><p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p></div>
        <div className="btn1">
            <button className="btn11">Shop Now</button>
            <button className="btn12">Category</button>
        </div>
        <div className="plat">
            <p>Also Available On</p>
            <div className="plat1">
            <img src="https://th.bing.com/th?id=OIP.vBmeNfhXI1Sue8fAfAmKWAAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="logo" width="50"/>
            <img src="https://th.bing.com/th?id=OIP.douAQqLQCydHXDqsPfOcpwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="logo" width="50"/>
            </div>   
        </div>
        </div>
        <div className="display">
            <img src="https://th.bing.com/th/id/OIP.n98RyvZ2NcdJMjKPMBGs3AHaE6?w=300&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="550" alt="logo"/>
        </div>
    </div>)
}

export default Content;