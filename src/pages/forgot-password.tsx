import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { ImgLogo } from "../assets/images/logo"
import * as yup from "yup"
import { EmailField } from "../components/inputs/email"
import { LoginButton } from "../components/buttons/login"
import { yupResolver } from "@hookform/resolvers/yup"
import { IconEmail } from "../assets/icons/email"
import { IconLinkedin } from "../assets/icons/linkedin"
import { IconEnviar } from "../assets/icons/enviar"
import { Link } from "react-router-dom"
interface IForm {
    email: string
}
export const ForgotPassword = () => {
    const onSubmit: SubmitHandler<IForm> = async (data) => {
        console.log(data)
    }

    const schema = yup
        .object({
            email: yup.string().email("Precisa ser um e-mail válido").required("E-mail é obrigatório"),
        })
        .required()
    const methods = useForm<IForm>({
        defaultValues: {
            email: '',
        },
        resolver: yupResolver(schema),
    })
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <ImgLogo />
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="p-4 mb-4 text-sm text-gray-500 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-gray-400" role="alert">
                    <span className="font-medium">!</span> Insira o endereço de e-mail associado a sua conta
                </div>
                <FormProvider {...methods}>
                    <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)} method="POST">
                        <div>
                            <EmailField errorMessage={methods.formState?.errors.email?.message} name='email' label='E-mail' />
                        </div>
                        <div className="flex gap-2">
                            <LoginButton icon={<IconEnviar />} type='submit' label="Enviar" />
                            <Link className="flex w-full items-center justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 border border-gray-300" to="/">Voltar</Link>
                            {/* <LoginButton type='button' label="Voltar" /> */}
                        </div>
                    </form>

                </FormProvider>

                <p className="mt-10 text-center text-sm text-gray-500">
                    a gente se conhece? Entre em contato para a gente trocar uma ideia!
                </p>
                <div className='flex justify-center gap-2 pt-2'>
                    <IconEmail />
                    <IconLinkedin />
                </div>
            </div>
        </div>
    )
}
