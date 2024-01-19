import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitButton = () => {
    console.log(searchValue);
  };

  return (
    <>
      <div className="flex items-center w-full flex-col justify-center h-screen	bg-gradient-to-b from-primary to-secondary text-white pb-8">
        <div className="grow flex items-center">
          <img src="/assets/logo/ngmusic_logo.svg" />
        </div>
        <div className="w-full px-4 gap-5 flex flex-col">
          <Input
            value={searchValue}
            onChange={onChangeInput}
            placeholder={"Artist / Album / Title"}
          />
          <Button
            label={"Search"}
            bgColor={"rgba(255, 255, 255, 0.2)"}
            onClick={onSubmitButton}
          />
        </div>
      </div>
    </>
  );
}
