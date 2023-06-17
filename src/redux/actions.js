// actions.js
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const EDIT_TRANSACTION = "EDIT_TRANSACTION"; // Add the constant for edit transaction

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const deleteTransaction = (transactionId) => ({
  type: DELETE_TRANSACTION,
  payload: transactionId,
});

export const editTransaction = (transaction) => ({ // Add the editTransaction action
  type: EDIT_TRANSACTION,
  payload: transaction,
});
