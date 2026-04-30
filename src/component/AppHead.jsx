import React from "react";
import Card from "./card";
import PieChartComp from "./pieChart";


const AppHead = props=> {
    const {balance, expenses} = props
    return (
        <header className="app-header">
            <Card text="Wallet Balance" value={balance} />
            <Card text="Expenses" value={expenses} />
            <PieChartComp />
        </header>
    );
};

export default AppHead;
