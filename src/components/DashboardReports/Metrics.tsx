import React from "react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import {
  Metrics as MetricsType,
  MetricMapping,
  MetricsProps,
} from "../../types/types";

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
  {
    label: "Knowledge Gain",
    key: "knowledge_gain",
    format: (value: number) => `${value >= 0 ? "+" : ""}${value}%`,
    graph: "/Graph.png",
  },
];

const Metrics = ({ metrics }: MetricsProps) => {
  const knowledgeGain =
    metrics.current_knowledge_percentage -
    metrics.starting_knowledge_percentage;

  return (
    <div className="bg-white grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
      {metricMappings.map((metric) => {
        let rawValue;

        if (metric.key === "knowledge_gain") {
          rawValue = knowledgeGain;
        } else if (metric.isNested) {
          rawValue = metrics[metric.key as "active_users"];
        } else {
          rawValue = metrics[metric.key as keyof MetricsType];
        }

        const value = metric.format
          ? metric.format(rawValue)
          : (rawValue as string | number);

        return (
          <div
            key={metric.key}
            className="rounded-[20px] p-4 shadow-[0_2px_20px_rgba(0,0,0,0.08)] flex flex-col justify-start gap-4 h-[180px] bg-white"
          >
            <p className="text-[#4d4d4d] flex items-center">
              {metric.label}
              {metric.key === "starting_knowledge_percentage" && (
                <Image
                  data-tooltip-id="info"
                  data-tooltip-content={
                    "Starting knowledge is when the user first started using the app."
                  }
                  src="/icons/info.svg"
                  alt="Info"
                  width={14}
                  height={14}
                  className="ml-2"
                />
              )}
            </p>
            <Tooltip id="info" place="top" />

            {metric.isNested && typeof rawValue === "object" ? (
              <h1 className="font-bold text-3xl">
                <span>{rawValue.current}</span>
                <span className="text-[#808080]">/{rawValue.total}</span>
              </h1>
            ) : (
              <h1 className="font-bold text-3xl">{value}</h1>
            )}

            {metric.graph && (
              <div className="relative h-[60px] w-full">
                <Image
                  src={metric.graph}
                  alt="Graph"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Metrics;
