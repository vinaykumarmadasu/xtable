import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change to 'react-dom/client'
import App from './App';

// Get the root element
const rootElement = document.getElementById('root');

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
