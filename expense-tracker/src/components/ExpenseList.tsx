interface Expense {
    id: number
    name: string
    amount: number
    category: string

}

interface Props {
    expenses: Expense[],
    onDelete: (id: number) => void
}

const ExpenseList = ({expenses, onDelete}: Props) => {
    if (!expenses || expenses.length === 0) {
        return null;
    }
    return <div>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {expenses.map(expense => <tr key={expense.id}>

                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                    <button onClick={() => onDelete(expense.id)} className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>)}
            </tbody>

            <tfoot>
            <tr>
                <td>Total</td>
                <td>${expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)}</td>
                <td></td>
                <td></td>
            </tr>

            </tfoot>
        </table>
    </div>
}

export default ExpenseList