import React from "react";
import Image from "next/image";
import ActivityChart from "./DashboardReports/Chart";
import Metrics from "./DashboardReports/Metrics";

// type Props = {};

const Dashboard = () => {
  const downloadReportHandler = () => {};

  return (
    <div className="w-full px-8">
      <div className="flex justify-between py-8 border-b">
        <h1 className="text-2xl font-bold ">Reports</h1>
        <button
          onClick={downloadReportHandler}
          className="flex justify-center items-center gap-1 font-semibold text-[#4d4d4d]"
        >
          <Image
            src="/icons/download.svg"
            alt="Download"
            width={20}
            height={20}
          />
          Download
        </button>
      </div>
      <div className="flex justify-between items-center py-4 gap-8">
        <Metrics />
        <ActivityChart />
      </div>
    </div>
  );
};

export default Dashboard;
