import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className='Nav'>
            <div className='Title'>
                <h2>Ecommerce Application</h2>
            </div>

            <div className='Menu'>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/support">Support</Link>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Nav;