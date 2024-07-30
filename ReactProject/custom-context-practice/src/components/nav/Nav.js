import './Nav.css';
import mycontext from '../login-logout-task/credentialContext';
import { useContext } from 'react';
function Nav(){
        const {state, setState} = useContext(mycontext);
        return(
        <div className='Nav'>
            <div className='Title'>
                <h2>Ecommerce Application</h2>
            </div>

            <div className='Menu'>
                <a href="/">Home</a>
                <a href="/">Products</a>
                <a href="/">Profile</a>
                <a href="/">Support</a>
                {
                    state ? <button onClick={()=>{setState(false)}}>Logout</button> : null
                }
            </div>
        </div>
    ); 
}
export default Nav;