"use client";
import Dashboard from "@/components/Reports";
import Sidebar from "@/components/Sidebar";
import React from "react";

// type Props = {};

const MainDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default MainDashboard;
