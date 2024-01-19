import React from "react";
import { Link } from "react-router-dom";
export default function Button({ label, bgColor, onClick }) {
  console.log(bgColor);
  return (
    <>
      <div
        className="py-3 flex items-center justify-center px-3 rounded-full cursor-pointer"
        style={{
          background: bgColor,
        }}
        onClick={onClick}
      >
        {label}
      </div>
    </>
  );
}
