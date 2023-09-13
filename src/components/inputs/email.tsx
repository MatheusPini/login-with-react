import { useFormContext } from "react-hook-form"

interface IEmailField {
    label: string
    name: string
    errorMessage?: string
}
export const EmailField = ({ label, name, errorMessage }: IEmailField) => {
    const { register } = useFormContext()

    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
            <div className="mt-2">
                <input id={name} {...register(name)} type="email" autoComplete={name} className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${errorMessage ? 'ring-red-300 focus:ring-red-600' : 'ring-gray-300 focus:ring-gray-600'} ring-border-red-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`} />
                <p>{errorMessage}</p>
            </div>
        </>
    )
}
