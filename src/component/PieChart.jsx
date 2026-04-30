import React,{useContext,useState,useEffect} from "react";
import {PieChart,Pie,Sector,Cell,ResponsiveContainer} from recharts
import PieLable from './PieLable'
import { transationContext } from "../context/allcontext";
import useChartData from './useChartData'
import { orange } from "@mui/material/colors";

const color=['#ff9304','#a000ff','#fde006']

const radian = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * radian);
  const y = cy + radius * Math.sin(-midAngle * radian);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComp = () => {
    const chartData = useChartData([
        {name: 'Entertainment', value: 0},
        {name: 'Food', value: 0},
        {name: 'Travel', value: 0},
    ])
    return (
        <div className="pieChart">
            <div className="Pie">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={chartData}
                        cx="50%"
                    cy="50%"
                    labelLine={false}
                    lable={renderCustomizedLabel}
                    outerRadius={99}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={color[index % color.length]} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="pieLabelDiv">
            <PieLable name='Food' color={color[1]}/>
            <PieLable name='Entertainment' color={color[0]}/>
            <PieLable name='Travel' color={color[2]}/>
        </div>
        </div>
    );
};

export default PieChartComp;