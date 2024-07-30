import React, { Component } from 'react';
// import EventBind from './component/EventBind';
import './App.css';
import ParentComponent from './component/parentToChildCommunication/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <EventBind/> */}
        <ParentComponent/>
      </div>
    );
  }
  
}

export default App;
