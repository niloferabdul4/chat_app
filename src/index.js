import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './Context/AppContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <AppContextProvider>
      <App/>
    </AppContextProvider>
    </BrowserRouter>

);

reportWebVitals();
