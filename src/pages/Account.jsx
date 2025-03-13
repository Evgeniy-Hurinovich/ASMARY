import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm'
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm'
import Heading from '../ui/Heading'
import Row from '../ui/Row'

function Account() {
  return (
    <>
      <Heading as="h1">Обновите свой аккаунт</Heading>

      <Row>
        <Heading as="h3">Обновление данных пользователя</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Обновить пароль</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  )
}

export default Account
