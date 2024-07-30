import {useState} from "react";
import mycontext from "./Contextapi";
import B from "./B";
function A(){
    const [state, setState] = useState("sagar");
    const getData = () => { setState("kabir") }
 return(
    <div>
        <h2>A Component</h2>
        <button onClick={getData}>Change</button>
        <hr/>
        <mycontext.Provider value={state}>
        <B/>
        </mycontext.Provider>
       
    </div>
 )
} 
export default A; 