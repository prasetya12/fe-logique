import React from "react";
export default function Input({ placeholder, value, onChange, onKeyDown }) {
  return (
    <>
      <input
        className="h-12 rounded-full text-center text-black"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
}
