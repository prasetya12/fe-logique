import React from "react";
import { Link } from "react-router-dom";
export default function Button({ label, bgColor, onClick }) {
  return (
    <>
      <div
        className="py-3 flex items-center justify-center px-3 rounded-full cursor-pointer"
        style={{ backgroundColor: bgColor }}
        onClick={onClick}
      >
        {label}
      </div>
    </>
  );
}
