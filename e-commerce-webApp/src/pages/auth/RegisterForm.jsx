import React, { useState } from "react";
import Input from "../../component/Input";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Add registration logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6  sm:rounded-lg sm:shadow-lg w-full max-w-md"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Create an Account
      </h2>
      <p className="text-center text-sm text-gray-500 mb-2">
        Enter your credentials to access your account.
      </p>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        label="User Name"
        required
      />
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
      <Input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        label="Confirm Password"
        required
      />
      <button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
      >
        Register
      </button>
      <p className="mt-4 text-center text-sm text-gray-500">
        Already have an account?
        <a
          href="/auth/login"
          className="text-blue-500 font-semibold hover:underline"
        >
          Log in
        </a>
      </p>
    </form>
  );
}

export default RegisterForm;
