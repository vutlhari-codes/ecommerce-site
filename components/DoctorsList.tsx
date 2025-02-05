import React from "react";
import Heading from "./Heading";
import Toggle from "./Toggle";
import Link from "next/link";
import DoctorCard from "./DoctorCard";
import { Map } from "lucide-react";
import DoctorCarousel from "./DoctorCarousel";

export default function DoctorsList({
  title = "Telehealth Visit",
  isInPerson,
  className = "bg-green-100 py-8 lg:py-24",
}: {
  title?: string;
  isInPerson?: boolean;
  className?: string;
}) {

    const doctors = [
        {name: 'Nqobile Khumalo'},
        {name: 'Tshepiso Maoto'},
        {name: 'Nicole Bester'},
        {name: 'Zolani Gwede'},
        {name: 'Sonia Esterbaan'},
        {name: 'Takesure Mathembula'},
    ]
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto">
        <Heading title={title} />
        <div className="py-4 flex items-center justify-between">
          {isInPerson ? (
            <Link
              href=""
              className="text-sm flex items-center text-blue-700 font-semibold"
            >
              <Map className="mr-2 flex-shrink-0 w-4 h-4" />
              <span>Map View</span>
            </Link>
          ) : (
            <Toggle text={"Within 2 hours"} />
          )}
          <Link
            className="py-3 px-6 border border-blue-600 bg-slate-50"
            href="#"
          >
            See All
          </Link>
        </div>
        <div className="py-6">
          <DoctorCarousel doctors={doctors} isInPerson={isInPerson}/>
        </div>
      </div>
    </div>
  );
}
