import React, { createContext, useReducer } from "react";
import { ACTIONTYPE } from "./AppReducer";

import AppReducer from "./AppReducer";

// Transaction Types
export interface ITransaction {
    id: number;
    text: string;
    amount: number;
}

// Global Props and dispatch for Context Apis
export interface IGlobalState {
    transactions: Array<ITransaction>;
    dispatch?: React.Dispatch<ACTIONTYPE>;
}

// Props Type For Component With Child Props
interface IChildComponent {
    children: React.ReactNode;
}

// Initial State
const InitialState: IGlobalState = {
    transactions: [
        {
            id: 1,
            text: "Flower",
            amount: -20
        },
        {
            id: 2,
            text: "Salary",
            amount: 300
        },
        {
            id: 3,
            text: "Book",
            amount: -10
        },
        {
            id: 4,
            text: "Camera",
            amount: 150
        }
    ]
};

// Create Context
export const GlobalContext = createContext<IGlobalState>(InitialState);

// Provider Component Rendering Childern Component
export const GlobalProvider: React.FC<IChildComponent> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions, dispatch: dispatch }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
