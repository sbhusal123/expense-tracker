import React, { useContext } from "react";
import { GlobalContext, IGlobalState } from "../context/GlobalState";

export const IncomeExpenses: React.FC = () => {
    const { transactions } = useContext<IGlobalState>(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense =
        amounts
            .filter(amount => amount < 0)
            .reduce((acc, item) => (acc += item), 0) * -(1).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
