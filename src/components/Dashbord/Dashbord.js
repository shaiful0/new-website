import React from 'react';
import { BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashbord.css'

const Dashbord = () => {
  const data =
    [
      {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
      },
      {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
      },
      {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
      },
      {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
      },
      {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
      },
      {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
      }
    ]
  return (
    <div className='bar-charts'>
      <div className="">
        <LineChart width={600} height={400} data={data}>
          <Line type={"monotone"} dataKey={"investment"}></Line>
          <CartesianGrid stroke='#ccc' strokeDasharray={"5 5"}></CartesianGrid>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div>
        <BarChart width={800} height={500} data={data}>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis dataKey={"sell"}></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </div>

    </div>
  );
};

export default Dashbord;