import React from "react";
import "./index.css";

function ExpenseSummary({ expenses }) {
  const currentMonth = new Date().getMonth();

  const monthlyExpenses = expenses.filter(
    (e) => new Date(e.date).getMonth() === currentMonth
  );

  const total = monthlyExpenses.reduce((sum, e) => sum + e.amount, 0);

  const categories = {};
  monthlyExpenses.forEach((e) => {
    categories[e.category] = (categories[e.category] || 0) + e.amount;
  });

  return (
    <div className="summary">
      <h3>Total This Month: ₹{total.toFixed(2)}</h3>
      <ul className="listofExpenses">
        {Object.entries(categories).map(([cat, amt]) => (
          <li key={cat}>
            {cat}: ₹{amt.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseSummary;
