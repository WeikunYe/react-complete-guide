import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES =  [
  {id: "el1", title: 'Car Insurance', amount: 269.46, date: new Date(2021, 2, 28)},
  {id: "el2", title: 'Car Insurance', amount: 269.46, date: new Date(2021, 5, 28)},
  {id: "el3", title: 'Car Insurance', amount: 269.46, date: new Date(2021, 2, 28)},
  {id: "el4", title: 'Car Insurance', amount: 269.46, date: new Date(2021, 7, 28)},
  {id: "el5", title: 'Car Insurance', amount: 269.46, date: new Date(2021, 12, 28)}
]

function App() {
  console.log("Author Weikun");
  console.log("Git repo: https://github.com/WeikunYe/react-complete-guide-project-1")
  const[expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;