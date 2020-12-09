import React, { useContext } from "react";

// Component
import Transaction from "./Transaction";

// Types
import { IGlobalState } from "../context/GlobalState";

// State Context
import { GlobalContext } from "../context/GlobalState";

export const TransactionList: React.FC = () => {
    const { transactions } = useContext<IGlobalState>(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction {...transaction} key={transaction.id} />
                ))}
            </ul>
        </>
    );
};
