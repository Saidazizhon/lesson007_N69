import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
            alt="Twitter Logo"
            className="w-12 h-12 mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Log in to Twitter</h1>
        <input
          type="text"
          placeholder="Phone number, email address"
          className="block w-full p-3 border border-gray-300 rounded mt-4 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-3 border border-gray-300 rounded mt-4 focus:ring-blue-500 focus:border-blue-500"
        />
        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-bold">
          Log in
        </button>
        <div className="flex justify-between mt-4 text-sm text-blue-500">
          <a href="#" className="hover:underline">Forgot password?</a>
          <a href="#" className="hover:underline">Sign up to Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
