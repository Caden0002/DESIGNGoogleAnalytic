import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-27JWP98W69");

ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

export default function trackButtonClick(buttonName) {
    ReactGA.event({
        category: 'Button Click',
        action: 'Clicked',
        label: buttonName
    });
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
