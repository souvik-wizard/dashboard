import React from "react";

type Props = {};

interface Metrics {
  active_users: {
    current: number;
    total: number;
  };
  questions_answered: number;
  average_session_length_seconds: number;
  starting_knowledge_percentage: number;
  current_knowledge_percentage: number;
}

const data: { metrics: Metrics }[] = [
  {
    metrics: {
      active_users: {
        current: 27,
        total: 80,
      },
      questions_answered: 3298,
      average_session_length_seconds: 154,
      starting_knowledge_percentage: 64,
      current_knowledge_percentage: 86,
    },
  },
];

// Define the structure for metric mappings
interface MetricMapping {
  label: string;
  key: keyof Metrics;
  isNested?: boolean;
  format?: (value: any) => string;
}

// Define the labels and keys dynamically
const metricMappings: MetricMapping[] = [
  { label: "Active Users", key: "active_users", isNested: true },
  { label: "Questions Answered", key: "questions_answered" },
  {
    label: "Avg Session Length",
    key: "average_session_length_seconds",
    format: (value: number) => {
      const minutes = Math.floor(value / 60);
      const seconds = value % 60;
      return `${minutes}m ${seconds}s`;
    },
  },
  { label: "Starting Knowledge (%)", key: "starting_knowledge_percentage" },
  { label: "Current Knowledge (%)", key: "current_knowledge_percentage" },
];

const Metrics = (props: Props) => {
  const metrics = data[0]?.metrics;

  // Handle the case where metrics are undefined
  if (!metrics) return null;
  return (
    <div className="bg-white grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
      {metricMappings.map((metric) => {
        const rawValue = metric.isNested
          ? metrics[metric.key as "active_users"]
          : metrics[metric.key];

        const value = metric.format
          ? metric.format(rawValue)
          : (rawValue as string | number);

        return (
          <div key={metric.key} className="rounded-[20px] p-6 shadow-xl">
            <p className="text-[#4d4d4d] text-sm">{metric.label}</p>

            {metric.isNested && typeof rawValue === "object" ? (
              <h1 className="font-bold py-6 text-xl">
                <span>{rawValue.current}</span>/
                <span className="text-[#808080]">{rawValue.total}</span>
              </h1>
            ) : (
              <h1 className="font-bold py-6 text-xl">{value}</h1>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Metrics;
