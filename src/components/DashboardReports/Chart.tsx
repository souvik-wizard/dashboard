import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import type { ChartDataProps } from "@/types/types";

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

const ActivityChart = (props: ChartDataProps) => {
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
              data={props.data}
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
