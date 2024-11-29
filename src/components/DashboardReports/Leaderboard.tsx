"use client";

import React from "react";
import Image from "next/image";
import type {
  LeaderboardProps,
  UserLeaderboardEntry,
  GroupLeaderboardEntry,
  BaseLeaderboardEntry,
} from "../../types/types";

export function Leaderboard<T extends BaseLeaderboardEntry>({
  title,
  data,
  type,
}: LeaderboardProps<T>) {
  const renderEntry = (entry: T, index: number) => {
    const isUser = type === "user";

    const userEntry = entry as unknown as UserLeaderboardEntry;
    const groupEntry = entry as unknown as GroupLeaderboardEntry;

    const name = isUser ? userEntry.name : groupEntry.group_name;
    const points = isUser
      ? `${userEntry.points} Points`
      : `${groupEntry.points_per_user} Points / User`;
    const trend =
      entry.accuracy_percentage > entry.previous_accuracy_percentage;

    return (
      <div key={index} className="flex items-center justify-between py-4 ">
        <div className="flex items-center gap-4">
          {isUser && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={`${userEntry.image}.png`}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm font-semibold text-[#808080]">
              {points} - {entry.accuracy_percentage}% Correct
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">{index + 1}</span>
          {trend ? (
            <Image src="/icons/Up.svg" alt="Arrow Up" width={12} height={12} />
          ) : (
            <Image
              src="/icons/Down.svg"
              alt="Arrow Down"
              width={12}
              height={12}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-[20px] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] overflow-hidden w-full ">
      <div className="px-6 py-4  ">
        <h2 className="text-xl font-semibold text-[#808080]">{title}</h2>
      </div>
      <div className="px-6 py-4 ">
        {data.map((entry, index) => renderEntry(entry, index))}
      </div>
    </div>
  );
}
