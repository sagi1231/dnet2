import { InputText } from 'primereact/inputtext'
import { ReactComponent as GoogleIcon } from '../assets/Icons/ColoredGoogle.svg'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { userState } from '../state/userState'
import styled from 'styled-components'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Message } from 'primereact/message'
import RegexValidations from '../core/validation/regexValidations'
import FormStyle from '../components/common/form/FormStyle'
import Button from '../components/common/form/Button'
import { ReactComponent as Logo } from '../assets/Logo/ColoredLogo.svg'
import { SignupRequestData } from '../core/services/requests/signup/signupRequestData'
import Link from '../components/common/Link'
import { Checkbox } from 'primereact/checkbox'
import companyService from '../core/services/company.service'

const LoginPageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h1`
  color: var(--main-title-color, #0a2540);
  text-align: center;
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 3rem */
  letter-spacing: -0.12rem;
  text-transform: capitalize;
  margin: 60px 0;
  width: 37.625rem;
  & span {
    color: var(--main-purple, #a960ee);
  }
`

const ErrorMessageStyled = styled(Message)`
  display: block;
  width: fit-content;
  margin-bottom: 20px;
`

const CenteredForm = styled(FormStyle)`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 30rem;

  justify-content: center;
  align-items: center;
`

const ColoredLink = styled(Link)`
  color: var(--main-purple, #a960ee);
  font-family: Lato;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.0225rem;
  text-transform: capitalize;
`

const RegularText = styled.div`
  color: var(--main-text-lightcolor, #9aa8b6);

  font-family: Lato;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.0225rem;
  text-transform: capitalize;
`

const GoogleButton = styled(Link)`
  border-radius: 0.75rem;
  border: 1px solid var(--input-border-color, #e6e6e6);
  display: flex;
  height: 3.125rem;
  width: 100%;
  padding: 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  margin-bottom: 30px;
  color: var(--main-title-color, #0a2540);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.0225rem;
  text-transform: capitalize;
  cursor: pointer;
  & svg {
    width: 16px;
  }
`

const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
  } = useForm<SignupRequestData>()
  const setUserState = useSetRecoilState(userState)
  const [isLoading, setIsLoading] = useState(false)
  const [queryParams] = useSearchParams()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<SignupRequestData> = async data => {
    try {
      setIsLoading(true)
      const res = await companyService.signup(data)
      setUserState(res)
      navigate('/')
    } catch (err) {
      setError('root', {})
    } finally {
      setIsLoading(false)
    }
  }

  const onClickGoogleButton = () => {
    // add fbi
  }

  return (
    <LoginPageWrapper>
      <Title>ענף איתורֿ</Title>
      <CenteredForm autoComplete="off">
        <GoogleButton onClick={onClickGoogleButton}>
          sso
          <GoogleIcon />
        </GoogleButton>
        <div className="w-full mb-5">
          <label>Email</label>
          <InputText
            autoComplete="off"
            {...register('email', {
              required: true,
              maxLength: 20,
              pattern: {
                value: RegexValidations.email,
                message: 'invalid email address',
              },
            })}
            type="text"
            placeholder="Email address"
            className={errors.email ? 'p-invalid' : ''}
            tooltip={errors.email?.message}
          />
        </div>
        <div className="w-full mb-5">
          <label>Password</label>

          <InputText
            {...register('password', {
              required: true,
              maxLength: 20,
              pattern: {
                value: RegexValidations.password,
                message: 'Password is not strong enough',
              },
            })}
            type="password"
            placeholder="Password"
            className={errors.password ? 'p-invalid' : ''}
          />
        </div>
        <Button
          className="mb-4"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
          primary
          arrowPlacement="right"
        >
          Create Account
        </Button>

        <RegularText className="mb-4">
          Already have an account?{' '}
          <ColoredLink path="/login">Log in</ColoredLink>
        </RegularText>
        <RegularText className="mb-4 text-center">
          By clicking "Create account" or "Continue with Google" you agreeing to
          Ghostwrite’s{' '}
          <ColoredLink
            path="https://ghostwrites.ai/legals/terms-of-use-agreement/"
            differentTab
          >
            Terms of Use
          </ColoredLink>
          .{' '}
          <ColoredLink
            differentTab
            path="https://ghostwrites.ai/legals/privacy-policy/"
          >
            Read our Privacy Policy
          </ColoredLink>
          .
        </RegularText>
      </CenteredForm>
    </LoginPageWrapper>
  )
}

export default Signup
