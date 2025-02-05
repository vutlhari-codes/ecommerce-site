"use client";
import React, { useState } from "react";

export default function DoctorDetails() {
  const [isActive, setIsActive] = useState("availability");
  return (
    <div className="">
      <div className="flex items-center justify-between  tracking-widest">
        <button
          onClick={() => setIsActive("details")}
          className={isActive === 'details'? "bg-blue-600 text-white py-4 px-8 w-full uppercase font-semibold border-b-4 border-white shadow-md": "bg-slate-100 text-slate-800 py-4 px-8 w-full uppercase font-semibold border-b-4 border-white"}
        >
          Service Details
        </button>
        <button
          onClick={() => setIsActive("availability")}
          className={isActive === 'availability'? "bg-blue-600 text-white py-4 px-8 w-full uppercase font-semibold border-b-4 border-white shadow-md": "bg-slate-100 text-slate-800 py-4 px-8 w-full uppercase font-semibold border-b-4 border-white"}
        >
          Availability
        </button>
      </div>

      <div className="py-8 px-6">
        {isActive === "availability" ? (
          <div>Availability Component </div>
        ) : (
          <div>Service Details Component</div>
        )}
      </div>
    </div>
  );
}
