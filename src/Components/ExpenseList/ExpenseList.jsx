import React from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import "./index.css";

function ExpenseList({
  expenses,
  filter,
  sortBy,
  searchQuery,
  onDelete,
  onEdit,
}) {
  let filtered = expenses.filter((e) =>
    filter ? e.category === filter : true
  );

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
    );
  }

  if (sortBy === "date") {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === "amount") {
    filtered.sort((a, b) => b.amount - a.amount);
  }

  if (filtered.length === 0) return <p>No expenses found.</p>;

  return (
    <div className="expense-list">
      {filtered.map((e) => (
        <ExpenseCard
          key={e.id}
          expense={e}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
