import React, { useState } from "react";
import Input from "../../component/Input";
import { createUser } from "../../store/SliceReduser";
import { useDispatch } from "react-redux";

function RegisterForm() {
  const dispatch = useDispatch();

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formdata);

    const response = await dispatch(createUser(formdata));
    if (response) {
      setformdata({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
    console.log("response.data", response.payload);
  };

  const hendelInputchange = (e) => {
    console.log(e.target.name);

    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
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
        name="name"
        value={formdata.name}
        onChange={hendelInputchange}
        placeholder="Enter your name"
        label="User Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={formdata.email}
        onChange={hendelInputchange}
        placeholder="Enter your email"
        label="Email"
        required
      />
      <Input
        type="password"
        name="password"
        value={formdata.password}
        onChange={hendelInputchange}
        placeholder="Enter your password"
        label="Password"
        required
      />
      <Input
        type="password"
        name="confirmpassword"
        value={formdata.confirmpassword}
        onChange={hendelInputchange}
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
