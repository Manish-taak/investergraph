// import React from "react";

// interface SpanProps {
//   values: { green: number; blue: number; red: number };
//   rotation: number;
// }

// const CustomSpan: React.FC<SpanProps> = ({ values, rotation }) => {
//   return (
//     <div
//       className="relative w-[100px] h-[20px] bg-gray-200 rounded-lg shadow-md flex overflow-hidden"
//       style={{
//         transform: `rotate(${rotation}deg)`,
//         transformOrigin: "center",
//       }}
//     >
//       <div
//         className="bg-green-400"
//         style={{ width: `${values.green}%`, height: "100%" }}
//       />
//       <div
//         className="bg-blue-400"
//         style={{ width: `${values.blue}%`, height: "100%" }}
//       />
//       <div
//         className="bg-red-400"
//         style={{ width: `${values.red}%`, height: "100%" }}
//       />
//     </div>
//   );
// };

// export default CustomSpan;





// interface SpanProps {
//   values: { green: number; blue: number; red: number };
// }

// const CustomSpan: React.FC<SpanProps> = ({ values }) => {
//   return (
//     <div
//       className="relative w-[20px] h-[80px] bg-gray-200 rounded-lg shadow-md flex flex-col overflow-hidden"
//     >
//       <div className="bg-green-400" style={{ height: `${values.green}%`, width: "100%" }} />
//       <div className="bg-blue-400" style={{ height: `${values.blue}%`, width: "100%" }} />
//       <div className="bg-red-400" style={{ height: `${values.red}%`, width: "100%" }} />
//     </div>
//   );
// };

// const CustomSpan = ({ values }: { values: { green: number; blue: number; red: number } }) => {
//   const sortedColors = Object.entries(values).sort((a, b) => b[1] - a[1]); // Sorting by percentage

//   return (
//     <div className="relative w-[20px] h-[80px] bg-gray-200 rounded-lg shadow-md flex flex-col overflow-hidden">
//       {sortedColors.map(([color, value]) => (
//         <div
//           key={color}
//           className={`w-6 ${color === "green" ? "bg-[#00E5AD]" : color === "blue" ? "bg-[#598CFF]" : "bg-[#F45050]"}`}
//           style={{ height: `${value}px`, width: "100%" }} // Dynamic height based on percentage
//         />
//       ))}
//     </div>
//   );
// };




// import React from "react";
// const CustomSpan = ({ values }: { values: { green: number; blue: number; red: number } }) => {
//   const sortedColors = Object.entries(values).sort((a, b) => b[1] - a[1]); // Sorting by percentage

//   return (
//     <div className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start overflow-hidden">
//       {/* Fixed Gray Section */}
//       <div className="w-full bg-[#ECECF0] h-[50px]" />
//       {sortedColors.map(([color, value]) => (
//         <div
//           key={color}
//           className={`w-full rounded-t-[3px] shadow-lg ${color === "green" ? "bg-[#00E5AD]" : color === "blue" ? "bg-[#598CFF]" : "bg-[#F45050]"}`}
//           style={{ height: `${value}%` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CustomSpan;




// "use client"


// import React, { useState } from "react";

// const CustomSpan = ({ values }: { values: { green: number; blue: number; red: number; propertyAdded?: boolean } }) => {
//   const [hovered, setHovered] = useState(false);
//   const sortedColors = Object.entries(values).filter(([key]) => key !== "propertyAdded").sort((a, b) => b[1] - a[1]);


//   return (
//     <div
//       className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start overflow-hidden"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Fixed Gray Section */}
//       <div className="w-full bg-[#ECECF0] h-[50px] relative">
//         {values.propertyAdded && (
//           <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
//         )}
//         {hovered && values.propertyAdded && (
//           <div className="absolute left-1/2 top-[-40px] -translate-x-1/2 bg-white shadow-md p-2 text-xs rounded">
//             Property Added
//           </div>
//         )}
//       </div>

//       {sortedColors.map(([color, value]) => (
//         <div
//           key={color}
//           className={`w-full rounded-[3px] shadow-lg ${color === "green" ? "bg-[#00E5AD]" : color === "blue" ? "bg-[#598CFF]" : "bg-[#F45050]"}`}
//           style={{ height: `${value}%` }} 
//         />
//       ))}
//     </div>
//   );
// };

// export default CustomSpan;



// "use client";

// import React, { useState } from "react";

// const CustomSpan = ({
//   values,
// }: {
//   values: {
//     green: number;
//     blue: number;
//     red: number;
//     projectedValue?: boolean;
//     loanComplete?: boolean;
//     outstandingLoan?: boolean;
//     propertySold?: boolean;
//     propertyAdded?: boolean;
//     equity?: boolean;
//     investmentOpportunity?: boolean;
//     details?: {
//       title: string;
//       value: string;
//       loan: string;
//       equity: string;
//     };
//   };
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const sortedColors = Object.entries(values)
//     .filter(([key]) => !["propertyAdded", "projectedValue", "loanComplete", "outstandingLoan", "propertySold", "equity", "investmentOpportunity", "details"].includes(key))
//     .sort((a, b) => b[1] - a[1]);

//   const activeOptions = [
//     "projectedValue",
//     "loanComplete",
//     "outstandingLoan",
//     "propertySold",
//     "propertyAdded",
//     "equity",
//     "investmentOpportunity",
//   ].filter((option) => values[option]);

//   return (
//     <div
//       className="relative w-[20px] h-[100px] bg-[#ECECF0] z-[-10] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start "
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Fixed Gray Section */}
//       <div className="w-full relative bg-[#ECECF0] h-[50px] ">
//         {activeOptions.length > 0 && (
//           <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] z-10 w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
//         )}
//         {hovered && activeOptions.length > 0 && (
//         <div className="absolute left-1/2 top-[-50px] z-[100] -translate-x-1/2 bg-white shadow-md p-2 text-xs rounded">
//           {activeOptions.join(", ")}
//           {values.details && (
//             <div className="mt-2">
//               <strong>{values.details.title}</strong>
//               <p>Value: ${values.details.value}</p>
//               <p>Loan: ${values.details.loan}</p>
//               <p>Equity: ${values.details.equity}</p>
//             </div>
//           )}
//         </div>
//         )}
//       </div>

//       {sortedColors.map(([color, value]) => (
//         <div
//           key={color}
//           className={`w-full rounded-[3px] shadow-lg ${color === "green" ? "bg-[#00E5AD]" : color === "blue" ? "bg-[#598CFF]" : "bg-[#F45050]"
//             }`}
//           style={{ height: `${value}%` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CustomSpan;


// "use client";

// import React, { useState } from "react";
// import { createPortal } from "react-dom";
// const CustomSpan = ({
//   values,
//   angleStep, index
// }: {
//   values: {
//     green: number;
//     blue: number;
//     red: number;
//     projectedValue?: boolean;
//     loanComplete?: boolean;
//     outstandingLoan?: boolean;
//     propertySold?: boolean;
//     propertyAdded?: boolean;
//     equity?: boolean;
//     investmentOpportunity?: boolean;
//     details?: {
//       title: string;
//       value: string;
//       loan: string;
//       equity: string;
//     };
//   };
//   angleStep: any, index: any
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const sortedColors = Object.entries(values)
//     .filter(([key]) => !["propertyAdded", "projectedValue", "loanComplete", "outstandingLoan", "propertySold", "equity", "investmentOpportunity", "details"].includes(key))
//     .sort((a, b) => b[1] - a[1]);

//   const activeOptions = [
//     "projectedValue",
//     "loanComplete",
//     "outstandingLoan",
//     "propertySold",
//     "propertyAdded",
//     "equity",
//     "investmentOpportunity",
//   ].filter((option) => values[option]);

//   const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     setHovered(true);

//     const rect = event.currentTarget.getBoundingClientRect();
//     setPosition({
//       top: rect.top + window.scrollY - 100, // Adjusting the position above
//       left: rect.left + window.scrollX + rect.width / 2, // Center aligning
//     });
//   };


//   return (
//     <div
//       className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Fixed Gray Section */}
//       <div className="w-full  bg-[#ECECF0] h-[50px]">

//         {activeOptions.length > 0 && (
//           <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] z-20 w-4 h-4 bg-pink-500 border-[3px] border-white rounded-full shadow-lg"></div>
//         )}

//         {hovered && activeOptions.length > 0 && (
//           <div
//             className="relative bg-white shadow-xl p-3 text-xs rounded-md border border-gray-300 w-52 z-[9999]"
// style={{
//   top: "-60px", // Adjust the tooltip position above the element
//   left: "50%",
//   transform: `translateX(-50%) rotate(${-(index * angleStep) - 90}deg)`, // Reverse rotation
//   pointerEvents: "auto", // Ensure it's interactable
// }}
//           >
//             {values.details && (
//               <>
//                 <strong className="block text-sm text-black mb-1">{values.details.title}</strong>
//                 <div className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//                   <p className="text-gray-700">Value: <span className="font-bold">${values.details.value}</span></p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//                   <p className="text-gray-700">Loan: <span className="font-bold">${values.details.loan}</span></p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//                   <p className="text-gray-700">Equity: <span className="font-bold">${values.details.equity}</span></p>
//                 </div>
//               </>
//             )}
//           </div>
//         )}

//       </div>

//       {sortedColors.map(([color, value]) => (
//         <div
//           key={color}
//           className={`w-full rounded-[3px] shadow-lg ${color === "green" ? "bg-[#00E5AD]" : color === "blue" ? "bg-[#598CFF]" : "bg-[#F45050]"
//             }`}
//           style={{ height: `${value}%` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CustomSpan;


// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// const CustomSpan = ({
//   values,
//   angleStep,
//   index,
// }: {
//   values: {
//     green: number;
//     blue: number;
//     red: number;
//     projectedValue?: boolean;
//     loanComplete?: boolean;
//     outstandingLoan?: boolean;
//     propertySold?: boolean;
//     propertyAdded?: boolean;
//     equity?: boolean;
//     investmentOpportunity?: boolean;
//     details?: {
//       title: string;
//       value: string;
//       loan: string;
//       equity: string;
//     };
//   };
//   angleStep: any;
//   index: any;
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
//   const spanRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (hovered && spanRef.current) {
//       const rect = spanRef.current.getBoundingClientRect();
//       setTooltipPos({
//         top: rect.top + window.scrollY - 60, // Position tooltip above the element
//         left: rect.left + window.scrollX + rect.width / 2, // Center it
//       });
//     }
//   }, [hovered]);

//   const sortedColors = Object.entries(values)
//     .filter(([key]) => !["propertyAdded", "projectedValue", "loanComplete", "outstandingLoan", "propertySold", "equity", "investmentOpportunity", "details"].includes(key))
//     .sort((a, b) => b[1] - a[1]);

//   const activeOptions = [
//     "projectedValue",
//     "loanComplete",
//     "outstandingLoan",
//     "propertySold",
//     "propertyAdded",
//     "equity",
//     "investmentOpportunity",
//   ].filter((option) => values[option]);

//   return (
//     <>
//       <div
//         ref={spanRef}
//         className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         {/* Fixed Gray Section */}
//         <div className="w-full bg-[#ECECF0] h-[50px]">
//           {activeOptions.length > 0 && (
//             <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] z-20 w-4 h-4 bg-pink-500 border-[3px] border-white rounded-full shadow-lg"></div>
//           )}
//         </div>

//         {sortedColors.map(([color, value]) => (
//           <div
//             key={color}
//             className={`w-full rounded-[3px] shadow-lg ${color === "green" ? "bg-[#00E5AD]" : color === "blue" ? "bg-[#598CFF]" : "bg-[#F45050]"}`}
//             style={{ height: `${value}%` }}
//           />
//         ))}
//       </div>

//       {/* Tooltip (Dropdown) using Portal */}
//       {hovered && values.details &&
//         createPortal(
//           <div
//             className="fixed bg-white shadow-xl p-3 text-xs rounded-md border border-gray-300 w-52 z-[9999]"
//             style={{
//               top: tooltipPos.top,
//               left: tooltipPos.left,
//               transform: "translateX(-50%)", // Center horizontally
//             }}
//           >
//             <strong className="block text-sm text-black mb-1">{values.details.title}</strong>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               <p className="text-gray-700">Value: <span className="font-bold">${values.details.value}</span></p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//               <p className="text-gray-700">Loan: <span className="font-bold">${values.details.loan}</span></p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//               <p className="text-gray-700">Equity: <span className="font-bold">${values.details.equity}</span></p>
//             </div>
//           </div>,
//           document.body // Render outside parent div to prevent `z-index` issues
//         )}
//     </>
//   );
// };

// export default CustomSpan;




// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// const CustomSpan = ({
//   values,
// }: {
//   values: {
//     green: number;
//     blue: number;
//     red: number;
//     details?: {
//       title: string;
//       value: string;
//       loan: string;
//       equity: string;
//     };
//   };
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
//   const spanRef = useRef<HTMLDivElement>(null);
//   const tooltipRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (hovered && spanRef.current && tooltipRef.current) {
//       const rect = spanRef.current.getBoundingClientRect();
//       const tooltipHeight = tooltipRef.current.offsetHeight; // Tooltip height ko measure karein
//       setTooltipPos({
//         top: rect.top + window.scrollY - tooltipHeight - 10, // Pink dot ke just upar place karein
//         left: rect.left + window.scrollX + rect.width / 2,
//       });
//     }
//   }, [hovered]);
//   const handleMouseEnter = () => setHovered(true);

//   const handleMouseLeave = (event: React.MouseEvent) => {
//     // Check if the cursor is moving to the tooltip itself
//     if (tooltipRef.current && tooltipRef.current.contains(event.relatedTarget as Node)) {
//       return;
//     }
//     setHovered(false);
//   };

//   const sortedColors = Object.entries(values)
//     .filter(([key]) => ["green", "blue", "red"].includes(key))
//     .sort((a, b) => b[1] - a[1]);

//   const activeOptions = [
//     "projectedValue",
//     "loanComplete",
//     "outstandingLoan",
//     "propertySold",
//     "propertyAdded",
//     "equity",
//     "investmentOpportunity",
//   ].filter((option) => values[option]);

//   return (
//     <>
//       <div
//         ref={spanRef}
//         className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Fixed Gray Section */}
//         <div className="w-full bg-[#ECECF0] h-[50px]">
//           {activeOptions.length > 0 && (
//             <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] z-20 w-4 h-4 bg-pink-500 border-[3px] border-white rounded-full shadow-lg"></div>
//           )}
//         </div>

//         {sortedColors.map(([color, value]) => (
//           <div
//             key={color}
//             className={`w-full rounded-[3px] shadow-lg ${color === "green" ? "bg-[#00E5AD]" : color === "blue" ? "bg-[#598CFF]" : "bg-[#F45050]"}`}
//             style={{ height: `${value}%` }}
//           />
//         ))}
//       </div>

//       {/* Dropdown Tooltip with Hover Fix */}
//       {hovered && values.details &&
//         createPortal(
//           <div
//             ref={tooltipRef}
//             className="fixed bg-white shadow-xl p-3 text-xs rounded-md border border-gray-300 w-52 z-[9999]"
//             style={{
//               top: tooltipPos.top,
//               left: tooltipPos.left,
//               transform: "translateX(-50%)",
//             }}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//           >
//             <strong className="block text-sm text-black mb-1">{values.details.title}</strong>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               <p className="text-gray-700">Value: <span className="font-bold">${values.details.value}</span></p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//               <p className="text-gray-700">Loan: <span className="font-bold">${values.details.loan}</span></p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//               <p className="text-gray-700">Equity: <span className="font-bold">${values.details.equity}</span></p>
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// };

// export default CustomSpan;



// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// const CustomSpan = ({
//   values,
// }: {
//   values: {
//     green: number;
//     blue: number;
//     red: number;
//     details?: {
//       title: string;
//       value: string;
//       loan: string;
//       equity: string;
//     };
//   };
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
//   const spanRef = useRef<HTMLDivElement>(null);
//   const tooltipRef = useRef<HTMLDivElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (hovered && spanRef.current && dotRef.current) {
//       const spanRect = spanRef.current.getBoundingClientRect();
//       const dotRect = dotRef.current.getBoundingClientRect();
//       const tooltipHeight = tooltipRef.current?.offsetHeight || 50; // Default height if not loaded

//       setTooltipPos({
//         top: dotRect.top + window.scrollY - tooltipHeight - 5, // Dot ke upar
//         left: dotRect.left + window.scrollX + dotRect.width / 2, // Center align
//       });
//     }
//   }, [hovered]);

//   const handleMouseEnter = () => setHovered(true);
//   const handleMouseLeave = (event: React.MouseEvent) => {
//     if (tooltipRef.current?.contains(event.relatedTarget as Node)) {
//       return;
//     }
//     setHovered(false);
//   };

//   const sortedColors = Object.entries(values)
//     .filter(([key]) => ["green", "blue", "red"].includes(key))
//     .sort((a, b) => b[1] - a[1]);

//   const activeOptions = [
//     "projectedValue",
//     "loanComplete",
//     "outstandingLoan",
//     "propertySold",
//     "propertyAdded",
//     "equity",
//     "investmentOpportunity",
//   ].filter((option) => values[option]);

//   return (
//     <>
//       <div
//         ref={spanRef}
//         className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Fixed Gray Section */}
//         <div className="w-full bg-[#ECECF0] h-[50px] relative">
//           {activeOptions.length > 0 && (
//             <div
//               ref={dotRef}
//               className="absolute left-1/2 -translate-x-1/2 top-[-10px] z-20 w-4 h-4 bg-pink-500 border-[3px] border-white rounded-full shadow-lg"
//             ></div>
//           )}
//         </div>

//         {sortedColors.map(([color, value]) => (
//           <div
//             key={color}
//             className={`w-full rounded-[3px] shadow-lg ${color === "green"
//               ? "bg-[#00E5AD]"
//               : color === "blue"
//                 ? "bg-[#598CFF]"
//                 : "bg-[#F45050]"
//               }`}
//             style={{ height: `${value}%` }}
//           />
//         ))}
//       </div>

//       {/* Dropdown Tooltip with Hover Fix */}
//       {hovered && values.details &&
//         createPortal(
//           <div
//             ref={tooltipRef}
//             className="fixed bg-white shadow-xl p-3 text-xs rounded-md border border-gray-300 w-52 z-[9999]"
//             style={{
//               top: tooltipPos.top,
//               left: tooltipPos.left,
//               transform: "translateX(-50%)",
//             }}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//           >

//             <div
//               className="absolute left-1/2 bottom-[-10px] w-5 h-5 bg-white rotate-45"
//               style={{
//                 transform: "translateX(-50%) rotate(45deg)",
//                 borderRadius: "4px",
//               }}
//             ></div>

//             <strong className="block text-sm text-black mb-1">
//               {values.details.title}
//             </strong>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               <p className="text-gray-700">
//                 Value: <span className="font-bold">${values.details.value}</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//               <p className="text-gray-700">
//                 Loan: <span className="font-bold">${values.details.loan}</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//               <p className="text-gray-700">
//                 Equity: <span className="font-bold">${values.details.equity}</span>
//               </p>
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// };

// export default CustomSpan;


// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { createPortal } from "react-dom";

// const CustomSpan = ({
//   values,
// }: {
//   values: {
//     green: number;
//     blue: number;
//     red: number;
//     details?: {
//       title: string;
//       value: string;
//       loan: string;
//       equity: string;
//     };
//   };
// }) => {
//   const [hovered, setHovered] = useState(false);
//   const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
//   const [isAnimated, setIsAnimated] = useState(false);
//   const spanRef = useRef<HTMLDivElement>(null);
//   const tooltipRef = useRef<HTMLDivElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setTimeout(() => setIsAnimated(true), 100);
//   }, []);

//   useEffect(() => {
//     if (hovered && spanRef.current && dotRef.current) {
//       const spanRect = spanRef.current.getBoundingClientRect();
//       const dotRect = dotRef.current.getBoundingClientRect();
//       const tooltipHeight = tooltipRef.current?.offsetHeight || 50;

//       setTooltipPos({
//         top: dotRect.top + window.scrollY - tooltipHeight - 5,
//         left: dotRect.left + window.scrollX + dotRect.width / 2,
//       });
//     }
//   }, [hovered]);

//   const handleMouseEnter = () => setHovered(true);
//   const handleMouseLeave = (event: React.MouseEvent) => {
//     if (tooltipRef.current?.contains(event.relatedTarget as Node)) {
//       return;
//     }
//     setHovered(false);
//   };

//   const sortedColors = Object.entries(values)
//     .filter(([key]) => ["green", "blue", "red"].includes(key))
//     .sort((a, b) => b[1] - a[1]);

//   const activeOptions = [
//     "projectedValue",
//     "loanComplete",
//     "outstandingLoan",
//     "propertySold",
//     "propertyAdded",
//     "equity",
//     "investmentOpportunity",
//   ].filter((option) => values[option]);

//   return (
//     <>
//       <div
//         ref={spanRef}
//         className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start overflow-hidden"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="w-full bg-[#ECECF0] h-[50px] relative">
//           {activeOptions.length > 0 && (
//             <div
//               ref={dotRef}
//               className="absolute left-1/2 -translate-x-1/2 top-[-10px] z-20 w-4 h-4 bg-pink-500 border-[3px] border-white rounded-full shadow-lg"
//             ></div>
//           )}
//         </div>

//         {sortedColors.map(([color, value]) => (
//           <div
//             key={color}
//             className={`w-full rounded-[3px] shadow-lg transition-all duration-700 ease-out
//               ${color === "green"
//                 ? "bg-[#00E5AD]"
//                 : color === "blue"
//                   ? "bg-[#598CFF]"
//                   : "bg-[#F45050]"
//               }`}
//             style={{
//               height: isAnimated ? `${value}%` : "0%",
//             }}
//           />
//         ))}
//       </div>

//       {hovered && values.details &&
//         createPortal(
//           <div
//             ref={tooltipRef}
//             className="fixed bg-white shadow-xl p-3 text-xs rounded-md border border-gray-300 w-52 z-[9999]"
//             style={{
//               top: tooltipPos.top,
//               left: tooltipPos.left,
//               transform: "translateX(-50%)",
//             }}
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//           >
//             <div
//               className="absolute left-1/2 bottom-[-10px] w-5 h-5 bg-white rotate-45"
//               style={{
//                 transform: "translateX(-50%) rotate(45deg)",
//                 borderRadius: "4px",
//               }}
//             ></div>

//             <strong className="block text-sm text-black mb-1">
//               {values.details.title}
//             </strong>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//               <p className="text-gray-700">
//                 Value: <span className="font-bold">${values.details.value}</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
//               <p className="text-gray-700">
//                 Loan: <span className="font-bold">${values.details.loan}</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//               <p className="text-gray-700">
//                 Equity: <span className="font-bold">${values.details.equity}</span>
//               </p>
//             </div>
//           </div>,
//           document.body
//         )}
//     </>
//   );
// };

// export default CustomSpan;  



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
    .sort((a, b) => b[1] - a[1]);

  const activeOptions = [
    "projectedValue",
    "loanComplete",
    "outstandingLoan",
    "propertySold",
    "propertyAdded",
    "equity",
    "investmentOpportunity",
  ].filter((option) => values[option]);

  // Define color mapping for each option
  const optionColors: Record<string, string> = {
    projectedValue: "bg-pink-500",
    loanComplete: "bg-green-500",
    outstandingLoan: "bg-purple-500",
    propertySold: "bg-red-500",
    propertyAdded: "bg-blue-500",
    equity: "bg-yellow-500",
    investmentOpportunity: "bg-orange-500",
  };

  return (
    <>
      <div
        ref={spanRef}
        className="relative w-[20px] h-[100px] bg-[#ECECF0] rounded-t-sm rounded-b-lg shadow-2xl flex flex-col justify-end items-start overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div className="w-full bg-[#ECECF0] h-[50px] relative">
          {activeOptions.length > 0 && (
            <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] z-20 flex flex-col gap-1">
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
            className={`w-full rounded-[3px] shadow-lg transition-all duration-700 ease-out
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

      {hovered && values.details &&
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