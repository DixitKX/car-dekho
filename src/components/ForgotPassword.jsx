// src/components/ForgotPassword.jsx
import React, { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // Firebase auth import

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Please check your inbox.');
    } catch (err) {
      setError('Error: Could not send reset email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Forgot Password</h2>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {message && <div className="text-green-500 text-center mb-4">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button 
          type="submit" 
          className={`w-full py-2 rounded-lg mt-4 text-white ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`} 
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <span className="text-gray-600">Remember your password? </span>
        <a href="/signin" className="text-blue-500 hover:underline">Sign In</a>
      </div>
    </div>
  );
};

export default ForgotPassword;
