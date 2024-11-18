import React, { useState } from "react";
import Input from "../../component/Input";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add login logic here
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 lg:p-12 sm:rounded-lg sm:shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Welcome Back!
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your credentials to access your account.
        </p>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          label="Email"
          required
        />
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          label="Password"
          required
        />
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-500 font-semibold hover:underline"
          >
            Register now
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
