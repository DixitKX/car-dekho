// src/components/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/signin'); // Redirect to sign-in page if not logged in
      }
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, [navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        navigate('/signin'); // Redirect to sign-in page after sign out
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
      {user ? (
        <>
          <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
          <div className="mb-4">
            <p>Welcome, {user.displayName || 'User'}!</p>
            <p>Email: {user.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full bg-red-500 text-white py-2 rounded-lg mt-4"
          >
            Sign Out
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
