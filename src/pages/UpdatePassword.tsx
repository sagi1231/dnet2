import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import userService from '../core/services/user.service'
import styled from 'styled-components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Message } from 'primereact/message'

import RegexValidations from '../core/validation/regexValidations'
import FormStyle from '../components/common/form/FormStyle'
import Button from '../components/common/form/Button'
import AuthHeader from '../components/auth/AuthHeader'
import { UpdatePasswordRequestData } from '../core/services/requests/updatePassword/updatePasswordRequestData'
import { useNavigate, useParams } from 'react-router'

const LoginPageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CenteredForm = styled(FormStyle)`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 30rem;
  margin-bottom: 280px;
  justify-content: center;
  align-items: center;
`

const UpdatePassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UpdatePasswordRequestData>({})

  const navigate = useNavigate()

  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<UpdatePasswordRequestData> = async data => {
    try {
      setIsLoading(true)
      const res = await userService.updatePassword(data)
      navigate('/')
    } catch (err) {
      setError('root', {})
    } finally {
      setIsLoading(false)
    }
  }

  const ErrorMessageStyled = styled(Message)`
    display: block;
    width: fit-content;
    margin-bottom: 20px;
  `

  return (
    <LoginPageWrapper>
      <AuthHeader />
      <CenteredForm>
        <div className="w-full mb-5">
          <label>Password</label>
          <InputText
            {...register('password', {
              required: true,
              maxLength: 20,
              validate: value =>
                value === confirmPassword || 'Passwords must match',
              pattern: {
                value: RegexValidations.password,
                message: 'Password is not strong enough',
              },
            })}
            type="password"
            placeholder="Password"
            className={errors.password ? 'p-invalid' : ''}
            tooltip={errors.password?.message}
          />
        </div>
        <div className="w-full mb-5">
          <label>Confirm Password</label>
          <InputText
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            className={errors.password ? 'p-invalid' : ''}
          />
        </div>
        {errors.root && (
          <ErrorMessageStyled
            className="mt-2"
            severity="error"
            text="Password is the same as before"
          />
        )}
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
          primary
          arrowPlacement="right"
        >
          Update Password
        </Button>
      </CenteredForm>
    </LoginPageWrapper>
  )
}

export default UpdatePassword
