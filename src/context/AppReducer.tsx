// Types Import
import { IGlobalState, ITransaction } from "./GlobalState";

// Custom Action Types
export type ACTIONTYPE =
    | { type: "DELETE_TRANSACTION"; payload: number }
    | { type: "ADD_TRANSACTION"; payload: ITransaction };

// Transaction Reducer
const AppReducer = (state: IGlobalState, action: ACTIONTYPE) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction.id !== action.payload
                )
            };
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        default:
            return state;
    }
};

export default AppReducer;
