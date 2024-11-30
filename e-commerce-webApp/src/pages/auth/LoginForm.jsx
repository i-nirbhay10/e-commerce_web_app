import React, { useState, useEffect } from "react";
import Input from "../../component/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logdinuser } from "../../store/SliceReduser";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state);

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    dispatch(logdinuser(formdata));
  };

  const hendelInputchange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log(isAuthenticated);
  //     console.log("User is authenticated:", isAuthenticated);
  //     navigate("/user/home");
  //   }
  // }, [isAuthenticated, navigate]);

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
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/auth/register"
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
