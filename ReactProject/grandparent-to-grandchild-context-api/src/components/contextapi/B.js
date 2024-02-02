import { useContext } from "react";
import mycontext from "./Contextapi";
function B(){
    let data = useContext(mycontext);
    return(
        <div>
            <h2>B Component</h2>
            <p>{data}</p>
            <hr/>
        </div>
    )
} 
export default B; 