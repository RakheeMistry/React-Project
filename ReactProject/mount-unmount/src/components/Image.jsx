import React from "react";
import { useState,useEffect } from "react";
function Image(){
    const [state,setState] = useState("https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=180")
    const [title,setTitle] = useState("Image");
    const [imageName,setImageName] = useState("React");
    // useEffect(()=>{
    //     console.log("useEffect is called");
    // });

    // useEffect(()=>{
    //     console.log("useEffect - 2 is called");
    // },[]);

    useEffect(()=>{
        document.title = imageName + ' Image Component';
        console.log("useEffect - 3 is called");
        return() => {
            console.log('returned function is called');
        };       
    },[imageName, title]);

    return (
        <div>
           <h2>{title} Component</h2>
           <button onClick={()=>{setState("https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=180")}}>React</button>&nbsp;&nbsp;
           <button onClick={()=>{
            setState("https://tse2.mm.bing.net/th?id=OIP.JWcKdjkJlUbPCu8Z2lKHzgHaH3&pid=Api&P=0&h=180");
            setImageName("Angular");  
             }}>Angular</button>&nbsp;&nbsp;
           <button onClick={()=>{setTitle("Image Title Changed")}}>Change Title</button>
           <br/><br/>
           <img src={state} width={300} height={300} alt="i"/>
        </div>
    )
}

export default Image; 