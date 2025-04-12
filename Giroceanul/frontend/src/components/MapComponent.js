import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = ({ onCupidonClick }) => {
  const cupidonCoordinates = [45.71329082505088, 21.24039039620596];
  
  // Create custom icon for the cupidon image
  const cupidonIcon = L.icon({
    iconUrl: '/cupid.png', // Path to your Cupidon image in the public folder
    iconSize: [22, 22], // Set size of the icon
    iconAnchor: [15, 30], // Anchor the icon properly on the map
  });

  // Handle marker click
  const handleMarkerClick = () => {
    if (onCupidonClick) {
      onCupidonClick(); // Trigger the show modal function from App.js
    }
  };

  return (
    <MapContainer center={[45.7018, 21.2346]} zoom={14} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Cupidon marker */}
      <Marker 
        position={cupidonCoordinates} 
        icon={cupidonIcon} 
        eventHandlers={{ click: handleMarkerClick }}  // Trigger modal on marker click
      />
    </MapContainer>
  );
};

export default MapComponent;
