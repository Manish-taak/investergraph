"use client"

import React from "react";
import CustomSpan from "./graph";

export interface PropertyData {
    propertyName: string;
    amounts: {
        projectedValue: number;
        outstandingLoan: number;
        equity: number;
    };
    milestones: {
        loanComplete: 0 | 1;
        propertySold: 0 | 1;
        propertyAdded: 0 | 1;
        investmentOpportunity: 0 | 1;
    };
}

export interface GraphData {
    year: string;
    amounts: {
        projectedValue: number;
        outstandingLoan: number;
        equity: number;
    };
    milestones: {
        loanComplete: 0 | 1;
        propertySold: 0 | 1;
        propertyAdded: 0 | 1;
        investmentOpportunity: 0 | 1;
    };
}

const leftLabels = [
    { color: "#00E5AD", text: "Projected Value" },
    { color: "#F45050", text: "Outstanding Loan" },
    { color: "#598CFF", text: "Equity" },
];

const rightLabels = [
    { color: "#9747FF", text: "Loan Complete" },
    { color: "#FF3ADB", text: "Property Sold" },
    { color: "#25DC00", text: "Property Added" },
    { color: "#E5D200", text: "Investment Opportunity" },
];

const displayYears = ["2035", "2040", "2045", "2050", "2055", "2060", "2025", "2030"];

interface circle {
    width: number;
    data: GraphData[];
}

const Circle: React.FC<circle> = ({ width, data }) => {
    const totalSpans = data.length;
    const angleStep = 360 / totalSpans;

    return (
        <>
            <div style={{ width: `${width}px`}} className="pt-10" >
                <h1 className="text-[20px] font-semibold text-[#121212] text-center pt-[14px]">Overall Portfolio</h1>
                <div className="w-[517] h-[500px] flex justify-center items-center ">
                    <div className="relative flex justify-center items-center ">
                        {displayYears.map((year, index) => {
                            const angle = (index * 45 * Math.PI) / 180;
                            const distance = 225;
                            const labelX = Math.cos(angle) * distance;
                            const labelY = Math.sin(angle) * distance;
                            return (
                                <div
                                    key={`year-${year}`}
                                    className="absolute px-2.5 py-1 rounded-full border border-[#EEEEEE] font-medium text-[12px] shadow-md"
                                    style={{
                                        transform: `translate(${labelX}px, ${labelY}px)`,
                                        zIndex: 10,
                                    }}
                                >
                                    {year}
                                </div>
                            );
                        })}
                        <div className="w-[360px] h-[360px] flex justify-center items-center rotate-[-90deg] " >
                            {data.map((item, index) => {
                                return (
                                    <div
                                        key={item.year}
                                        className="absolute bg-[#ECECF0] shadow-2xl rounded-lg"
                                        style={{
                                            transform: `rotate(${index * angleStep}deg) translate(145px) rotate(90deg)`,
                                            clipPath: `polygon(${[
                                                "0% 0%",
                                                "100% 0%",
                                                "80% 100%",
                                                "20% 100%"
                                            ].join(", ")})`
                                        }}>

                                        <CustomSpan
                                            values={{
                                                projected: item.amounts.projectedValue,
                                                Equity: item.amounts.equity,
                                                outstanding: item.amounts.outstandingLoan,
                                                details: {
                                                    title: `Year ${item.year}`,
                                                    value: item.amounts.projectedValue.toString(),
                                                    loan: item.amounts.outstandingLoan.toString(),
                                                    equity: item.amounts.equity.toString(),
                                                },
                                                propertyAdded: !!item.milestones.propertyAdded,
                                                loanComplete: !!item.milestones.loanComplete,
                                                propertySold: !!item.milestones.propertySold,
                                                investmentOpportunity: !!item.milestones.investmentOpportunity,
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-8 p-4 mt-8 items-center justify-between">
                        {/* Left Labels */}
                        <div className="flex flex-col gap-2">
                            {leftLabels.map((item, index) => (
                                <div key={index} className="flex bg-[#FAFAFA] px-[14px] py-[8px] rounded-full items-center gap-2">
                                    <span style={{ backgroundColor: `${item.color}` }} className={`w-3 h-3 rounded-full`} />
                                    <span className="text-[#121212] font-normal text-[12px] rounded-lg">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Right Labels */}
                        <div className="rounded-lg bg-white">
                            <div className="flex flex-col gap-2">
                                {rightLabels.map((item, index) => (
                                    <div key={index} className="flex  items-center bg-[#FAFAFA] gap-[2px]">
                                        <div className="w-7 h-7 flex justify-center items-center border border-1 border-[#EEEEEE]  rounded-l-[5px] "  >
                                            <div style={{ backgroundColor: `${item.color}` }} className="w-3 h-3  border-[#FFFFFF] border-[1px] border-dashed rounded-full drop-shadow-lg"></div>
                                        </div>
                                        <span className="text-[#121212] text-[12px] p-1 border border-[#EEEEEE]  w-full">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Circle;