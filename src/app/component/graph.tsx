"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { colorcode } from "./circle";

const CustomSpan = ({
  values, color
}: {
  color: {
    lonecomplete: string;
    propertysold: string;
    propertyadded: string;
    investmentopportunity: string;
    projectedvalue: string;
    equity: string;
    outstandingloan: string;
  };
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

  const optionColors: Record<string, string> = {
    projectedValue: color.projectedvalue,
    loanComplete: color.lonecomplete,
    outstandingLoan: color.outstandingloan,
    propertySold: color.propertysold,
    propertyAdded: color.propertyadded,
    equity: color.equity,
    investmentOpportunity: color.investmentopportunity,
  };

  const getMilestoneColor = (milestones: any, color: colorcode) => {
    const milestoneColors = {
      propertySold: color.propertysold,
      loanComplete: color.lonecomplete,
      propertyAdded: color.propertyadded,
      investmentOpportunity: color.investmentopportunity,
    };

    for (const key in milestoneColors) {
      if (milestones[key as keyof typeof milestoneColors]) return milestoneColors[key as keyof typeof milestoneColors];
    }
    return "gray";
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
                    style={{ backgroundColor: optionColors[option] }}
                    key={option}
                    ref={index === 0 ? dotRef : null}
                    className={`w-3 h-3 border-[#FFFFFF] border-[1.5px] border-dashed rounded-full drop-shadow-lg`}
                  ></div>
                ))}
              </div>
            )}
          </div>

          {sortedColors.map(([colors, value]) => (
            <div
              key={colors}
              className={`w-full rounded-t-[7px] mb-[-1px] shadow-lg transition-all duration-200 ease-out
                `}
              style={{
                backgroundColor:
                  colors === "projected"
                    ? color.projectedvalue
                    : colors === "Equity"
                      ? color.equity
                      : color.outstandingloan,
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
                      style={{ backgroundColor: getMilestoneColor(detail.milestones, color) }}
                    ></span>
                    <h2 className="text-[12px] font-medium">
                      {detail.title}
                    </h2>
                  </div>
                  <div className="flex flex-wrap">
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
                      <div style={{ backgroundColor: color.lonecomplete }} className="min-w-[12px]  h-3 border-[#FFFFFF] border-[1px] border-dashed rounded-full shadow-lg drop-shadow-lg"></div>
                      <p className="text-[#6D6D6D] flex items-center justify-between w-full">
                        Loan:{" "}
                        <span className="font-medium text-[12px] text-[#121212]">
                          ${detail.loan}
                        </span>
                      </p>
                    </div>
                    {/* Equity */}
                    <div className="flex p-1 items-center gap-2 w-fit">
                      <div style={{ backgroundColor: color.equity }} className="min-w-[12px] h-3  rounded-full"></div>
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