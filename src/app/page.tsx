import React from 'react'
import Circle, { GraphData } from './component/circle'

const page = () => {

  const data: GraphData[] = [
    {
      year: "2025",
      properties: [
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 30, outstandingLoan: 30, equity: 30 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 1, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2026",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 15, outstandingLoan: 15, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 15, outstandingLoan: 15, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2027",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 17, outstandingLoan: 17, equity: 17 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 17, outstandingLoan: 17, equity: 17 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2028",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 36, outstandingLoan: 36, equity: 36 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },

      ],
    },
    {
      year: "2029",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 40, outstandingLoan: 40, equity: 40 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },

      ],
    },
    {
      year: "2030",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 42, outstandingLoan: 42, equity: 42 },
          milestones: { loanComplete: 1, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },

      ],
    },
    {
      year: "2031",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 44, outstandingLoan: 44, equity: 44 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2032",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 46, outstandingLoan: 46, equity: 46 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },

      ],
    },
    {
      year: "2033",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 48, outstandingLoan: 48, equity: 48 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2034",
      properties: [
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 50, outstandingLoan: 50, equity: 50 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2035",
      properties: [
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 52, outstandingLoan: 52, equity: 52 },
          milestones: { loanComplete: 0, propertySold: 1, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2036",
      properties: [
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2037",
      properties: [
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2038",
      properties: [
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2039",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2040",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 1, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2041",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2042",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2043",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2044",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 1, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 1, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2045",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 1 },
        },
      ],
    },
    {
      year: "2046",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2047",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2048",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 1, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2049",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2050",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 1, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2051",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2052",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2053",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2054",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2055",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 1, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2056",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2057",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2058",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2059",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2060",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 1, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2061",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2062",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 30, equity: 20 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 45, outstandingLoan: 25, equity: 15 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2063",
      properties: [
        {
          propertyName: "test2",
          amounts: { projectedValue: 60, outstandingLoan: 0, equity: 80 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "test1 ",
          amounts: { projectedValue: 60, outstandingLoan: 0, equity: 80 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
    {
      year: "2064",
      properties: [
        {
          propertyName: "111 Geldart Road",
          amounts: { projectedValue: 50, outstandingLoan: 0, equity: 60 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
        {
          propertyName: "52 Cassandra St.",
          amounts: { projectedValue: 50, outstandingLoan: 0, equity: 60 },
          milestones: { loanComplete: 0, propertySold: 0, propertyAdded: 0, investmentOpportunity: 0 },
        },
      ],
    },
  ];

  const color = {
    lonecomplete: "#9747FF",
    propertysold: "#FF3ADB",
    propertyadded: "#25DC00",
    investmentopportunity: "#E5D200",
    projectedvalue: "#00E5AD",
    outstandingloan: "#F45050",
    equity: "#598CFF",
  }

  return (
    <Circle data={data} width={517} color={color} />
  )
}

export default page
