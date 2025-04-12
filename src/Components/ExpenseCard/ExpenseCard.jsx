import React, { useState } from "react";

function ExpenseCard({ expense, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState(expense);

  const handleEdit = () => {
    if (
      !edited.title ||
      !edited.amount ||
      !edited.category ||
      !edited.date ||
      isNaN(edited.amount)
    ) {
      alert("Invalid input.");
      return;
    }
    onEdit(edited);
    setIsEditing(false);
  };

  return (
    <div className="expense-card">
      {isEditing ? (
        <>
          <input
            value={edited.title}
            onChange={(e) => setEdited({ ...edited, title: e.target.value })}
          />
          <input
            value={edited.amount}
            onChange={(e) =>
              setEdited({ ...edited, amount: parseFloat(e.target.value) })
            }
          />
          <input
            value={edited.category}
            onChange={(e) => setEdited({ ...edited, category: e.target.value })}
          />
          <input
            type="date"
            value={edited.date}
            onChange={(e) => setEdited({ ...edited, date: e.target.value })}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <p>
            <strong>{expense.title}</strong> - ₹{expense.amount}
          </p>
          <p>
            {expense.category} | {expense.date}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(expense.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default ExpenseCard;
