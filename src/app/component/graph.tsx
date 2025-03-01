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
    details: Array<{
      title: string;
      value: string;
      loan: string;
      equity: string;
      milestones?: {
        propertySold?: boolean;
        loanComplete?: boolean;
        propertyAdded?: boolean;
        investmentOpportunity?: boolean;
      };
    }>;
    propertyAdded?: boolean;
    loanComplete?: boolean;
    propertySold?: boolean;
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
    const handleScroll = () => {
      requestAnimationFrame(updateTooltipPosition);
    };

    if (hovered) {
      updateTooltipPosition(); // Ensure tooltip updates on hover
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
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
    loanComplete: "bg-[#9747FF]",
    outstandingLoan: "bg-[#F45050]",
    propertySold: "bg-[#FF3ADB]",
    propertyAdded: "bg-[#25DC00]",
    equity: "bg-[#598CFF]",
    investmentOpportunity: "bg-[#E5D200]",
  };

  const getMilestoneColor = (milestones: any) => {
    const milestoneColors = {
      propertySold: "#FF3ADB",
      loanComplete: "#9747FF",
      propertyAdded: "#25DC00",
      investmentOpportunity: "#E5D200",
    };

    for (const key in milestoneColors) {
      if (milestones[key as keyof typeof milestoneColors]) return milestoneColors[key as keyof typeof milestoneColors];
    }
    return "gray"; // Default color
  };

  return (
    <>

      <div className="overflow-visible">
        <div
          ref={spanRef}
          className="relative w-[21px] h-[95px]  bg-[#ECECF0] rounded-t-sm rounded-b-lg drop-shadow-[50px_50px_51px_50px_rgba(0,_0,_0,_0.1)]  flex flex-col justify-end items-start overflow-visible"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          <div className="w-full bg-[#ECECF0] rounded-xl h-[100px] relative">
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
              className={`w-full rounded-t-[7px] mb-[-1px] shadow-lg transition-all duration-200 ease-out
                ${color === "projected"
                  ? "bg-[#00E5AD]"
                  : color === "Equity"
                    ? "bg-[#598CFF]"
                    : "bg-[#F45050]"
                }`}
              style={{
                height: isAnimated ? `${value}%` : "0%",
                WebkitMaskImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,1))`
              }}
            />
          ))}

        </div>
      </div>

      {hovered &&
        values.details &&
        Array.isArray(values.details) &&
        (values.propertyAdded ||
          values.loanComplete ||
          values.propertySold ||
          values.investmentOpportunity) &&
        createPortal(
          <div
            ref={tooltipRef}
            className="fixed bg-white shadow-2xl p-1 text-xs rounded-md border border-gray-300 w-[204px] z-[9999]"

            style={{
              top: tooltipPos.top,
              left: tooltipPos.left,
              transform: "translateX(-50%)",
              // maxHeight: "275px", 
              // overflow: "auto",  
            }}

            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Tooltip Arrow */}
            <div
              className="absolute left-1/2 bottom-[-6px] w-4 h-4 bg-white rotate-45"
              style={{
                transform: "translateX(-50%) rotate(45deg)",
                borderRadius: "1px",
              }}
            ></div>

            {values.details.map((detail, index) => {
              return (
                <div
                  key={index}
                  className={`p-1 ${index !== values.details!.length - 1 ? "border-b border-gray-300 pb-2 mb-2" : ""}`}
                >

                  <div className="flex p-1 items-center gap-2 ">
                    <span
                      className="w-3 h-3 border-[#FFFFFF] border-[1px] box-shadow: -20px 1px 100px 50px rgba(0, 0, 0, 0.1) border-dashed rounded-full "
                      style={{ backgroundColor: getMilestoneColor(detail.milestones) }}
                    ></span>
                    <h2 className="text-[12px] font-medium">
                      {detail.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap" >
                    {/* Value */}
                    <div className="flex p-1 items-center gap-2 w-fit">
                      <span className="min-w-[12px] h-3 bg-green-500 rounded-full"></span>
                      <p className="text-[#6D6D6D] flex items-center justify-between w-full">
                        Value:{" "}
                        <span className="font-medium text-[12px] text-[#121212]">
                          ${detail.value}
                        </span>
                      </p>
                    </div>
                    {/* Loan */}
                    <div className="flex p-1 items-center gap-2 w-fit">
                      <div className="min-w-[12px] bg-[#9747FF] h-3 border-[#FFFFFF] border-[1px] border-dashed rounded-full shadow-lg drop-shadow-lg"></div>
                      <p className="text-[#6D6D6D] flex items-center justify-between w-full">
                        Loan:{" "}
                        <span className="font-medium text-[12px] text-[#121212]">
                          ${detail.loan}
                        </span>
                      </p>
                    </div>
                    {/* Equity */}
                    <div className="flex p-1 items-center gap-2 w-fit">
                      <div className="min-w-[12px] h-3 bg-blue-500 rounded-full"></div>
                      <p className="text-[#6D6D6D] flex items-center justify-between w-full">
                        Equity:{" "}
                        <span className="font-medium text-[12px] text-[#121212]">
                          ${detail.equity}
                        </span>
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>,
          document.body
        )
      }
    </>
  );
};

export default CustomSpan;
