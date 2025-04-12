import React, { useState } from 'react';
import './PersonAuthorized.css'; // Import external CSS for styling

const PersonAuthorized = ({ onAuthorized }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [liteImage, setLiteImage] = useState(null);
  const [error, setError] = useState('');
  const [authorized, setAuthorized] = useState(false); // Local state for tracking authorization

  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLiteImage(reader.result); // Store base64 image data for preview
      };
      reader.readAsDataURL(file); // Convert image file to base64 for preview
    }
  };

  const validateAuth = () => {
    console.log("Validating credentials...");
    console.log("Name:", name, "Password:", password);

    // Get the name and password from environment variables
    const secretName = process.env.REACT_APP_SECRET_NAME;
    const secretPassword = process.env.REACT_APP_SECRET_PASSWORD;

    // Check if either the credentials or the image is valid
    if (
      (name === secretName && password === secretPassword) ||
      (liteImage && validateliteImage(liteImage))
    ) {
      console.log("Authorization successful");
      setAuthorized(true); // Set authorized to true when validation succeeds
      onAuthorized(); // Notify parent component that authorization was successful
    } else {
      setError('Invalid image or credentials.');
    }
  };

  const validateliteImage = (image) => {
    // Placeholder for future pattern recognition logic
    console.log("Validating Yooperlite image... (will implement pattern recognition soon)");
    return true; // Assuming the image is always valid for now
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Authorization</h2>

        {/* Show form if not authorized */}
        {!authorized ? (
          <div>
            <div className="input-group">
              <h3>Enter your name and password:</h3>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="input-group">
              <h3>Or upload image:</h3>
              <input type="file" onChange={handleImageUpload} />
              {liteImage && (
                <div>
                  <h4>Image Preview:</h4>
                  <img src={liteImage} alt="Preview Image" width="200" />
                </div>
              )}
            </div>
            <button onClick={validateAuth}>Authorize</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        ) : (
          /* Show access granted message inside the modal */
          <div>
            <h3>Access Granted</h3>
            <p>Congrats ❤️‍🔥</p>
            <a
              href={process.env.REACT_APP_SHAREPOINT_LINK} // Use the environment variable here
              target="_blank"
              rel="noopener noreferrer"
            >
              See the secrets
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonAuthorized;
