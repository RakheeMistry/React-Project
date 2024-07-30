import React, { useContext } from "react";
import Login from "./Login";
import Home from "./Home";
import context from "./credentialContext";

 function Main(){
    const {state} = useContext(context);
    return(
        <div>
            {
                state ? <Home/> : <Login/>
            }
        </div>
    )
 }
 export default Main; 