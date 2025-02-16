import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const Profile = () => {
  const navigate = useNavigate(); // Hook to navigate to other pages


  const [user, setUser] = useState({

  });

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  const [newUsername, setNewUsername] = useState(user.username);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const [profilePic, setProfilePic] = useState(user.profilePic);

  const handleLogOut = () => {
    console.log('Logged out');
    navigate('/login');
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  const handleSaveUsername = () => {
    setUser((prevState) => ({
      ...prevState,
      username: newUsername,
    }));
    setIsEditingUsername(false);
  };

  const handleSavePassword = () => {
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setUser((prevState) => ({
      ...prevState,
      password: newPassword,
    }));
    setIsEditingPassword(false);
  };

  const handleUploadPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
      setIsUploadingPhoto(false); // Hide file upload form
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Back Button */}
        <button onClick={handleBackToDashboard} className="back-button">
          &lt; Back to Dashboard
        </button>

        {/* Profile Section */}
        <div className="profile-info">
          {/* Profile Picture Section */}
          <div className="profile-pic-container">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <button
              onClick={() => setIsUploadingPhoto(true)}
              className="upload-photo-btn"
            >
              Upload Photo
            </button>
          </div>

          {/* Upload Photo Form */}
          {isUploadingPhoto && (
            <div className="upload-photo-form">
              <input
                type="file"
                onChange={handleUploadPhoto}
                className="file-input"
              />
              <button
                onClick={() => setIsUploadingPhoto(false)}
                className="cancel-upload-btn"
              >
                Cancel
              </button>
            </div>
          )}

          {/* Username Section */}
          <div className="edit-section">
            <h3>Username</h3>
            {!isEditingUsername ? (
              <div>
                <p>{user.username}</p>
                <button
                  onClick={() => setIsEditingUsername(true)}
                  className="edit-btn"
                >
                  Edit Username
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="input-field"
                />
                <button
                  onClick={handleSaveUsername}
                  className="save-btn"
                >
                  Save Username
                </button>
                <button
                  onClick={() => setIsEditingUsername(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Password Section */}
          <div className="edit-section">
            <h3>Password</h3>
            {!isEditingPassword ? (
              <div>
                <p></p>
                <button
                  onClick={() => setIsEditingPassword(true)}
                  className="edit-btn"
                >
                  Edit Password
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="input-field"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-field"
                />
                {error && <p className="error">{error}</p>}
                <button
                  onClick={handleSavePassword}
                  className="save-btn"
                >
                  Save Password
                </button>
                <button
                  onClick={() => setIsEditingPassword(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Log Out Button */}
        <div className="log-out-section">
          <button
            onClick={handleLogOut}
            className="log-out-btn"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
