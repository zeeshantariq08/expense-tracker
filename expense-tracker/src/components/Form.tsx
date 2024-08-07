import {FormEvent, useRef, useState} from "react";

import {FieldValues, useForm} from "react-hook-form";


const Form  = ()=>{
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }
    // const [person, setPerson] = useState({
    //     name: "",
    //     age:0
    // })

    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // const person = {
    //     name : "",
    //     age:0
    // }

    // const handleSubmit = (event:FormEvent)=>{
    //     event.preventDefault();
    //     // if (nameRef.current)
    //     //     person.name =(nameRef.current.value);
    //     // if (ageRef.current)
    //     //     person.age =parseInt(ageRef.current.value);
    //
    //     console.log(person)
    // }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register('name')}
                       type="text" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age')}
                       className="form-control" id="age"/>
            </div>

            <button className="btn btn-primary">Submit</button>

        </form>
    )

}

export default Form