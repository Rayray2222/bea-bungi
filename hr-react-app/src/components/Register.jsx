import React, { useState } from 'react';
import { register } from '../services/api'; 
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true); 

    try {
      const data = await register(username, password); 


      if (data.success) {
     
        window.location.href = '/';
      } else {
        setError(data.error);  
      }
    } catch (error) {
   
      if (error.response) {
    
        setError('Error from server: ' + error.response.data.message || 'Something went wrong!');
      } else if (error.request) {
     
        setError('Network error: Unable to reach the server. Please check your connection and try again.');
      } else {
      
        setError('An unexpected error occurred: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);  
  };

  return (
    <section>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          &lt; Back
        </button>

        <h1 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Create an Account</h1>

        <div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                Username
              </label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300"
                disabled={loading}  
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>

          {error && (
            <p className="text-red-500 text-center mt-4">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Register;
