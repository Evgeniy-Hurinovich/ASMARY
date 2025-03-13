import { useForm } from 'react-hook-form'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import { useSignup } from './useSignup'

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup()
  const { register, formState, getValues, handleSubmit, reset } = useForm()
  const { errors } = formState

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Полное имя" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register('fullName', {
            required: 'Это поле обязательно к заполнению',
          })}
        />
      </FormRow>

      <FormRow label="Электронный адрес" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register('email', {
            required: 'Это поле обязательно к заполнению',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message:
                'Пожалуйста, укажите действительный адрес электронной почты.',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Пароль (минимум 8 символов)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register('password', {
            required: 'Это поле обязательно к заполнению',
            minLength: {
              value: 8,
              message: 'Пароль должен содержать не менее 8 символов.',
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Повторите пароль"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'Это поле обязательно к заполнению',
            validate: (value) =>
              value === getValues().password || 'Пароли должны совпадать',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Назад
        </Button>
        <Button disabled={isLoading}>Создать нового пользователя</Button>
      </FormRow>
    </Form>
  )
}

export default SignupForm
