import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ResponsiveAppBar from "./components/Navbar";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
