import React from "react";
import Button from "../../component/Button";
import { Outlet, useNavigate } from "react-router-dom";

function Home({ children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("Button Clicked!");
    navigate("/user/account");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        This is your Home component. You can customize it with relevant content,
        styles, and layout to match the theme of your project. Tailwind CSS
        helps in making the design responsive and visually appealing.
      </p>
      <Button children={"Login"} onClick={handleClick} />
      <Outlet children /> {/* Renders nested routes */}
    </div>
  );
}

export default Home;
