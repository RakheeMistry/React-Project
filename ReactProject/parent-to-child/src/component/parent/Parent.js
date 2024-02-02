import {useState} from "react";
import Child from "../child/Child";
function Parent() {
    const [state,setState] = useState("");
    const data = (event) => {
        setState(event.target.value);
    }
    return(
        <div>
            <h2>Parent Component</h2>
            <label>Enter Text : </label>
            <input type="text" onChange={data}/>
            <hr/>
            <Child info={state}/>
        </div>
    )
}
export default Parent;