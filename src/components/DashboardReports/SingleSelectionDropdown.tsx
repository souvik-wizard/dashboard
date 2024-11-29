"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  SingleSelectionDropdownOption,
  SingleSelectionDropdownProps,
} from "../../types/types";

export function SingleSelectionDropdown({
  title,
  options,
  defaultSelected = "all-time",
  onSelect,
}: SingleSelectionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    options.find((opt) => opt.id === defaultSelected) || options[0]
  );

  const handleSelect = (option: SingleSelectionDropdownOption) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <div className="relative w-full ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={` ${
          isOpen ? "rounded-t-[20px] " : "rounded-[20px]"
        } flex text-lg font-medium text-[#808080] items-center justify-between w-full px-6 py-4 text-left bg-white  shadow-[0_2px_20px_rgba(0,0,0,0.08)]  focus:outline-none`}
      >
        <p>
          {title}:{" "}
          <span className="text-black font-semibold "> {selected.label}</span>
        </p>
        <Image
          src="/icons/Dropdown.svg"
          alt="Chevron Down"
          width={14}
          height={14}
          className={`transition-transform duration-200 ${
            isOpen ? "" : "transform rotate-180"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full bg-white rounded-b-2xl shadow-lg"
          >
            <div className="p-4 border-t">
              {options.map((option, key) => (
                <button
                  key={key}
                  onClick={() => handleSelect(option)}
                  className={`w-full px-6 py-2 my-1 text-left hover:bg-gray-50 hover:rounded-2xl focus:outline-none focus:bg-gray-50 ${
                    selected.id === option.id
                      ? "bg-blue-50 rounded-2xl font-semibold"
                      : ""
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
