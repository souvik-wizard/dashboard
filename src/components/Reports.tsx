import ActivityChart from "./DashboardReports/Chart";
import { Leaderboard } from "./DashboardReports/Leaderboard";
import Metrics from "./DashboardReports/Metrics";
import { MultiSelectionDropdown } from "./DashboardReports/MultiSelectionDropdown";
import { SingleSelectionDropdown } from "./DashboardReports/SingleSelectionDropdown";
import Topic from "./DashboardReports/Topics";
import Navbar from "./Navbar";
import data from "../data/task-data.json";

const SingleSelectionDropdownData = [
  {
    title: "Timeframe",
    options: [
      { id: "last-7-days", label: "Last 7 Days" },
      { id: "this-month", label: "This Month" },
      { id: "this-year", label: "This Year" },
      { id: "custom", label: "Custom" },
      { id: "all-time", label: "All-time" },
    ],
  },
  {
    title: "Topics",
    options: [
      { id: "all", label: "All" },
      { id: "other", label: "Other" },
    ],
  },
];

const MultiSelectionDropdownData = [
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

const Dashboard = () => {
  const { metrics, activity, topics, groups_leaderboard, user_leaderboard } =
    data;

  return (
    <div className="w-full px-4 lg:px-12 overflow-auto overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-between w-full py-4 gap-4">
        <SingleSelectionDropdown
          options={SingleSelectionDropdownData[0].options}
          title={SingleSelectionDropdownData[0].title}
        />
        <MultiSelectionDropdown sections={MultiSelectionDropdownData} />
        <SingleSelectionDropdown
          options={SingleSelectionDropdownData[1].options}
          title={SingleSelectionDropdownData[1].title}
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between w-full py-4 gap-8">
        <Metrics metrics={metrics} />
        <ActivityChart data={activity.monthly} />
      </div>

      <div className="flex flex-col lg:flex-row justify-between w-full py-4 gap-8">
        <Topic
          topics={topics.weakest}
          colorScheme="red"
          title="Weakest Topics"
        />
        <Topic
          topics={topics.strongest}
          colorScheme="green"
          title="Strongest Topics"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full py-4 gap-8">
        <Leaderboard
          title="User Leaderboard"
          data={user_leaderboard}
          type="user"
        />
        <Leaderboard
          title="Group Leaderboard"
          data={groups_leaderboard}
          type="group"
        />
      </div>
    </div>
  );
};

export default Dashboard;
