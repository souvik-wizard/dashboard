import React from "react";
import Image from "next/image";

interface Topic {
  name: string;
  image: string;
  correct_percentage: number;
}

interface TopicProps {
  title: string;
  topics: Topic[];
  colorScheme: "red" | "green";
}

const ProgressBar: React.FC<{
  percentage: number;
  colorScheme: "red" | "green";
}> = ({ percentage, colorScheme }) => (
  <div
    className={`relative h-2 flex-1 ${
      colorScheme === "red" ? "bg-[#FEE1DF]" : "bg-[#D5FAEB]"
    } rounded-full overflow-hidden`}
  >
    <div
      className={`absolute h-full ${
        colorScheme === "red"
          ? "bg-gradient-to-r from-[#FFBF1A] to-[#FF4080]"
          : "bg-gradient-to-r from-[#7fdd53] to-[#2fea9b]"
      } rounded-full`}
      style={{ width: `${percentage}%` }}
    />
  </div>
);

const Topic: React.FC<TopicProps> = ({ title, topics, colorScheme }) => {
  return (
    <div className="bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] p-6 w-full">
      <h2 className="text-xl text-gray-600 font-medium mb-6">{title}</h2>
      <div className="space-y-6">
        {topics.map((topic) => (
          <div key={topic.name} className="flex items-center gap-4">
            <div className="shrink-0">
              <Image
                src={`${topic.image}.png`}
                alt={topic.name}
                width={49}
                height={32}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-medium mb-2">{topic.name}</h3>
              <div className="flex items-center gap-4">
                <ProgressBar
                  percentage={topic.correct_percentage}
                  colorScheme={colorScheme}
                />
                <div className="flex items-baseline gap-1 whitespace-nowrap font-semibold">
                  <span className="text-base font-medium text-[#4d4d4d]">
                    {topic.correct_percentage}%
                  </span>
                  <span className="text-sm text-[#b3b3b3]">Correct</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
