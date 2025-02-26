"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const CustomSpan = ({
  values,
}: {
  values: {
    green: number;
    blue: number;
    red: number;
    details?: {
      title: string;
      value: string;
      loan: string;
      equity: string;
    };
    projectedValue?: boolean;
    loanComplete?: boolean;
    outstandingLoan?: boolean;
    propertySold?: boolean;
    propertyAdded?: boolean;
    equity?: boolean;
    investmentOpportunity?: boolean;
  };
}) => {
  const [hovered, setHovered] = useState(false);
  const [year, setyear] = useState(true);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [isAnimated, setIsAnimated] = useState(false);
  const spanRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  useEffect(() => {
    if (hovered && spanRef.current && dotRef.current) {
      const spanRect = spanRef.current.getBoundingClientRect();
      const dotRect = dotRef.current.getBoundingClientRect();
      const tooltipHeight = tooltipRef.current?.offsetHeight || 50;

      setTooltipPos({
        top: dotRect.top + window.scrollY - tooltipHeight - 5,
        left: dotRect.left + window.scrollX + dotRect.width / 2,
      });
    }
  }, [hovered]);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = (event: React.MouseEvent) => {
    if (tooltipRef.current?.contains(event.relatedTarget as Node)) {
      return;
    }
    setHovered(false);
  };

  const sortedColors = Object.entries(values)
    .filter(([key]) => ["green", "blue", "red"].includes(key))
    .sort((a, b) => Number(b[1]) - Number(a[1]));

  const activeOptions = [
    "projectedValue",
    "loanComplete",
    "outstandingLoan",
    "propertySold",
    "propertyAdded",
    "equity",
    "investmentOpportunity",
  ].filter((option) => values[option as keyof typeof values]);

  // Define color mapping for each option, matching your data colors
  const optionColors: Record<string, string> = {
    projectedValue: "bg-[#00E5AD]", // Green for Projected Value
    loanComplete: "bg-[#9966FF]", // Purple for Loan Complete
    outstandingLoan: "bg-[#F45050]", // Red for Outstanding Loan
    propertySold: "bg-[#FF9F40]", // Pink/Orange for Property Sold
    propertyAdded: "bg-[#00FF00]", // Lime Green for Property Added
    equity: "bg-[#598CFF]", // Blue for Equity
    investmentOpportunity: "bg-[#FFFF00]", // Yellow for Investment Opportunity
  };
  return (
    <>
      <div
        ref={spanRef}
        className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full bg-[#ECECF0] rounded-2xl h-[100px] relative">
          {activeOptions.length > 0 && (
            <div className="absolute left-1/2 -translate-x-1/2 top-[5px] z-20 flex flex-col gap-1">
              {activeOptions.map((option, index) => (
                <div
                  key={option}
                  ref={index === 0 ? dotRef : null}
                  className={`w-4 h-4 ${optionColors[option]} border-[3px] border-white rounded-full shadow-lg`}
                ></div>
              ))}
            </div>
          )}
        </div>
        {sortedColors.map(([color, value]) => (
          <div
            key={color}
            className={`w-full rounded-t-[3px] shadow-lg transition-all duration-200 ease-out
                ${color === "green"
                ? "bg-[#00E5AD]"
                : color === "blue"
                  ? "bg-[#598CFF]"
                  : "bg-[#F45050]"
              }`}
            style={{
              height: isAnimated ? `${value}%` : "0%",
            }}
          />
        ))}
      </div>

      {(hovered && values.details) && (values.propertyAdded || values.loanComplete || values.propertySold || values.investmentOpportunity) &&
        createPortal(
          <div
            ref={tooltipRef}
            className="fixed bg-white shadow-xl p-3 text-xs rounded-md border border-gray-300 w-52 z-[9999]"
            style={{
              top: tooltipPos.top,
              left: tooltipPos.left,
              transform: "translateX(-50%)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className="absolute left-1/2 bottom-[-10px] w-5 h-5 bg-white rotate-45"
              style={{
                transform: "translateX(-50%) rotate(45deg)",
                borderRadius: "4px",
              }}
            ></div>

            <strong className="block text-sm text-black mb-1">
              {values.details.title}
            </strong>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-gray-700">
                Value: <span className="font-bold">${values.details.value}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <p className="text-gray-700">
                Loan: <span className="font-bold">${values.details.loan}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <p className="text-gray-700">
                Equity: <span className="font-bold">${values.details.equity}</span>
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default CustomSpan;