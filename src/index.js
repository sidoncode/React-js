import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// importing the main file of bootstrap css

import 'bootstrap/dist/css/bootstrap.css'

// after importing the bootstrap css file. we can see that the font changes

import Counter from './components/counter';


ReactDOM.render(<Counter/>,document.getElementById("root"))

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
