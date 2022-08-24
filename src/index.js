import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
// import reportWebVitals from './reportWebVitals';
import BotEngine from "./ChatBot/Avatar"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    <BotEngine />


   
   
  </React.StrictMode>
);


// reportWebVitals();
