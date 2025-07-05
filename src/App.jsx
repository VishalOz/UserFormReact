import React from 'react';

const App = () => {
  return (
    <div className="flex h-screen font-sans bg-gray-100">
      <div className="w-1/2 flex justify-center items-center bg-white shadow-xl">
        <div className="w-full max-w-md p-8 rounded-2xl border border-gray-200 shadow-md bg-white">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Create Account</h1>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center bg-gradient-to-tr from-gray-900 to-black text-white">
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Live Preview</h2>
          <p className="text-gray-300">Type on the left and see changes reflected here.</p>
          <div className="mt-8 border border-gray-700 rounded-xl p-6 bg-gray-800 shadow-xl">
            <p className="text-gray-400">User details will appear here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
