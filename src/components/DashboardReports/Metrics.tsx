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

interface MetricMapping {
  label: string;
  key: keyof Metrics;
  isNested?: boolean;
  format?: (value: any) => string;
  graph?: string;
}

const metricMappings: MetricMapping[] = [
  { label: "Active Users", key: "active_users", isNested: true },
  {
    label: "Questions Answered",
    key: "questions_answered",
    format: (value: number) => value.toLocaleString(),
  },
  {
    label: "Av. Session Length",
    key: "average_session_length_seconds",
    format: (value: number) => {
      const minutes = Math.floor(value / 60);
      const seconds = value % 60;
      return `${minutes}m ${seconds}s`;
    },
  },
  {
    label: "Starting Knowledge",
    key: "starting_knowledge_percentage",
    format: (value: number) => `${value}%`,
    graph: "/Graph.png",
  },
  {
    label: "Current Knowledge",
    key: "current_knowledge_percentage",
    format: (value: number) => `${value}%`,
    graph: "/Graph.png",
  },
];

const Metrics = (props: Props) => {
  const metrics = data[0]?.metrics;

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
          <div
            key={metric.key}
            className="rounded-[20px] p-6 shadow-xl flex flex-col justify-between"
          >
            <p className="text-[#4d4d4d]">{metric.label}</p>

            {metric.isNested && typeof rawValue === "object" ? (
              <h1 className="font-bold py-6 text-2xl">
                <span>{rawValue.current}</span>/
                <span className="text-[#808080]">{rawValue.total}</span>
              </h1>
            ) : (
              <h1 className="font-bold py-6 text-2xl">{value}</h1>
            )}
            {metric.graph && (
              <img src={metric.graph} alt="Graph" className="w-full" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Metrics;
