
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

const data: GraphData[] = Array.from({ length: 40 }, (_, index) => {
    const year = (2025 + index).toString();
    const baseValue = 12 + index * 2;

    return {
        year,
        amounts: {
            projectedValue: baseValue,
            outstandingLoan: baseValue + 2,
            equity: baseValue + 4,
        },
        milestones: {
            loanComplete: 1,
            propertySold: 0,
            propertyAdded: 0,
            investmentOpportunity: 0,
        },
    };
});

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

// Years to display on the chart perimeter
const displayYears = ["2025", "2030", "2035", "2040", "2045", "2050", "2055", "2060"];

const Circle: React.FC = () => {
    const totalSpans = data.length;
    const angleStep = 360 / totalSpans;

    return (
        <>
            <div className="w-[700px] h-[500px]">
                <div>
                    <h1 className="text-[20px] font-semibold text-[#121212] text-center pb-[40px] ">Overall Portfolio</h1>
                </div>
                <div className="relative w-[700px] h-[500px] flex justify-center items-center">
                    {/* Year labels around the circle */}
                    {displayYears.map((year, index) => {
                        const angle = (index * 45 * Math.PI) / 180; // 45 degrees spacing (360/8 years)
                        const distance = 250; // Distance from center for year labels
                        const labelX = Math.cos(angle) * distance;
                        const labelY = Math.sin(angle) * distance;

                        return (
                            <div
                                key={`year-${year}`}
                                className="absolute px-4 py-2 rounded-full border border-[#EEEEEE] font-medium text-sm shadow-md"
                                style={{
                                    transform: `translate(${labelX}px, ${labelY}px)`,
                                    zIndex: 10,
                                }}
                            >
                                {year}
                            </div>
                        );
                    })}

                    {/* Custom span elements */}
                    {data.map((item, index) => {

                        const angle = index * angleStep;

                        return (
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
                        );
                    })}
                </div>
                <div>
                    <div className="flex gap-8 p-4 mt-8 items-center justify-between">
                        {/* Left Labels */}
                        <div className="flex flex-col gap-2">
                            {leftLabels.map((item, index) => (
                                <div key={index} className="flex bg-[#FAFAFA] px-3 py-1 rounded-full items-center gap-2">
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
                                    <div key={index} className="flex  items-center gap-[2px]">
                                        <div className="w-7 h-7   flex justify-center items-center border border-1 border-[#EEEEEE]  rounded-l-[5px] "  >
                                            <div style={{ backgroundColor: `${item.color}` }} className="w-4 h-4  border-[#FFFFFF] border-[3px] border-dashed rounded-full drop-shadow-lg"></div>
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
            </div>
        </>
    );
};

export default Circle;


// const Circle: React.FC = () => {
//     const totalSpans = data.length;
//     const angleStep = 360 / totalSpans;

//     return (
//         <>
//             <div className="w-[700px] h-[500px]" >
//                 <div>
//                     <h1 className="text-[20px] font-semibold text-[#121212] text-center" >Overall Portfolio</h1>
//                 </div>
//                 <div
//                     className="relative w-[700px] h-[500px] flex justify-center items-center">

//                     {
//                         data.map((item, index) => {

//                             const angle = index * angleStep;
//                             const distance = 220; // Distance from center for labels

//                             // Calculate label position
//                             const labelX = Math.cos((angle * Math.PI) / 180) * distance;
//                             const labelY = Math.sin((angle * Math.PI) / 180) * distance;

//                             return (<>
//                                 <div
//                                     key={item.year}
//                                     className="absolute bg-[#ECECF0] shadow-2xl rounded-lg"
//                                     style={{
//                                         boxShadow: "0px 25px 100px -15px rgba(0,0,0,0.1)",
//                                         transform: `rotate(${index * angleStep}deg) translate(160px) rotate(90deg)`,
//                                         clipPath: `polygon(${[
//                                             "0% 0%",  // Top-left
//                                             "100% 0%",  // Top-right
//                                             "80% 100%", // Bottom-right
//                                             "20% 100%"  // Bottom-left
//                                         ].join(", ")})`
//                                     }}
//                                 >
//                                     <CustomSpan
//                                         values={{
//                                             green: item.amounts.projectedValue,
//                                             blue: item.amounts.equity,
//                                             red: item.amounts.outstandingLoan,
//                                             details: {
//                                                 title: `Year ${item.year}`,
//                                                 value: item.amounts.projectedValue.toString(),
//                                                 loan: item.amounts.outstandingLoan.toString(),
//                                                 equity: item.amounts.equity.toString(),
//                                             },
//                                             propertyAdded: !!item.milestones.propertyAdded,
//                                             loanComplete: !!item.milestones.loanComplete,
//                                             propertySold: !!item.milestones.propertySold,
//                                             investmentOpportunity: !!item.milestones.investmentOpportunity,
//                                         }}
//                                     />
//                                 </div>
//                             </>)
//                         })
//                     }
//                 </div>
//                 <div>
//                     <div className="flex gap-8 p-4 items-center justify-center">
//                         {/* Left Labels */}
//                         <div className="flex flex-col gap-2">
//                             {leftLabels.map((item, index) => (
//                                 <div key={index} className="flex bg-[#FAFAFA] px-3 py-1 rounded-full items-center gap-2">
//                                     <span style={{ backgroundColor: `${item.color}` }} className={`w-3 h-3 rounded-full`} />
//                                     <span className=" text-[#121212] font-normal text-[12px] rounded-lg">
//                                         {item.text}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Right Labels */}
//                         <div className=" rounded-lg  bg-white">
//                             <div className="flex flex-col gap-2">
//                                 {rightLabels.map((item, index) => (
//                                     <div key={index} className="flex bg-[#FAFAFA] items-center gap-[2px]">
//                                         <span
//                                             className={`w-4 h-4 flex items-center justify-center text-white border border-[#EEEEEE] m-1 rounded-full ${item.color}`}
//                                         >
//                                             ✦
//                                         </span>
//                                         <span className="text-[#121212] text-[12px] p-1 border border-[#EEEEEE] w-full">
//                                             {item.text}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Circle
