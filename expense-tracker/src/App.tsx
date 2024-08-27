import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

import categories from "./categories";

function App() {

  const [selectedCategory, setSelectedCategory] = useState('');
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

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;


  return <div className="container">
    <div className="row m-5">
      <h2>Expense Tracker</h2>
      <div className="mb-5">
          <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
      </div>


      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id != id))}/>

    </div>

  </div>
}

export default App
