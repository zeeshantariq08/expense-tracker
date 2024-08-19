import {categories} from "../App";
import {z} from "zod";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters"}),
    amount: z.number({invalid_type_error: "Amount must be a number"}).min(1, {message: "Amount must be at least 1"}).max(100_000, {message: "Amount must be at most 100,000"}),
    category: z.enum(categories)
})

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<ExpenseFormData>({resolver: zodResolver(schema)})

    return (
        <form>
            <div className="mb-3">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="mb-3">Name</label>
                    <input {...register("name")} id="name" type="text" className="form-control"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="amount" className="mb-3">Amount</label>
                    <input {...register("amount")} id="amount" type="number" className="form-control"/>
                </div>
                <div className="form-group mb-3">
                    <label className="mb-3">Category</label>
                    <select {...register("category")} className="form-control">
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>


        </form>
    )

}

export default ExpenseForm