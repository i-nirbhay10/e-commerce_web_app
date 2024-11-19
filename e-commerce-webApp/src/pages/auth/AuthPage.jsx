import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Design Section */}
      <div className="hidden lg:flex flex-1 bg-blue-500 text-white flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-lg mb-4">
            {isLogin
              ? "Log in to access your account and explore amazing features."
              : "Join us and enjoy the benefits of our platform. Register now!"}
          </p>
          <button
            onClick={toggleForm}
            className="mt-4 bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
          >
            {isLogin ? "Switch to Register" : "Switch to Login"}
          </button>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 flex items-center justify-center sm:p-6 lg:p-12 bg-white">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
