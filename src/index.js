import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { initializeCanvas } from './js/Canvas';
import reportWebVitals from './reportWebVitals';

document.addEventListener('DOMContentLoaded', () => {
  initializeCanvas();

  const root = document.getElementById('root');
  const component = (
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );

  ReactDOM.render(component, root);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
