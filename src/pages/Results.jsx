import React from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import { useSelector, useDispatch } from "react-redux";

export default function Results() {
  const { data } = useSelector((state) => state.music);

  console.log(data);

  return (
    <>
      <div className="bg-[#f8fafc] pb-12">
        <Header />
        <div className="mt-10">
          <div className="flex justify-center items-center gap-3">
            <div>Search result for :</div>
            <div className="text-primary font-semibold text-lg">Json Mraz</div>
          </div>
          <div className="px-4 mt-10 gap-5 flex flex-col">
            {data.map(() => (
              <Card />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
