"use client";

import React from "react";
import PropertyStack from "./PropertyStack";

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
    properties: PropertyData[];
}

export interface colorcode {
    lonecomplete: string;
    propertysold: string;
    propertyadded: string;
    investmentopportunity: string;
    projectedvalue: string;
    equity: string;
    outstandingloan: string;
}
interface CircleProps {
    width: number;
    data: GraphData[];
    color: colorcode
}

const Portfoliograph: React.FC<CircleProps> = ({ width, data, color }) => {

    const leftLabels = [
        { color: color.projectedvalue, text: "Projected Value" },
        { color: color.outstandingloan, text: "Outstanding Loan" },
        { color: color.equity, text: "Equity" },
    ];

    const rightLabels = [
        { color: color.lonecomplete, text: "Loan Complete" },
        { color: color.propertysold, text: "Property Sold" },
        { color: color.propertyadded, text: "Property Added" },
        { color: color.investmentopportunity, text: "Investment Opportunity" },
    ];

    const displayYears = ["2035", "2040", "2045", "2050", "2055", "2060", "2025", "2030"];

    const totalSpans = data.length;
    const angleStep = 360 / totalSpans;

    return (
        <>
            <div style={{ width: `${width}px` }} className="mt-20 ml-20">
                <h1 className="text-[20px] font-semibold text-[#121212] text-center pt-[14px]">
                    Overall Portfolio
                </h1>
                <div className="w-[517px] h-[500px] flex justify-center items-center">
                    <div className="relative flex justify-center items-center">
                        {/* Display years around the circle */}
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

                        {/* Main Circular Graph */}
                        <div className="w-[360px] h-[360px] flex justify-center items-center rotate-[-90deg]">
                            {data.map((item, index) => {
                                const activeProperties = item.properties.filter(
                                    (property) =>
                                        property.milestones.propertyAdded ||
                                        property.milestones.loanComplete ||
                                        property.milestones.propertySold ||
                                        property.milestones.investmentOpportunity
                                );

                                const validProperties = activeProperties.length > 0 ? activeProperties : item.properties;

                                return (
                                    <div
                                        key={item.year}
                                        className="absolute bg-[#ECECF0] shadow-2xl rounded-lg"
                                        style={{
                                            transform: `rotate(${index * angleStep}deg) translate(150px) rotate(90deg)`,
                                            clipPath: `polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)`,
                                            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                                            WebkitMaskImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,1))`
                                        }}
                                    >
                                        <PropertyStack
                                            color={color}
                                            values={{
                                                projected: validProperties.reduce(
                                                    (sum, property) => sum + property.amounts.projectedValue, 0
                                                ),
                                                Equity: validProperties.reduce(
                                                    (sum, property) => sum + property.amounts.equity, 0
                                                ),
                                                outstanding: validProperties.reduce(
                                                    (sum, property) => sum + property.amounts.outstandingLoan, 0
                                                ),
                                                details: activeProperties.map((property) => ({
                                                    title: `${property.propertyName} (${item.year})`,
                                                    value: property.amounts.projectedValue.toString(),
                                                    loan: property.amounts.outstandingLoan.toString(),
                                                    equity: property.amounts.equity.toString(),
                                                    milestones: {
                                                        loanComplete: !!property.milestones.loanComplete,
                                                        propertySold: !!property.milestones.propertySold,
                                                        propertyAdded: !!property.milestones.propertyAdded,
                                                        investmentOpportunity: !!property.milestones.investmentOpportunity,
                                                    },
                                                })),
                                                propertyAdded: activeProperties.some((property) => property.milestones.propertyAdded) || false,
                                                loanComplete: activeProperties.some((property) => property.milestones.loanComplete) || false,
                                                propertySold: activeProperties.some((property) => property.milestones.propertySold) || false,
                                                investmentOpportunity: activeProperties.some((property) => property.milestones.investmentOpportunity) || false,
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="flex gap-8 p-4 items-center justify-center">
                    <div className="flex flex-col gap-2">
                        {leftLabels.map((item, index) => (
                            <div key={index} className="flex bg-[#FAFAFA] px-3 py-1 rounded-full items-center gap-2">
                                <span style={{ backgroundColor: `${item.color}` }} className={`w-3 h-3 rounded-full`} />
                                <span className=" text-[#121212] font-normal text-[12px] rounded-lg">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className=" rounded-lg  bg-white">
                        <div className="flex flex-col gap-2">
                            {rightLabels.map((item, index) => (
                                <div key={index} className="flex bg-[#FAFAFA] items-center gap-[2px]">
                                    <div className="w-7 h-7 flex justify-center items-center border border-1 border-[#EEEEEE]  rounded-l-[5px] "  >
                                        <div style={{ backgroundColor: `${item.color}` }} className="w-3 h-3  border-[#FFFFFF] border-[1px] border-dashed rounded-full drop-shadow-lg"></div>
                                    </div>
                                    <span className="text-[#121212] text-[12px] p-1 border border-[#EEEEEE] w-full">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfoliograph;

