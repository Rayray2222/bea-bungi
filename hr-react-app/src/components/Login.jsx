import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after successful login
import { login } from '../services/api'; // API call for login

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(username, password); 
      if (data.success) {
       
        navigate('/dashboard');
      } else {
        setError(data.error); 
      }
    } catch (error) {
      setError('An error occurred during login'); 
    }
  };


  const handleBack = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">

        <button
          onClick={handleBack}
          className="text-blue-600 hover:text-blue-700 font-semibold mb-4 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 9.293a1 1 0 011.414 0L12 12.586V6a1 1 0 112 0v8a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 112 0v6.586l3.293-3.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>


        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-center mt-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
