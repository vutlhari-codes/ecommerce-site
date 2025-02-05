import Image from "next/image";
import React from "react";
import img from "../../../../assets/doc1.jpg";
import DoctorDetails from "@/components/UI/DoctorDetails";

export default function page() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="bg-white max-w-4xl border-gray-200 mx-auto shadow-md rounded-lg">
        <div className="py-10 px-8">
          <div className="flex justify-between bg-blue-300">
            <div className="">
              <div className="flex flex-col">
                <h2 className="font-bold text-4xl uppercase">
                  Vijal Patel, PA-C
                </h2>
                <p className="text-gray-500 text-xs uppercase">Adult health</p>
              </div>
              <div className="py-3">
                <p>In-Person foctor Visit</p>
                <p>5 Waterbessie, Richards Bay, 2555</p>
              </div>
            </div>
            <Image
              src={img}
              width={200}
              height={300}
              alt={"doctor profile pic"}
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>
        <div>
          <DoctorDetails />
        </div>
      </div>

      <div className="fixed bottom-0 w-full shadow-2xl shadow-black py-8 px-6 rounded-md">
        <div className="flex justify-between max-w-4xl mx-auto">
          <div>
            <p className="font-bold text-blue-700 text-xl">$56</p>
            <p className="font-semibold">Tue, Mar 12 - 8:00 AM SAST</p>
          </div>
          <button className="py-3 px-6 bg-blue-700 text-white">Book</button>
        </div>
      </div>
    </div>
  );
}
