

// import React from "react";
// import CustomSpan from "./component/graph";

// const data = [
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
//   { green: 40, blue: 40, red: 40 },
// ];

// const CircleChart: React.FC = () => {
//   const totalSpans = data.length;
//   const angleStep = 360 / totalSpans;

//   return (
//     <div className="relative w-[300px] h-[300px] flex justify-center items-center">
//       {data.map((values, index) => (
//         <div
//           key={index}
//           className="absolute"
//           style={{
//             transform: `rotate(${index * angleStep}deg) translate(100px)`,
//           }}
//         >
//           <CustomSpan values={values} rotation={index * angleStep} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CircleChart;



// import React from "react";
// import CustomSpan from "./component/graph";

// const data = [
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 30, blue: 40, red: 30 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 20, blue: 50, red: 30 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 20, blue: 50, red: 30 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 20, blue: 50, red: 30 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 20, blue: 50, red: 30 },
//   { green: 25, blue: 35, red: 40 },
//   { green: 25, blue: 35, red: 40 },
// ];

// const CircleChart: React.FC = () => {
//   const totalSpans = data.length;
//   const angleStep = 360 / totalSpans;

//   return (
//     <div className="relative w-[400px] h-[400px] flex justify-center items-center">
//       {/* Background Circle */}
//       <div className="absolute w-[300px] h-[300px] bg-white rounded-full shadow-lg" />

//       {data.map((values, index) => (
//         <div
//           key={index}
//           className="absolute"
//           style={{
//             transform: `rotate(${index * angleStep}deg) translate(150px) rotate(${index * -angleStep}deg)`,
//             transformOrigin: "center",
//           }}
//         >
//           <CustomSpan values={values} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CircleChart;



// import React from "react";
// import CustomSpan from "./component/graph";

//   const data = [
//     { green: 10, blue: 12, red: 14 , propertyAdded: true, details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" }  },
//     { green: 12, blue: 14, red: 16 },
//     { green: 14, blue: 16, red: 18 },
//     { green: 16, blue: 18, red: 20 },
//     { green: 18, blue: 20, red: 22 },
//     { green: 20, blue: 22, red: 24 },
//     { green: 22, blue: 24, red: 26 },
//     { green: 24, blue: 26, red: 28 },
//     { green: 26, blue: 28, red: 30 },
//     { green: 28, blue: 30, red: 32 },
//     { green: 30, blue: 32, red: 34 },
//     { green: 32, blue: 34, red: 36 },
//     { green: 34, blue: 36, red: 38 },
//     { green: 36, blue: 38, red: 40 },
//     { green: 38, blue: 40, red: 42 },
//     { green: 40, blue: 42, red: 44 },
//     { green: 42, blue: 44, red: 46 },
//     { green: 44, blue: 46, red: 48 },
//     { green: 46, blue: 48, red: 50 },
//     { green: 48, blue: 50, red: 52 },
//     { green: 50, blue: 52, red: 54 },
//     { green: 52, blue: 54, red: 56 },
//     { green: 54, blue: 56, red: 58 },
//     { green: 56, blue: 58, red: 60 },
//     { green: 58, blue: 60, red: 62 },
//     { green: 60, blue: 62, red: 64 },
//     { green: 62, blue: 64, red: 66 },
//     { green: 64, blue: 66, red: 68 },
//     { green: 66, blue: 68, red: 70 },
//   ];

// const CircleChart: React.FC = () => {
//   const totalSpans = data.length;
//   const angleStep = 360 / totalSpans;

//   return (
//     <div className="relative w-[400px] h-[400px] flex justify-center items-center">
//       {/* Background Circle */}
//       {data.map((values, index) => (
//         <div
//           key={index}
//           className="absolute bg-[#ECECF0] shadow-2xl"
//           style={{
//             transform: `rotate(${index * angleStep}deg) translate(140px) rotate(${90}deg)`, // Adjusted for better curvature
//             transformOrigin: "center",
//           }}
//         >
//           <CustomSpan values={values} />
//         </div>  
//       ))}
//     </div>
//   );
// };

// export default CircleChart;



// CircleChart Component
import React from "react";
import CustomSpan from "./component/graph";

// const data = [
// {
//   green: 10,
//   blue: 12,
//   red: 14,
//   propertyAdded: true,
//   projectedValue: true,
//   details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
// },
//   { green: 12, blue: 14, red: 16, loanComplete: true },
//   { green: 14, blue: 16, red: 18, outstandingLoan: true },
//   { green: 16, blue: 18, red: 20, propertySold: true },
//   { green: 18, blue: 20, red: 22, investmentOpportunity: true },
//   { green: 20, blue: 22, red: 24, equity: true },
//   { green: 22, blue: 24, red: 26 },
//   { green: 24, blue: 26, red: 28 },
//   { green: 26, blue: 28, red: 30 },
//   { green: 28, blue: 30, red: 32 },
//   { green: 30, blue: 32, red: 34 },
// ];

const data = [
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    projectedValue: true,propertySold:true, 
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  { green: 12, blue: 14, red: 16 },
  { green: 14, blue: 16, red: 18 },
  { green: 16, blue: 18, red: 20 },
  { green: 18, blue: 20, red: 22 },
  { green: 20, blue: 22, red: 24 },
  { green: 22, blue: 24, red: 26 },
  { green: 24, blue: 26, red: 28 },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  { green: 28, blue: 30, red: 32 },
  { green: 30, blue: 32, red: 34 },
  { green: 32, blue: 34, red: 36 },
  { green: 34, blue: 36, red: 38 },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  { green: 38, blue: 40, red: 42 },
  { green: 40, blue: 42, red: 44 },
  { green: 42, blue: 44, red: 46 },
  { green: 44, blue: 46, red: 48 },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  { green: 48, blue: 50, red: 52 },
  { green: 50, blue: 52, red: 54 },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  { green: 54, blue: 56, red: 58 },
  { green: 56, blue: 58, red: 60 },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  { green: 64, blue: 64, red: 64 },
  { green: 62, blue: 64, red: 66 },
  { green: 64, blue: 66, red: 68 },
  { green: 66, blue: 68, red: 70 }, { green: 66, blue: 68, red: 70 },
  { green: 66, blue: 68, red: 70 },
  { green: 66, blue: 68, red: 70 },
  { green: 66, blue: 68, red: 70 },
  { green: 66, blue: 68, red: 70 },
  { green: 66, blue: 68, red: 70 },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },
  { green: 48, blue: 50, red: 52 },
  { green: 50, blue: 52, red: 54 },
  { green: 48, blue: 50, red: 52 },
  { green: 50, blue: 52, red: 54 },
  {
    green: 10,
    blue: 12,
    red: 14,
    propertyAdded: true,
    details: { title: "sdf;gnsdjfhbkjdfgb", value: "45", loan: "78857", equity: "122356" },
  },


];

const CircleChart: React.FC = () => {
  const totalSpans = data.length;
  const angleStep = 360 / totalSpans;

  return (
    <div className="relative w-[700px] h-[700px] flex justify-center items-center">
      {data.map((values, index) => (
        <div
          key={index}
          className="absolute bg-[#ECECF0] shadow-2xl"
          style={{
            transform: `rotate(${index * angleStep}deg) translate(190px) rotate(${90}deg)`,
            // transformOrigin: "center",
          }}
        >
          <CustomSpan index={index} angleStep={angleStep} values={values} />
        </div>
      ))}
    </div>
  );
};

export default CircleChart;

