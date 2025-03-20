import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // Handle Sign In logic (e.g., authenticate the user)
    console.log('Sign In Data:', formData);
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-lg"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4">Sign In</button>
      </form>

      {/* Add a link to the Forgot Password page */}
      <div className="mt-4 text-center">
        <span className="text-gray-600">Forgot your password? </span>
        <Link to="/forgot-password" className="text-blue-500 hover:underline">Reset it here</Link>
      </div>
    </div>
  );
};

export default SignIn;
