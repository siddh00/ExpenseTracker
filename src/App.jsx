import React, { useState, useEffect } from "react";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import ExpenseSummary from "./Components/ExpenseSummary/ExpenseSummary";
import FilterSortBar from "./Components/FilterSortBar/FilterSortBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import "./App.css";

const getInitialExpenses = () => {
  const data = localStorage.getItem("expenses");
  return data ? JSON.parse(data) : [];
};

function App() {
  const [expenses, setExpenses] = useState(getInitialExpenses);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
    alert("Expense added successfully!");
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
    alert("Expense deleted!");
  };

  const editExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((e) => (e.id === updatedExpense.id ? updatedExpense : e))
    );
    alert("Expense updated!");
  };

  return (
    <div className="container">
      <h1 className="title">Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />
      <SearchBar query={searchQuery} onSearch={setSearchQuery} />
      <FilterSortBar
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <ExpenseSummary expenses={expenses} />
      <ExpenseList
        expenses={expenses}
        filter={filter}
        sortBy={sortBy}
        searchQuery={searchQuery}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
    </div>
  );
}

export default App;
