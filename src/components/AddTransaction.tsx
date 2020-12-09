import React, { useContext } from "react";

// Custom Hooks
import { useInput } from "../services/FormInputHooks";

// Types
import { IGlobalState } from "../context/GlobalState";

// State Context
import { GlobalContext } from "../context/GlobalState";

// Action Creator
import { addTransaction } from "../context/ActionCreator";

export const AddTransaction: React.FC = () => {
    // States
    const [text, bindText, resetText] = useInput<string>("");
    const [amount, bindAmount, resetAmount] = useInput<number>(0.0);

    // GLobal States
    const { transactions, dispatch } = useContext<IGlobalState>(GlobalContext);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text.trim() === "" || amount === 0) {
            alert("Invalid Transaction");
            return;
        }

        // Add new transaction to the global state
        addTransaction(
            {
                id: transactions.length + 1,
                amount: +amount,
                text
            },
            dispatch
        );

        // Clear the form
        handleFormReset();
    };

    const handleFormReset = () => {
        resetText();
        resetAmount();
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        {...bindText}
                        placeholder="Enter text.."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        {...bindAmount}
                        placeholder="Enter amount.."
                    />
                </div>
                <div>
                    <button className="btn"> Add Transaction</button>
                    <button
                        className="btn"
                        type="button"
                        onClick={() => handleFormReset()}
                        style={{ background: "red" }}
                    >
                        {" "}
                        Clear
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddTransaction;
