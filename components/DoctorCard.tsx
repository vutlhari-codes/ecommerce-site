import { Stethoscope, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../assets/doc1.jpg";

export default function DoctorCard({ isInPerson = false}: { isInPerson?: boolean }) {
  const timeStamps = [
    {
      time: "8:30",
      period: "AM",
    },
    {
      time: "9:30",
      period: "AM",
    },
    {
      time: "11:00",
      period: "AM",
    },
    {
      time: "1:30",
      period: "PM",
    },
    {
      time: "3:45",
      period: "PM",
    },
    {
      time: "4:15",
      period: "PM",
    },
  ];

  return (
    <div className="rounded-lg border-gray-200 bg-white inline-flex flex-col py-8 px-6 hover:shadow-md hover:scale-105 duration-500 ">
      <Link href={"/doctors/slug"} className="mb-6">
        <h2 className="font-bold uppercase text-2xl tracking-widest">
          Vijal Patel
        </h2>
        {isInPerson && (
          <p className="py-3">5 Watterbessie Ave, Richards Bay, 2555</p>
        )}
        <div className="flex items-center gap-4 py-4">
          <div className="relative">
            <Image
              src={img}
              width={200}
              height={300}
              alt={"doctor profile pic"}
              className="w-24 h-24 rounded-full object-cover"
            />
            {!isInPerson && (
              <p className="absolute bottom-[-5] right-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 text-blue-700 hover:bg-blue-600 hover:text-blue-200 transition duration-1000 ">
                <Video className="w-5 h-5" />
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Family Medicine</span>
            </p>
            <p className="bg-green-200 py-3 px-6 uppercase ">Available Today</p>
          </div>
        </div>
      </Link>
      <div className="pt-3 border-t-4 border-gray-400/20">
        <h3 className="flex gap-4 justify-between items-center">
          <span className="text-gray-600">Tue, Mar 12</span>{" "}
          <span className="font-bold">$137 </span>
        </h3>
        <div className="py-3 grid grid-cols-3 gap-4 ">
          {timeStamps.slice(0, 4).map((item, index) => {
            return (
              <Link
                key={index}
                href="#"
                className="bg-blue-600 text-slate-50 py-2 px-3 rounded-md border-2 hover:border-blue-600 flex items-center justify-center hover:text-blue-600 font-semibold hover:bg-slate-50 transition-all duration-1000"
              >
                {" "}
                {item.time}{item.period}
              </Link>
            );
          })}
          <Link
            href="/doctors/slug"
            className="border-2 border-blue-600 flex items-center justify-center text-blue-600 font-semibold rounded-md hover:text-slate-50 hover:bg-blue-600 hover:border-slate-50 transition-all duration-1000"
          >
            More...
          </Link>
        </div>
      </div>
    </div>
  );
}
