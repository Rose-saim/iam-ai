import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SocialLogin() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Google login logic will be implemented here
    navigate('/dashboard');
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </button>
    </div>
  );
}