import React from 'react';
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
    const showSortedData = () => {
        // console.log(chartData.sort((a,b) => b.value - a.value))
        return chartData.sort((a,b) => b.value - a.value);
        
    }

    console.log(showSortedData())
    
    return (
        <div className='TopExpensesBody'  onClick={showSortedData}>
            <ResponsiveContainer  >
                <BarChart data={showSortedData()} layout="vertical" barSize={30}>
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