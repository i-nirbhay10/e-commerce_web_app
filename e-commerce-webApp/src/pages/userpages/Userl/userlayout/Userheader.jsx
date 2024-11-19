import React from "react";

function Userheader() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">E-ShopWilla</a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Search
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <a href="/cart" className="text-gray-600 hover:text-blue-500">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <a href="/login" className="text-gray-600 hover:text-blue-500">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="flex lg:hidden px-4 py-2">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </header>
  );
}

export default Userheader;
