import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './Container/Home/Home.jsx';
import Department from './Container/Department/Department';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    <Department />
    
    
    
  </React.StrictMode>,
)
