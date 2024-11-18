import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Outlet } from "react-router-dom";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen sm:bg-gray-100">
      {/* Left Side - Design Section */}
      <div className="hidden lg:flex flex-1 bg-blue-500 text-white flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-lg">
            {isLogin
              ? "Log in to access your account and explore amazing features."
              : "Join us and enjoy the benefits of our platform. Register now!"}
          </p>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 flex items-center justify-center sm:p-6 lg:p-12">
        <Outlet></Outlet>
        {/* <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            {isLogin
              ? "Enter your credentials to access your account."
              : "Fill in the details to join our community."}
          </p>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                onClick={toggleForm}
                className="text-blue-500 font-semibold cursor-pointer hover:underline"
              >
                {isLogin ? "Register now" : "Log in"}
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AuthPage;
