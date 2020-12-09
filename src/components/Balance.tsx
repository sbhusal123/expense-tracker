import React, { useContext } from "react";

// Types
import { IGlobalState } from "../context/GlobalState";

// State Context
import { GlobalContext } from "../context/GlobalState";

export const Balance: React.FC = () => {
    const { transactions } = useContext<IGlobalState>(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1> ${total}</h1>
        </>
    );
};
