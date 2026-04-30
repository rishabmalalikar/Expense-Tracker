import React from "react";
import TransactionBody from '../transactionBody'

const Transactions = () => {
    return (
        <div className="transactions">
            <h2>Recent transactions</h2>
            <TransactionBody />
        </div>
    );
};

export default Transactions;
