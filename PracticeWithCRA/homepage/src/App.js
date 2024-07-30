import './App.css';
import React from 'react';
import Content from './components/content/content';
import Nav from './components/nav/nav';
import Contact from './components/contact/contact';
function App() {
  return (
    <div className="App">
    <Nav/>
    <Content/>
    <Contact/>
    </div>
  ); 
}

export default App;
