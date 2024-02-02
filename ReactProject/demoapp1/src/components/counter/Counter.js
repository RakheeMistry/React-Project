import {useState} from 'react';
function Counter(){
let [state,setState] = useState(0); // destructuring the useState Array

const increaseCount = () => {
    setState(state + 1);
};
return <div>
        <h2>Counter App</h2>
        <p>Count Value is : {state}</p>
        <button onClick={increaseCount}>Increase Count</button>
    </div>
}

export default Counter;