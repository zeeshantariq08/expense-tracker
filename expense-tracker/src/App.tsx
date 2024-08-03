import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from "./components/Form";

function App() {

  return <div className="container">
    <div className="row m-5">
      <h2>Expense Tracker</h2>
      <Form/>
    </div>

  </div>
}

export default App
