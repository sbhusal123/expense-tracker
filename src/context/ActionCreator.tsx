// Types
import { ITransaction } from "./GlobalState";

export function deleteTransaction(id: number, dispatch: any): void {
    dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
    });
    return;
}

export function addTransaction(
    newTransaction: ITransaction,
    dispatch: any
): void {
    dispatch({
        type: "ADD_TRANSACTION",
        payload: newTransaction
    });

    return;
}
