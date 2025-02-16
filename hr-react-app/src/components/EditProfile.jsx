import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const navigate = useNavigate(); // Hook to navigate to other pages

  const handleSave = (event) => {
    event.preventDefault();
    // Logic to save profile changes, e.g., send API request

    // After saving, navigate back to the profile page
    navigate('/profile');
  };

  return (
    <div className="edit-profile-container bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center items-center py-6 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={() => navigate('/profile')}
          className="mb-4 text-blue-500 hover:text-blue-700 font-semibold"
        >
          &lt; Back to Profile
        </button>

        <h1 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Edit Profile</h1>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">Bio</label>
            <textarea
              id="bio"
              placeholder="Write a short bio"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
