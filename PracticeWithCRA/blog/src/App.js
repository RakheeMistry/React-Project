import './App.css';
import { useState } from 'react';
import User from './components/User';
import Student from './components/Student';
import {Student1} from './components/Student1';
import EventCall from './components/EventCall';
import InputPrint from './components/InputPrint';
function App() {

  function Apple(){
    return(<div>Apple Component</div>)
  }

  const [name,setName] = useState('Anil');

  return (
    <div className="App">

      <EventCall/>

      <InputPrint/>
      
      <User/>

      {/* two ways to call function inside function */}
      <Apple/>
      {Apple()}


      <Student name = {name}/>

      <button onClick={() => {setName('Sidhu')}}>Update</button>

      <Student1 names="Anil"/>
    </div>
  );
}

export default App;
