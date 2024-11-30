import React from "react";

function Input({
  type,
  id,
  value,
  onChange,
  placeholder,
  label,
  required,
  name,
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-600 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Input;
