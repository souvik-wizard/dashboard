import Image from "next/image";
import ActivityChart from "./DashboardReports/Chart";
import { Leaderboard } from "./DashboardReports/Leaderboard";
import Metrics from "./DashboardReports/Metrics";
import { MultiSelectionDropdown } from "./DashboardReports/MultiSelectionDropdown";
import { SingleSelectionDropdown } from "./DashboardReports/SingleSelectionDropdown";
import Topic from "./DashboardReports/Topics";

// type Props = {};

const weakestTopics = [
  {
    name: "Food Safety",
    image: "https://placehold.co/49x32",
    correct_percentage: 74,
  },
  {
    name: "Compliance Basics Procedures",
    image: "https://placehold.co/49x32",
    correct_percentage: 52,
  },
  {
    name: "Company Networking",
    image: "https://placehold.co/49x32",
    correct_percentage: 36,
  },
];

const strongestTopics = [
  {
    name: "Covid Protocols",
    image: "https://placehold.co/49x32",
    correct_percentage: 95,
  },
  {
    name: "Cyber Security Basics",
    image: "https://placehold.co/49x32",
    correct_percentage: 92,
  },
  {
    name: "Social Media Policies",
    image: "https://placehold.co/49x32",
    correct_percentage: 89,
  },
];

const userLeaderboard = [
  {
    name: "Jesse Thomas",
    image: "https://placehold.co/64",
    points: 637,
    accuracy_percentage: 98,
    previous_accuracy_percentage: 92,
  },
  {
    name: "Thisal Mathiyazhagan",
    image: "https://placehold.co/64",
    points: 637,
    accuracy_percentage: 89,
    previous_accuracy_percentage: 94,
  },
  {
    name: "Helen Chuang",
    image: "https://placehold.co/64",
    points: 637,
    accuracy_percentage: 88,
    previous_accuracy_percentage: 83,
  },
  {
    name: "Lura Silverman",
    image: "https://placehold.co/64",
    points: 637,
    accuracy_percentage: 86,
    previous_accuracy_percentage: 80,
  },
];

const groupLeaderboard = [
  {
    group_name: "Houston Facility",
    points_per_user: 52,
    accuracy_percentage: 97,
    previous_accuracy_percentage: 92,
  },
  {
    group_name: "Test Group",
    points_per_user: 52,
    accuracy_percentage: 95,
    previous_accuracy_percentage: 93,
  },
  {
    group_name: "Sales Leadership",
    points_per_user: 52,
    accuracy_percentage: 87,
    previous_accuracy_percentage: 82,
  },
  {
    group_name: "Northeast Region",
    points_per_user: 52,
    accuracy_percentage: 86,
    previous_accuracy_percentage: 80,
  },
];
const timeframeOptions = [
  { id: "last-7-days", label: "Last 7 Days" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "custom", label: "Custom" },
  { id: "all-time", label: "All-time" },
];

const sections = [
  {
    title: "GROUPS",
    options: [
      { id: "all-users", label: "All Users", count: 400 },
      { id: "managers", label: "Managers", count: 14 },
      { id: "trainers", label: "Trainers", count: 4 },
    ],
  },
  {
    title: "USERS",
    options: [
      { id: "adrian-lu", label: "Adrian Lu" },
      { id: "evelyn-hamilton", label: "Evelyn Hamilton" },
    ],
  },
];

const topics = [
  { id: "all", label: "All" },
  { id: "other", label: "Other" },
];

const Dashboard = () => {
  const downloadReportHandler = () => {};

  return (
    <div className="w-full px-4 lg:px-12 overflow-auto overflow-x-hidden">
      <div className="flex justify-between items-center py-8 px-4 md:px-0 border-b">
        <h1 className="text-lg lg:text-2xl font-bold ">Reports</h1>
        <button
          onClick={downloadReportHandler}
          className="flex justify-center items-center gap-1 font-semibold text-[#4d4d4d] "
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
      <div className="flex flex-col lg:flex-row justify-between w-full py-4 gap-4">
        <SingleSelectionDropdown options={timeframeOptions} title="Timeframe" />
        <MultiSelectionDropdown sections={sections} />
        <SingleSelectionDropdown options={topics} title="Topics" />
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between w-full py-4 gap-8">
        <Metrics />

        <ActivityChart />
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full py-4 gap-8">
        <Topic
          topics={weakestTopics}
          colorScheme="red"
          title="Weakest Topics"
        />
        <Topic
          topics={strongestTopics}
          colorScheme="green"
          title=" Strongest Topics"
        />
      </div>
      <div
        className="flex flex-col lg:flex-row justify-between w-full py-4 gap-8
      "
      >
        <Leaderboard
          title="User Leaderboard"
          data={userLeaderboard}
          type="user"
        />
        <Leaderboard
          title="Group Leaderboard"
          data={groupLeaderboard}
          type="group"
        />
      </div>
    </div>
  );
};

export default Dashboard;
