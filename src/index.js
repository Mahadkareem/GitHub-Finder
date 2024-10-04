import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing global CSS file
import App from './App';

// Render the App component into the root DOM element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
