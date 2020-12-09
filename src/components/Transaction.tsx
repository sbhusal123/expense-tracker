import React, { useContext } from "react";

// Types
import { ITransaction, IGlobalState } from "../context/GlobalState";

// State Context
import { GlobalContext } from "../context/GlobalState";

// Action Creators
import { deleteTransaction } from "../context/ActionCreator";

const Transaction: React.FC<ITransaction> = ({ amount, id, text }) => {
    const sign = amount < 0 ? "-" : "+";
    const borderClass = amount < 0 ? "minus" : "plus";

    const { dispatch } = useContext<IGlobalState>(GlobalContext);

    return (
        <div>
            <li className={borderClass}>
                {text}{" "}
                <span>
                    {sign}${Math.abs(amount)}
                </span>
                <button
                    className="delete-btn"
                    onClick={() => deleteTransaction(id, dispatch)}
                >
                    X
                </button>
            </li>
        </div>
    );
};

export default Transaction;
