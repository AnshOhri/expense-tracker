import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Register",
    amount: 150,
    date: new Date(2022, 10, 14),
  },
  { id: "e2", title: "Laptop", amount: 80000, date: new Date(2021, 8, 9) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 15000,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "Wooden Desk",
    amount: 30000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
