import Hero from "@/components/Frontend/Hero";
import DoctorsList from "@/components/UI/DoctorsList";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <DoctorsList />
      <DoctorsList title='In-Person Doctor Visit' isInPerson={true} className="bg-gray-50 py-8 lg:py-24"/>
    </div>
  );
}
