"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const CustomSpan = ({
  values,
}: {
  values: {
    projected: number;
    Equity: number;
    outstanding: number;
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
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [isAnimated, setIsAnimated] = useState(false);
  const spanRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  // Function to update tooltip position
  const updateTooltipPosition = () => {
    if (hovered && spanRef.current && dotRef.current) {
      const spanRect = spanRef.current.getBoundingClientRect();
      const dotRect = dotRef.current.getBoundingClientRect();
      const tooltipHeight = tooltipRef.current?.offsetHeight || 50;

      setTooltipPos({
        top: dotRect.top + window.scrollY - tooltipHeight - 5,
        left: dotRect.left + window.scrollX + dotRect.width / 2,
      });
    }
  };

  useEffect(() => {
    updateTooltipPosition(); // Update position on hover

    if (hovered) {
      window.addEventListener("scroll", updateTooltipPosition);
    }

    return () => {
      window.removeEventListener("scroll", updateTooltipPosition);
    };
  }, [hovered]);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = (event: React.MouseEvent) => {
    if (tooltipRef.current?.contains(event.relatedTarget as Node)) {
      return;
    }
    setHovered(false);
  };

  const sortedColors = Object.entries(values)
    .filter(([key]) => ["projected", "Equity", "outstanding"].includes(key))
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

  // Define color mapping for each option
  const optionColors: Record<string, string> = {
    projectedValue: "bg-[#00E5AD]",
    loanComplete: "bg-[#9966FF]",
    outstandingLoan: "bg-[#F45050]",
    propertySold: "bg-[#FF9F40]",
    propertyAdded: "bg-[#00FF00]",
    equity: "bg-[#598CFF]",
    investmentOpportunity: "bg-[#FFFF00]",
  };

  return (
    <>
      <div className="overflow-visible">
        <div
          ref={spanRef}
          className="relative w-[20px] h-[95px] bg-[#ECECF0] rounded-t-sm rounded-b-lg drop-shadow-lg shadow-lg flex flex-col justify-end items-start overflow-visible"
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
                    className={`w-3 h-3 ${optionColors[option]} border-[#FFFFFF] border-[1.5px] border-dashed rounded-full drop-shadow-lg`}
                  ></div>
                ))}
              </div>
            )}
          </div>
          {sortedColors.map(([color, value]) => (
            <div
              key={color}
              className={`w-full rounded-t-[3px] shadow-lg transition-all duration-200 ease-out
                ${color === "projected"
                  ? "bg-[#00E5AD]"
                  : color === "Equity"
                    ? "bg-[#598CFF]"
                    : "bg-[#F45050]"
                }`}
              style={{
                height: isAnimated ? `${value}%` : "0%",
              }}
            />
          ))}
        </div>
      </div>

      {hovered &&
        values.details &&
        (values.propertyAdded ||
          values.loanComplete ||
          values.propertySold ||
          values.investmentOpportunity) &&
        createPortal(
          <div
            ref={tooltipRef}
            className="fixed bg-white shadow-xl p-[6px] text-xs rounded-md border border-gray-300 w-[204px] z-[9999]"
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
            <div className="flex p-[6px] items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <h2 className="text-[#121212] text-[12px] font-medium">
                {values.details.title}
              </h2>
            </div>
            <div className="flex p-[6px] items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <p className="text-[#6D6D6D] items-center flex justify-between w-full">
                Value:{" "}
                <span className="font-medium text-[12px] text-[#121212]">
                  ${values.details.value}
                </span>
              </p>
            </div>
            <div className="flex p-[6px] items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <p className="text-[#6D6D6D] items-center flex justify-between w-full">
                Loan:{" "}
                <span className="font-medium text-[12px] text-[#121212]">
                  ${values.details.loan}
                </span>
              </p>
            </div>
            <div className="flex p-[6px] items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <p className="text-[#6D6D6D] items-center flex justify-between w-full">
                Equity:{" "}
                <span className="font-medium text-[12px] text-[#121212]">
                  ${values.details.equity}
                </span>
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default CustomSpan;