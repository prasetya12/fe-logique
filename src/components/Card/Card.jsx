import React from "react";
export default function Card() {
  return (
    <>
      <div className="drop-shadow-md bg-white rounded-lg p-3 flex w-full gap-3">
        <div className="w-4/12">
          <img
            className="w-full h-full"
            src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/89/77/46/897746b8-3d89-c551-4359-7aa440b67b69/mzi.clkeppje.jpg/100x100bb.jpg"
          />
        </div>
        <div className="w-8/12">
          <div className="font-semibold text-xs">Travie McCoy</div>
          <div className="font-semibold w-2/3">
            Rough Water (feat. Jason Mraz)
          </div>
          <div className="flex justify-between mt-10 w-full items-center">
            <div>
              <div className="bg-success font-semibold px-4 text-sm py-2 text-white rounded-full">
                Pop
              </div>
            </div>
            <div className="flex  gap-2">
              <img className="w-7" src="/assets/icons/dollar.svg" />
              <div className="font-semibold text-[#f5b014] text-lg">1.29</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
