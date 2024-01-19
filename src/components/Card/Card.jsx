import React from "react";
export default function Card({ data }) {
  return (
    <>
      <div className="drop-shadow-md bg-white rounded-lg p-3 flex w-full gap-3">
        <div className="w-4/12">
          <img className="w-full h-full" src={data?.artworkUrl60} />
        </div>
        <div className="w-8/12">
          <div className="font-semibold text-xs">{data?.trackName}</div>
          <div className="font-semibold w-2/3">{data?.artistName}</div>
          <div className="flex justify-between mt-10 w-full items-center">
            <div>
              <div className="bg-success font-semibold px-4 text-sm py-2 text-white rounded-full">
                Pop
              </div>
            </div>
            <div className="flex  gap-2">
              <img className="w-7" src="/assets/icons/dollar.svg" />
              <div className="font-semibold text-[#f5b014] text-lg">
                {data?.collectionPrice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
