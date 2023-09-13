import { useFormContext } from "react-hook-form"

interface IPasswordField {
    errorMessage?: string
}
export const PasswordField = ({ errorMessage }: IPasswordField) => {
    const { register } = useFormContext()

    return (
        <>
            <div className="flex items-center justify-between">
                <label htmlFor={"password"} className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                <div className="text-sm">
                    <a href="#" className="font-semibold text-gray-400 hover:text-gray-500">Esqueceu a sua senha?</a>
                </div>
            </div>
            <div className="mt-2">
                <input id={"password"} {...register("password")} type="password" autoComplete="current-password" className={`${errorMessage ? 'ring-red-300 focus:ring-red-600' : 'ring-gray-300 focus:ring-gray-600'} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`} />
                <p>{errorMessage}</p>
            </div>
        </>
    )
}
