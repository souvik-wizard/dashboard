"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { MultiSelectionDropdownOption } from "../../types/types";
import { MultiSelectionDropdownProps } from "../../types/types";
import Image from "next/image";

export function MultiSelectionDropdown({
  sections,
  onSelectionChange,
}: MultiSelectionDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (optionId: string) => {
    setSelectedOptions((prev) => {
      const newSelections = prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId];
      return newSelections;
    });
  };

  const handleRemoveSelection = (optionId: string) => {
    setSelectedOptions((prev) => prev.filter((id) => id !== optionId));
  };

  const clearAll = () => {
    setSelectedOptions([]);
  };

  const getOptionById = (
    id: string
  ): MultiSelectionDropdownOption | undefined => {
    return sections
      .flatMap((section) => section.options)
      .find((option) => option.id === id);
  };

  const filteredSections = sections.map((section) => ({
    ...section,
    options: section.options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  useEffect(() => {
    onSelectionChange?.(selectedOptions);
  }, [selectedOptions, onSelectionChange]);

  return (
    <div className="relative w-full ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "rounded-t-[20px]" : "rounded-[20px]"
        } flex items-center justify-between w-full px-6 py-4 text-left bg-white     shadow-[0_2px_20px_rgba(0,0,0,0.08)] `}
      >
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between gap-2 text-[#808080] text-lg font-medium ">
            <p className="  font-semibold ">
              People:{" "}
              <span className="text-black">
                {selectedOptions.length > 0
                  ? "Multiple Selected"
                  : "None Selected"}
              </span>
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
          </div>
          {selectedOptions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedOptions.map((id) => {
                const option = getOptionById(id);
                if (!option) return null;
                return (
                  <span
                    key={id}
                    className="inline-flex items-center px-3 py-1 bg-[#F0F0F0] rounded-full font-semibold"
                  >
                    {option.label}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveSelection(id);
                      }}
                      className="ml-2 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                );
              })}
            </div>
          )}
        </div>
        {selectedOptions.length > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              clearAll();
            }}
            className="ml-4 text-sm text-gray-500 hover:text-gray-700"
          >
            Clear
          </button>
        )}
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
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-b border-gray-200 focus:outline-none"
                />
              </div>

              <div className="mt-4 space-y-6">
                {filteredSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.options.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 hover:rounded-2xl cursor-pointer"
                        >
                          <div className="relative flex items-center justify-center w-5 h-5">
                            <input
                              type="radio"
                              checked={selectedOptions.includes(option.id)}
                              onChange={() => handleSelect(option.id)}
                              className="w-5 h-5 border-2 border-gray-300 rounded-full appearance-none checked:bg-blue-500 transition-colors duration-200"
                            />
                            {selectedOptions.includes(option.id) && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </div>
                            )}
                          </div>
                          <p className="flex-1 font-semibold">
                            {option.label}
                            <span className=" text-gray-400 ml-2">
                              {option?.count}
                            </span>
                          </p>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
