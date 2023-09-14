interface ILoginButton {
    label: string
    type: "button" | "submit" | "reset" | undefined
    icon?: React.ReactNode
}
export const LoginButton = ({ label, type = 'submit', icon = null }: ILoginButton) => {
    return (
        <button type={type} className="flex w-full items-center justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
            {label}
            {icon && icon}
        </button>
    )
}
