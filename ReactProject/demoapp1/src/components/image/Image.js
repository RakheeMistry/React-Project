import { useState } from "react";

function Image(){
    let [pic,setPic] = useState('https://tse4.mm.bing.net/th?id=OIP.fiYn3EPYKn4I7ehpamuw6AHaD4&pid=Api&P=0&h=180')
    const nodelog = ()=>{
        setPic(pic='https://tse2.mm.bing.net/th?id=OIP.xQJlilCdJ7U2ebPvc8DYLwHaIJ&pid=Api&P=0&h=180')
    }
    const reactlog = ()=>{
        setPic(pic='https://tse1.explicit.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=180');
    }
    return( 
    <div>
        <img src={pic}
            width={300}
            height={300}
            alt="" 
        />
        <br/>
        <button onClick={nodelog}>NodeJS</button>
        <button onClick={reactlog}>ReactJS</button>
    </div>
    );
}

export default Image;