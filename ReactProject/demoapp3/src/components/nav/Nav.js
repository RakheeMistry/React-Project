import './Nav.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";
function Nav() {
    return (
        <div className='Nav'>
            <div className='Title'>
                <h2>Online Shopping</h2>
            </div>
            <div className='Search'>
                <input type='text' id='text1'/><input type='submit' value="search" id='text2'/>
            </div>
            <div className='Menu'>
                <div className='icon'><FontAwesomeIcon icon={faHeart} /></div>
                <div className='icon'><FontAwesomeIcon icon={faCartShopping} /></div>
                <div className='icon'><FontAwesomeIcon icon={faUser} /></div>
            </div>
        </div>
    );
}
export default Nav;
