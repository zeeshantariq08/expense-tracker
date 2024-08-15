import {FormEvent, useRef, useState} from "react";

import {FieldValues, useForm} from "react-hook-form";

interface FormData {
    name: string
    age: number
}

const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

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
                <input {...register('name', {required: true, minLength: 4})}
                       type="text" className="form-control" id="name"/>
                {errors.name?.type == 'required' && <p className="text-danger">The name field is required</p>}
                {errors.name?.type == 'minLength' &&
                    <p className="text-danger">The name must be at least 4 characters</p>}
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