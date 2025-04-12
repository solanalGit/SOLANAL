import React, { useState } from 'react';
import './App.css';
import MapComponent from './components/MapComponent';  // Import Map Component
import PersonAuthorized from './components/PersonAuthorized';  // Import PersonAuthorized Component

function App() {
    const [authorized, setAuthorized] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const sharepointLink = "https://your-sharepoint-link.com"; // Replace with your actual SharePoint link

    const handleAuthorized = () => {
        console.log('Authorization successful');
        setAuthorized(true); // Set the user as authorized
    };

    const handleShowAuthModal = () => {
        console.log('Opening the authorization modal...');
        setShowAuthModal(true); // Show the authorization modal when the user clicks the Cupidon icon
    };

    return (
        <div className="App">
            <h1>Here I'll place the menu</h1>
            <MapComponent onCupidonClick={handleShowAuthModal} />

            {/* Show authorization modal if showAuthModal is true */}
            {showAuthModal && (
                <PersonAuthorized
                    onAuthorized={handleAuthorized}
                    sharepointLink={sharepointLink}
                    authorized={authorized} // Pass the `authorized` state to PersonAuthorized
                />
            )}
        </div>
    );
}

export default App;
