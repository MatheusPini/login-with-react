interface ILoginButton {
    label: string
    type: "button" | "submit" | "reset" | undefined
}
export const LoginButton = ({ label, type = 'submit' }: ILoginButton) => {
    return (
        <button type={type} className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">{label}</button>
    )
}
