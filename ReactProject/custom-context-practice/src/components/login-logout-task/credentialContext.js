import { createContext, useState } from "react";

let mycontext = createContext();

export default mycontext;

export function CustomProvider(props){
    const [state,setState] = useState(false);
    return <mycontext.Provider value={{state, setState}}>
        {props.children}
    </mycontext.Provider>
} 