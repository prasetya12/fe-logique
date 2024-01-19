import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function ModalSearch({ onCloseModal }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmitButton = () => {
    navigate(`/results?search=${searchValue}`);
    onCloseModal();
  };

  const onHandleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("halo");
      // Call the function when the Enter key is pressed
      onSubmitButton();
    }
  };
  return (
    <>
      <div
        className="w-full h-screen bg-[#1C1C2DE6]/90 absolute z-20 overflow-y-hidden"
        style={{ width: "500px" }}
      >
        <div className="flex justify-end p-4  right-0">
          <div>
            <img
              className="w-5 cursor-pointer"
              src="/assets/icons/close.svg"
              onClick={() => onCloseModal}
            />
          </div>
        </div>
        <div className="flex w-full h-screen items-center justify-center text-white">
          <div className="w-full px-4 gap-5 flex flex-col">
            <Input
              value={searchValue}
              onChange={onChangeInput}
              onKeyDown={onHandleKeyDown}
              placeholder={"Artist / Album / Title"}
            />
            <Button
              label={"Search"}
              bgColor={"linear-gradient(153deg, #712bda, #a45deb 100%)"}
              onClick={onSubmitButton}
            />
          </div>
        </div>
      </div>
    </>
  );
}
