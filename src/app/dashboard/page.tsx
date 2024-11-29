"use client";
import Dashboard from "@/components/Reports";
import Sidebar from "@/components/Sidebar";
import React from "react";

const MainDashboard = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default MainDashboard;
