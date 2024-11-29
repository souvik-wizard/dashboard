import { div } from "framer-motion/client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const CustomBackground = (props: any) => {
  const { x, y, width, height, radius } = props;
  return (
    <rect
      x={x}
      y={y}
      rx={radius}
      ry={radius}
      width={width}
      height={height}
      fill="#F2F7FF"
    />
  );
};

const ActivityChart = () => {
  //   const [chartData, setChartData] = useState([]);

  //   // Fetch data from API
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch('https://example.com/api/data'); // Replace with your API endpoint
  //       const data = await response.json();
  //       // Format data for Recharts if necessary
  //       setChartData(data);
  //     };

  //     fetchData();
  //   }, []);
  const chartData = [
    { month: "JAN", value: 100 },
    { month: "FEB", value: 150 },
    { month: "MAR", value: 200 },
    { month: "APR", value: 250 },
    { month: "MAY", value: 300 },
    { month: "JUN", value: 350 },
    { month: "JUL", value: 400 },
    { month: "AUG", value: 300 },
    { month: "SEP", value: 500 },
    { month: "OCT", value: 550 },
    { month: "NOV", value: 600 },
    { month: "DEC", value: 650 },
  ];

  return (
    <div className="max-w-screen overflow-auto md:w-full shadow-[0_2px_20px_rgba(0,0,0,0.08)] rounded-[20px]">
      <div className="p-4 bg-white  md:w-full  w-[560px] overflow-x-auto">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h1 className="text-sm sm:text-lg font-medium text-[#4d4d4d]">
            Activity
          </h1>
          <select
            name="sorting"
            id="activity"
            className="text-sm sm:text-base focus:outline-none bg-transparent"
          >
            <option value="month">Month</option>
            <option value="week">Week</option>
            <option value="year">Year</option>
          </select>
        </div>

        <div className="w-full h-[260px] sm:h-[320px] mt-4">
          <ResponsiveContainer>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 10, bottom: 20 }}
              barSize={12}
            >
              <XAxis
                axisLine={false}
                tickLine={false}
                dataKey="month"
                scale="point"
                padding={{ left: 10, right: 10 }}
                tickMargin={8}
                tick={{ fontSize: "0.75rem", fill: "#4d4d4d" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={8}
                tick={{ fontSize: "0.75rem", fill: "#4d4d4d" }}
              />
              <Bar
                dataKey="value"
                fill="url(#blueGradient)"
                background={<CustomBackground radius={8} />}
                radius={8}
              />
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1B59F8" stopOpacity={0.6} />
                  <stop offset="80%" stopColor="#1B59F8" stopOpacity={0.8} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
