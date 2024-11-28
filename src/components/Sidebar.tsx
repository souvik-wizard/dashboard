import React, { useState } from "react";
import Image from "next/image";
import { useScreenSize } from "../hooks/useScreenSize";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isSmallScreen = useScreenSize();
  // console.log(isSmallScreen);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    { id: 1, label: "Reports", icon: "/icons/Reports.svg", isActive: true },
    { id: 2, label: "Library", icon: "/icons/Library.svg", isActive: false },
    { id: 3, label: "People", icon: "/icons/People.svg", isActive: false },
    { id: 4, label: "Activity", icon: "/icons/Activity.svg", isActive: false },
  ];

  const bottomMenuItems = [
    { id: 5, label: "Get Started", icon: "/icons/Bulb.svg", isActive: false },
    { id: 6, label: "Settings", icon: "/icons/Settings.svg", isActive: false },
  ];

  return (
    <div
      className={`${
        isSmallScreen ? (isExpanded ? "w-64" : "w-20") : "w-64"
      } h-screen bg-white text-gray-800 p-5 pt-8 shadow-xl rounded-[20px] transition-all duration-300 relative`}
    >
      {isSmallScreen && (
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-10 bg-white rounded-full p-1.5 shadow-lg"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <div className="w-4 h-4 border-2 border-gray-600 rounded-full" />
        </button>
      )}
      <div className="flex gap-x-4 items-center justify-center">
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center text-sm gap-3.5 p-2 rounded-[10px] cursor-pointer ${
              item.isActive
                ? "bg-[#E9EFFF] text-blue-600 font-medium"
                : "hover:bg-[#E9EFFF] text-[#4d4d4d]"
            }`}
            role="button"
            tabIndex={0}
            aria-label={item.label}
            aria-current={item.isActive ? "page" : undefined}
          >
            <div className={item.isActive ? "text-blue-600" : "text-[#4d4d4d]"}>
              <Image src={item.icon} alt={item.label} width={20} height={20} />
            </div>
            {(!isSmallScreen || isExpanded) && (
              <h2 className="whitespace-pre">{item.label}</h2>
            )}
          </div>
        ))}

        <div className="mt-4 pt-4 flex flex-col gap-4">
          <h2 className="whitespace-pre font-medium p-2 text-[#4d4d4d]/70">
            {(!isSmallScreen || isExpanded) && "Support"}
          </h2>

          {bottomMenuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center text-sm gap-3.5 p-2 rounded-[10px] cursor-pointer ${
                item.isActive
                  ? "bg-[#E9EFFF] text-blue-600 font-medium"
                  : "hover:bg-[#E9EFFF] text-[#4d4d4d]"
              }`}
              role="button"
              tabIndex={0}
              aria-label={item.label}
              aria-current={item.isActive ? "page" : undefined}
            >
              <div
                className={item.isActive ? "text-blue-600" : "text-[#4d4d4d]"}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
              </div>
              {(!isSmallScreen || isExpanded) && (
                <h2 className="whitespace-pre">{item.label}</h2>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 absolute bottom-0 py-4 bg-inherit">
        <div className="flex flex-col items-start gap-2 p-2 rounded-md">
          <Image
            src="/Photo.png"
            alt="User Profile"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          {(!isSmallScreen || isExpanded) && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Sam Wheeler</span>
              <span className="text-xs text-gray-600">
                samwheeler@example.com
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
