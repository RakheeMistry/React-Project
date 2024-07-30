import { useState } from 'react';
import './App.css';
import Image from './components/Image';
import Text from './components/Text';
function App() {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="App">
      {showImage ? <Text/> : <Image/> }
      <br/><br/>
      <div>
        <button onClick={()=>{setShowImage(false)}}>Image Component</button>&nbsp;&nbsp;
        <button onClick={()=>{setShowImage(true)}}>Text Component</button>
      </div>
    </div>
  );
}
 
export default App;
