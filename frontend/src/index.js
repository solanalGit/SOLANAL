import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Add this if you want to import global styles
import App from './App'; // Import App component
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles here

// OpenCV initialization
const loadOpenCV = () => {
  const script = document.createElement('script');
  script.src = "https://docs.opencv.org/master/opencv.js";
  script.async = true;
  script.onload = () => {
    console.log('OpenCV.js is loaded');
    // Now you can call any OpenCV function here
  };
  document.body.appendChild(script);
};

loadOpenCV();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
