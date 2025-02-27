import React from 'react'
import Circle, { GraphData, PropertyData } from './component/circle'

const page = () => {
  const data: GraphData[] = Array.from({ length: 40 }, (_, index) => {
    const year = (2025 + index).toString();
    const baseValue = 0.1 + index * 2;

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


  // const staticYears = [
  //   "2025", "2026", "2027", "2028", "2029",
  //   "2030", "2031", "2032", "2033", "2034",
  //   "2035", "2036", "2037", "2038", "2039",
  //   "2040", "2041", "2042", "2043", "2044",
  //   "2045", "2046", "2047", "2048", "2049",
  //   "2050", "2051", "2052", "2053", "2054",
  //   "2055", "2056", "2057", "2058", "2059",
  //   "2060", "2061", "2062", "2063", "2064",
  //   "2065", "2066", "2067", "2068", "2069",
  // ];

  // const data: GraphData[] = Array.from({ length: staticYears.length }, (_, index) => {
  //   const year = staticYears[index]; // Use predefined years
  //   const baseValue = 0.1 + index * 2;

  //   return {
  //     year,
  //     amounts: {
  //       projectedValue: baseValue,
  //       outstandingLoan: baseValue + 2,
  //       equity: baseValue + 4,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   };
  // });

  // const data: GraphData[] = [
    // {
    //   year: "2025",
    //   amounts: {
    //     projectedValue: 12,
    //     outstandingLoan: 14,
    //     equity: 16,
    //   },
    //   milestones: {
    //     loanComplete: 1,
    //     propertySold: 1,
    //     propertyAdded: 0,
    //     investmentOpportunity: 0,
    //   },
    // },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 14,
  //       outstandingLoan: 16,
  //       equity: 18,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 16,
  //       outstandingLoan: 18,
  //       equity: 20,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 18,
  //       outstandingLoan: 20,
  //       equity: 22,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 20,
  //       outstandingLoan: 22,
  //       equity: 24,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 22,
  //       outstandingLoan: 24,
  //       equity: 26,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 24,
  //       outstandingLoan: 26,
  //       equity: 28,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 26,
  //       outstandingLoan: 28,
  //       equity: 30,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 28,
  //       outstandingLoan: 30,
  //       equity: 32,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 30,
  //       outstandingLoan: 32,
  //       equity: 34,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 32,
  //       outstandingLoan: 34,
  //       equity: 36,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 34,
  //       outstandingLoan: 36,
  //       equity: 38,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 36,
  //       outstandingLoan: 38,
  //       equity: 40,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 38,
  //       outstandingLoan: 40,
  //       equity: 42,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 40,
  //       outstandingLoan: 42,
  //       equity: 44,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 42,
  //       outstandingLoan: 44,
  //       equity: 46,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 44,
  //       outstandingLoan: 46,
  //       equity: 48,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 46,
  //       outstandingLoan: 48,
  //       equity: 50,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 48,
  //       outstandingLoan: 50,
  //       equity: 52,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 50,
  //       outstandingLoan: 52,
  //       equity: 54,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 52,
  //       outstandingLoan: 54,
  //       equity: 56,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 54,
  //       outstandingLoan: 56,
  //       equity: 58,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 56,
  //       outstandingLoan: 58,
  //       equity: 60,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 58,
  //       outstandingLoan: 60,
  //       equity: 62,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 60,
  //       outstandingLoan: 62,
  //       equity: 64,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2026",
  //     amounts: {
  //       projectedValue: 62,
  //       outstandingLoan: 64,
  //       equity: 66,
  //     },
  //     milestones: {
  //       loanComplete: 0,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2026",
  //     amounts: {
  //       projectedValue: 64,
  //       outstandingLoan: 66,
  //       equity: 68,
  //     },
  //     milestones: {
  //       loanComplete: 0,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2026",
  //     amounts: {
  //       projectedValue: 66,
  //       outstandingLoan: 68,
  //       equity: 70,
  //     },
  //     milestones: {
  //       loanComplete: 0,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2026",
  //     amounts: {
  //       projectedValue: 68,
  //       outstandingLoan: 70,
  //       equity: 72,
  //     },
  //     milestones: {
  //       loanComplete: 0,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2026",
  //     amounts: {
  //       projectedValue: 70,
  //       outstandingLoan: 72,
  //       equity: 74,
  //     },
  //     milestones: {
  //       loanComplete: 0,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 72,
  //       outstandingLoan: 74,
  //       equity: 76,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 74,
  //       outstandingLoan: 76,
  //       equity: 78,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 80,
  //       outstandingLoan: 82,
  //       equity: 84,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 82,
  //       outstandingLoan: 84,
  //       equity: 86,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 84,
  //       outstandingLoan: 86,
  //       equity: 88,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 86,
  //       outstandingLoan: 88,
  //       equity: 90,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 88,
  //       outstandingLoan: 90,
  //       equity: 92,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 90,
  //       outstandingLoan: 92,
  //       equity: 94,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 92,
  //       outstandingLoan: 94,
  //       equity: 96,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 94,
  //       outstandingLoan: 96,
  //       equity: 98,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 96,
  //       outstandingLoan: 98,
  //       equity: 100,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  //   {
  //     year: "2025",
  //     amounts: {
  //       projectedValue: 98,
  //       outstandingLoan: 100,
  //       equity: 102,
  //     },
  //     milestones: {
  //       loanComplete: 1,
  //       propertySold: 0,
  //       propertyAdded: 0,
  //       investmentOpportunity: 0,
  //     },
  //   },
  // ];
  
  // const data: { [year: string]: PropertyData[] } = {
  //   "2025": [
  //     {
  //       propertyName: "111 Geldart Road",
  //       amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
  //       milestones: { loanComplete: 0, propertySold: 1, propertyAdded: 0, investmentOpportunity: 0 },
  //     },
  //     {
  //       propertyName: "52 Cassandra St.",
  //       amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
  //       milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 1, investmentOpportunity: 1 },
  //     },
  //   ],
  //   "2026": [
  //     {
  //       propertyName: "111 Geldart Road",
  //       amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
  //       milestones: { loanComplete: 0, propertySold: 1, propertyAdded: 0, investmentOpportunity: 0 },
  //     },
  //     {
  //       propertyName: "52 Cassandra St.",
  //       amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
  //       milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 1, investmentOpportunity: 1 },
  //     },
  //   ],
  // };

  console.log(data);


  return (
    <Circle data={data} width={517} />
  )

}

export default page