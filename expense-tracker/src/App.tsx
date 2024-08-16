import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";

function App() {

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: 'rent',
      amount: 1200,
      category: 'utilities'
    },
    {
      id: 2,
      name: 'rent 2',
      amount: 1400,
      category: 'utilities'
    },
    {
      id: 3,
      name: 'rent 3',
      amount: 1400,
      category: 'utilities'
    },
    {
      id: 4,
      name: 'rent 4',
      amount: 1400,
      category: 'utilities'
    },
  ])


  return <div className="container">
    <div className="row m-5">
      <h2>Expense Tracker</h2>
      {/*<Form/>*/}

      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id != id))}/>

    </div>

  </div>
}

export default App
