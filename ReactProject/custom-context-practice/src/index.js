import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CustomProvider } from './components/login-logout-task/credentialContext';

ReactDOM.render(<CustomProvider><App/></CustomProvider>,document.getElementById('root'));

 