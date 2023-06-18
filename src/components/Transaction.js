// Transaction.js
import React, { useState } from "react";

export default function Transaction({ transaction, deleteTransaction, editTransaction }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(transaction.text);
  const [updatedAmount, setUpdatedAmount] = useState(transaction.amount);
  const [updatedDate, setUpdatedDate] = useState(transaction.date);
  const [updatedCategory, setUpdatedCategory] = useState(transaction.category);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updatedTransaction = {
      ...transaction,
      text: updatedText,
      amount: Number(updatedAmount),
      date: updatedDate,
      category: updatedCategory,
    };
    editTransaction(updatedTransaction);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const renderViewMode = () => (
    <>
      <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      <span className="category">Category: {transaction.category}</span>
        {transaction.text}
        <span>
          <span style={{ marginRight: 8 }}>{transaction.date}</span>
          {transaction.amount >= 0 ? "+" : "-"}₵{Math.abs(transaction.amount)}
        </span>
       
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </>
  );

  const renderEditMode = () => (
    <>
      <li>
      <input
          value={updatedCategory}
          onChange={(e) => setUpdatedCategory(e.target.value)}
        />
        <input
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
         <input
          value={updatedDate}
          onChange={(e) => setUpdatedDate(e.target.value)}
          type="date"
        />
        <input
          value={updatedAmount}
          onChange={(e) => setUpdatedAmount(e.target.value)}
        />
       
        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </li>
    </>
  );

  return isEditing ? renderEditMode() : renderViewMode();
}
