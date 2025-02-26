
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

// interface GraphProps {
//   data: GraphData[];
//   width?: number;
//   height?: number;
// }

const data: GraphData[] = [
    {
        year: "2025",
        amounts: {
            projectedValue: 12,
            outstandingLoan: 14,
            equity: 16,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 1,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 14,
            outstandingLoan: 16,
            equity: 18,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 16,
            outstandingLoan: 18,
            equity: 20,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 18,
            outstandingLoan: 20,
            equity: 22,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 20,
            outstandingLoan: 22,
            equity: 24,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 22,
            outstandingLoan: 24,
            equity: 26,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 24,
            outstandingLoan: 26,
            equity: 28,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 26,
            outstandingLoan: 28,
            equity: 30,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 28,
            outstandingLoan: 30,
            equity: 32,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 30,
            outstandingLoan: 32,
            equity: 34,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 32,
            outstandingLoan: 34,
            equity: 36,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 34,
            outstandingLoan: 36,
            equity: 38,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 36,
            outstandingLoan: 38,
            equity: 40,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 38,
            outstandingLoan: 40,
            equity: 42,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 40,
            outstandingLoan: 42,
            equity: 44,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 42,
            outstandingLoan: 44,
            equity: 46,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 44,
            outstandingLoan: 46,
            equity: 48,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 46,
            outstandingLoan: 48,
            equity: 50,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 48,
            outstandingLoan: 50,
            equity: 52,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 50,
            outstandingLoan: 52,
            equity: 54,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 52,
            outstandingLoan: 54,
            equity: 56,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 54,
            outstandingLoan: 56,
            equity: 58,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 56,
            outstandingLoan: 58,
            equity: 60,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 58,
            outstandingLoan: 60,
            equity: 62,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 60,
            outstandingLoan: 62,
            equity: 64,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2026",
        amounts: {
            projectedValue: 62,
            outstandingLoan: 64,
            equity: 66,
        },
        milestones: {
            loanComplete: 0,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2026",
        amounts: {
            projectedValue: 64,
            outstandingLoan: 66,
            equity: 68,
        },
        milestones: {
            loanComplete: 0,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2026",
        amounts: {
            projectedValue: 66,
            outstandingLoan: 68,
            equity: 70,
        },
        milestones: {
            loanComplete: 0,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2026",
        amounts: {
            projectedValue: 68,
            outstandingLoan: 70,
            equity: 72,
        },
        milestones: {
            loanComplete: 0,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2026",
        amounts: {
            projectedValue: 70,
            outstandingLoan: 72,
            equity: 74,
        },
        milestones: {
            loanComplete: 0,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 72,
            outstandingLoan: 74,
            equity: 76,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 74,
            outstandingLoan: 76,
            equity: 78,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 80,
            outstandingLoan: 82,
            equity: 84,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 82,
            outstandingLoan: 84,
            equity: 86,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 84,
            outstandingLoan: 86,
            equity: 88,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 86,
            outstandingLoan: 88,
            equity: 90,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 88,
            outstandingLoan: 90,
            equity: 92,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 90,
            outstandingLoan: 92,
            equity: 94,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 92,
            outstandingLoan: 94,
            equity: 96,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 94,
            outstandingLoan: 96,
            equity: 98,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 96,
            outstandingLoan: 98,
            equity: 100,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
    {
        year: "2025",
        amounts: {
            projectedValue: 98,
            outstandingLoan: 100,
            equity: 102,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    },
];

const leftLabels = [
    { color: "#00E5AD", text: "Projected Value" },
    { color: "#F45050", text: "Outstanding Loan" },
    { color: "#598CFF", text: "Equity" },
];

const rightLabels = [
    { color: "bg-purple-400", text: "Loan Complete" },
    { color: "bg-pink-400", text: "Property Sold" },
    { color: "bg-green-500", text: "Property Added" },
    { color: "bg-yellow-400", text: "Investment Opportunity" },
];


const Circle: React.FC = () => {
    const totalSpans = data.length;
    const angleStep = 360 / totalSpans;

    return (
        <>
            <div className="w-[700px] h-[500px]" >
                <div>
                    <h1 className="text-[20px] font-semibold text-[#121212] text-center" >Overall Portfolio</h1>
                </div>
                <div
                    className="relative w-[700px] h-[500px] flex justify-center items-center">

                    {
                        data.map((item, index) => {

                            const angle = index * angleStep;
                            const distance = 220; // Distance from center for labels

                            // Calculate label position
                            const labelX = Math.cos((angle * Math.PI) / 180) * distance;
                            const labelY = Math.sin((angle * Math.PI) / 180) * distance;

                            return (<>
                                <div
                                    key={item.year}
                                    className="absolute bg-[#ECECF0] shadow-2xl rounded-lg"
                                    style={{
                                        boxShadow: "0px 25px 100px -15px rgba(0,0,0,0.1)",
                                        transform: `rotate(${index * angleStep}deg) translate(160px) rotate(90deg)`,
                                        clipPath: `polygon(${[
                                            "0% 0%",  // Top-left
                                            "100% 0%",  // Top-right
                                            "80% 100%", // Bottom-right
                                            "20% 100%"  // Bottom-left
                                        ].join(", ")})`
                                    }}
                                >
                                    <CustomSpan
                                        values={{
                                            green: item.amounts.projectedValue,
                                            blue: item.amounts.equity,
                                            red: item.amounts.outstandingLoan,
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
                            </>)
                        })
                    }
                </div>
                <div>
                    <div className="flex gap-8 p-4 items-center justify-center">
                        {/* Left Labels */}
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

                        {/* Right Labels */}
                        <div className=" rounded-lg  bg-white">
                            <div className="flex flex-col gap-2">
                                {rightLabels.map((item, index) => (
                                    <div key={index} className="flex bg-[#FAFAFA] items-center gap-[2px]">
                                        <span
                                            className={`w-4 h-4 flex items-center justify-center text-white border border-[#EEEEEE] m-1 rounded-full ${item.color}`}
                                        >
                                            ✦
                                        </span>
                                        <span className="text-[#121212] text-[12px] p-1 border border-[#EEEEEE] w-full">
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

export default Circle
