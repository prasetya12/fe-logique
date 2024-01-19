import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div class="container-header">
        <div className="pb-5">
          <img className="cursor-pointer" src="/assets/icons/hamburger.svg" />
        </div>
        <img src="/assets/logo/ngmusic_logo_header.svg" />
        <div className="pb-5">
          <img className="cursor-pointer" src="/assets/icons/search.svg" />
        </div>
      </div>
    </>
  );
}
