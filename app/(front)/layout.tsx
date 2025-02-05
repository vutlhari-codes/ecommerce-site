import NavBar from "@/components/Frontend/Navbar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      <div className="mt-[100px]">{children}</div>
    </div>
  );
}
