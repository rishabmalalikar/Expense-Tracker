import React from 'react';
import { useMemo } from "react";
//styles
// import "./TopExpenseBody.css";
//hooks
import useChartData from '../customHooks/useChartData';
//library
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const TopExpenseBody = () => {
    //hooks
    const chartData  = useChartData([
            { name: 'food', value: 0 },
            { name: 'entertainment', value: 0 },
            { name: 'travel', value: 0 },
        ]);
    
    //functions
   

const sortedData = useMemo(() => {
  return [...chartData].sort((a, b) => b.value - a.value);
}, [chartData]);

    
    
    return (
        <div className='TopExpensesBody'  >
            <ResponsiveContainer  >
            <BarChart data={sortedData} layout="vertical" barSize={30}>
                    <XAxis type='number' hide/>
                    <YAxis type="category" width={120} dataKey="name"/>
                    <Bar dataKey="value" fill="#8784D2" />
                    {/* <Tooltip/> */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TopExpenseBody;