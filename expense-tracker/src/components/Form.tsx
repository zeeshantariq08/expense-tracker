import {FormEvent, useRef} from "react";


const Form  = ()=>{

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = {
        name : "",
        age:0
    }

    const handleSubmit = (event:FormEvent)=>{
        event.preventDefault();
        if (nameRef.current)
            person.name =(nameRef.current.value);
        if (ageRef.current)
            person.age =parseInt(ageRef.current.value);

        console.log(person)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input ref={nameRef} type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input ref={ageRef} type="number" className="form-control" id="age"/>
            </div>

            <button className="btn btn-primary">Submit</button>

        </form>
    )

}

export default Form