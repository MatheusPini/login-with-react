
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import './App.css'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { IconEmail } from './assets/icons/email'
import { IconLinkedin } from './assets/icons/linkedin'
import { ImgLogo } from './assets/images/logo'
import { LoginButton } from './components/buttons/login'
import { EmailField } from './components/inputs/email'
import { PasswordField } from './components/inputs/password'
interface IForm {
  email: string
  password: string
}
function App() {
  const onSubmit: SubmitHandler<IForm> = async (data) => {
    console.log(data)
  }

  const schema = yup
    .object({
      email: yup.string().email("Precisa ser um e-mail válido").required("E-mail é obrigatório"),
      password: yup.string().required("Senha é obrigatória"),
    })
    .required()
  const methods = useForm<IForm>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema),
  })
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <ImgLogo />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <FormProvider {...methods}>
          <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)} method="POST">
            <div>
              <EmailField errorMessage={methods.formState?.errors.email?.message} name='email' label='E-mail ou Usuário' />
            </div>

            <div>
              <PasswordField errorMessage={methods.formState?.errors.password?.message} />
            </div>

            <div>
              <LoginButton type='submit' label="Entrar" />
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

export default App
