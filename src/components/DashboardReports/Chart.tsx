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
    {
      month: "Jan",
      value: 100,
    },
    {
      month: "Feb",
      value: 150,
    },
    {
      month: "Mar",
      value: 200,
    },
    {
      month: "Apr",
      value: 250,
    },
    {
      month: "May",
      value: 300,
    },
    {
      month: "Jun",
      value: 350,
    },
    {
      month: "Jul",
      value: 400,
    },
    {
      month: "Aug",
      value: 300,
    },
    {
      month: "Sep",
      value: 500,
    },
    {
      month: "Oct",
      value: 550,
    },
    {
      month: "Nov",
      value: 600,
    },
    {
      month: "Dec",
      value: 650,
    },
  ];

  return (
    <div className="p-4 rounded-[20px] bg-white shadow-xl  w-full">
      <div className="flex items-center justify-between border-b border-b-[#E4E5E7]  font-medium py-2">
        <h1 className="text-[#4d4d4d]">Activity</h1>
        <select name="sorting" id="activity">
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 10, bottom: 30 }}
            barSize={15}
          >
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="month"
              scale="point"
              padding={{ left: 10, right: 10 }}
              tickMargin={20}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={20} />
            <Bar
              dataKey="value"
              fill="url(#blueGradient)"
              background={<CustomBackground radius={10} />}
              radius={10}
            />
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1B59F8" stopOpacity={0.6} />
                <stop offset="80%" stopColor="#1B59F8" stopOpacity={1} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
