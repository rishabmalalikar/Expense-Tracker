import React,{ useContext,useState,useEffect} from "react";
// import { transationContext } from "../context/allcontext";
import useChartData from "./useChartData";
import { BarChart,Bar,XAxis,YAxis,ResponsiveContainer } from "recharts";

const TopExpensesBody = () => {
    const chartData = useChartData([
        {name: 'Food', value: 0},
        {name: 'Entertainment', value: 0},
        {name: 'Travel', value: 0},
    ]);

    const showSortedData = () => {
        return chartData.sort((a,b) => b.value - a.value);
    };



    return (
        <div className="topexpensesbody" style={{height:"100px"}} onClick={showSortedData}>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart data={showSortedData()} layout="vertical" barSize={30}>
                    <XAxis type='number' hide />
                    <YAxis type="category" width={120} dataKey="name" />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default TopExpensesBody;
