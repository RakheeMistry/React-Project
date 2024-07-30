import {useState} from "react";
import B from "../B/B";

function A(){
    const [state, setState] = useState("");
    const getData = (event) => { setState(event.target.value); }
 return(
    <div>
        <h2>A Component</h2>
        <hr/>
        <label>Enter Text : </label>
        <input type="text" onChange={getData}/>
        <B adata={state}/>
    </div>
 )
}
export default A;