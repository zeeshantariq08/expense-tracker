

const Form  = ()=>{
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input type="number" className="form-control" id="amount"/>
            </div>

            <button className="btn btn-primary">Submit</button>

        </form>
    )

}

export default Form