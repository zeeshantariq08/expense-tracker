import {FormEvent, useRef, useState} from "react";

import {FieldValues, useForm} from "react-hook-form";

import {z} from "zod";

import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters"}),
    age: z.number({invalid_type_error: "Age must be a number"}).min(18, {message: "Age must be at least 18"})
});

type FormData = z.infer<typeof schema>;


const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
    } =
        useForm<FormData>({resolver: zodResolver(schema)});

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
                {errors.name && <p className="text-danger">{errors.name?.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age', {valueAsNumber: true})}
                       className="form-control" id="age"/>
                {errors.age && <p className="text-danger">{errors.age?.message}</p>}
            </div>

            <button disabled={!isValid} className="btn btn-primary">Submit</button>

        </form>
    )

}

export default Form