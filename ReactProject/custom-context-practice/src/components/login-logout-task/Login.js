import React from "react";
import { useState , useContext } from "react";
import mycontext from "./credentialContext";
function Login(){
    var {setState} = useContext(mycontext);
    const [login,setLogin] = useState({
        name:"",
        password:"",
    });
    const checkCredential = () => {
        if(login.name === "kabir" && login.password === "kabir@123")
        {
            setState(true);
        }
        else{
            alert("check the credential");
        }
    }
    return(
        <div style={{width:"300px", boxShadow:"0 0 10px black", padding:"20px", margin:"70px auto", textAlign:"center"}}>
            <h2>Login Form</h2>
            <div>
                <input type="text" placeholder="User Name" onChange={(e)=>{
                    setLogin({
                        ...login,
                        name:e.target.value
                    })
                }}/>
            </div>
            <div>
                <input type="password" placeholder="Password" onChange={(e)=>{
                    setLogin({
                        ...login,
                        password:e.target.value
                    })
                }}/>
            </div>
            <br />
            <button onClick={checkCredential}>Login</button>
        </div>
    )
}
export default Login; 