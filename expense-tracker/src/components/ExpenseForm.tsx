
import {z} from "zod";

import categories from "../categories";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters"}),
    amount: z.number({invalid_type_error: "Amount is required"}).min(1, {message: "Amount must be at least 1"}).max(100_000, {message: "Amount must be at most 100,000"}),
    category: z.enum(categories, {errorMap: () => ({message: "Category is required"})})
})

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void
}

const ExpenseForm = ({onSubmit}: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm<ExpenseFormData>({resolver: zodResolver(schema)})

    return (
        <form onSubmit={handleSubmit(data => {
            onSubmit(data);
            reset();
        })}>
            <div className="mb-3">
                <div className="form-group mb-3">
                    <label htmlFor="name" className="mb-3">Name</label>
                    <input {...register("name")} id="name" type="text" className="form-control"/>
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="amount" className="mb-3">Amount</label>
                    <input {...register("amount", {valueAsNumber: true})} id="amount" type="number"
                           className="form-control"/>
                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                </div>
                <div className="form-group mb-3">
                    <label className="mb-3">Category</label>
                    <select {...register("category")} id="category" className="form-control">
                        <option value=""></option>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    {errors.category && <p className="text-danger">{errors.category.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>


        </form>
    )

}

export default ExpenseForm