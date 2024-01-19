import React from "react";
export default function Loading() {
  return (
    <>
      <div className="flex flex-row items-center gap-3">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 border-solid border-primary"></div>
        <div className="text-primary">Loading</div>
      </div>
    </>
  );
}
