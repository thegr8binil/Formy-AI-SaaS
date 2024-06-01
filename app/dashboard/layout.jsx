"use client";
import { SignIn, SignedIn } from "@clerk/clerk-react";
import React from "react";
import SideNav from "./_components/SideNav";

function DashboardLayout({ children }) {
  return (
    <SignedIn>
     <div className="flex w-screen">
  <div className="hidden w-64 lg:flex"> 
    <SideNav />
  </div>
  <div className="flex-grow"> 
    {children}
  </div>
</div>
    </SignedIn>
  );
}

export default DashboardLayout;
