import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import './scss/index.scss';
import { ServicesContext } from './context/ServicesContext.js';
import { services } from './data/services.js';
// import About from './pages/About/About.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServicesContext.Provider value={services}>
    <App/>
    </ServicesContext.Provider>
  </React.StrictMode>,
)
