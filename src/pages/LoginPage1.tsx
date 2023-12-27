import { InputText } from "primereact/inputtext";
import { ReactComponent as GoogleIcon } from "../assets/Icons/ColoredGoogle.svg";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import userService from "../core/services/user.service";
import { useSetRecoilState } from "recoil";
import { userState } from "../state/userState";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginRequestData } from "../core/services/requests/login/loginRequestData";
import { Message } from "primereact/message";
import RegexValidations from "../core/validation/regexValidations";
import FormStyle from "../components/common/form/FormStyle";
import Button from "../components/common/form/Button";
import { ReactComponent as Logo } from "../assets/Logo/ColoredLogo.svg";
import Link from "../components/common/Link";
import { User } from "../core/entities/user";
import AppConfig from "../config/appConfig";
import AuthHeader from "../components/auth/AuthHeader";

const LoginPageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
`;

const ErrorMessageStyled = styled(Message)`
  display: block;
  width: fit-content;
  margin-bottom: 20px;
`;

const CenteredForm = styled(FormStyle)`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 30rem;

  justify-content: center;
  align-items: center;
`;

const ColoredLink = styled(Link)`
  color: var(--main-purple, #a960ee);
  font-family: Lato;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.0225rem;
  text-transform: capitalize;
`;

const RegularText = styled.div`
  color: var(--main-text-lightcolor, #9aa8b6);

  font-family: Lato;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.0225rem;
  text-transform: capitalize;
`;

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
`;

const OrText = styled.div`
  color: var(--main-text-color, #425466);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.0225rem;
  text-transform: capitalize;
  margin: 20px 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 1px;
    background: var(--main-text-color, #425466);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 130%;
    height: 20px;
    background: white;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    z-index: -1;
  }
`;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginRequestData>();
  const setUserState = useSetRecoilState(userState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const location = useLocation();
  const onSubmit: SubmitHandler<LoginRequestData> = async (data) => {
    try {
      setIsLoading(true);
      const res = await userService.login(data);
      setUserState(res.user);
      const redirectPath = queryParams.get("redirect") || "/websites";
      navigate(redirectPath);
    } catch (err) {
      setError("root", {});
    } finally {
      setIsLoading(false);
    }
  };

  const onClickGoogleButton = () => {
    const redirectPath = queryParams.get("redirect") || "/websites";
    document.location.href = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${
      AppConfig.serverUrl
    }/auth%2Fgoogle%2Fcallback&client_id=89013921262-762mm9l2lfq3dfv4rf185srjgq8ulihg.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=${encodeURIComponent(
      redirectPath
    )}`;
  };

  return (
    <LoginPageWrapper>
      <AuthHeader />

      <CenteredForm
        onKeyDown={(e) => e.keyCode === 13 && handleSubmit(onSubmit)(e)}
      >
        <GoogleButton onClick={onClickGoogleButton}>
          <GoogleIcon />
          continue with google
        </GoogleButton>
        <OrText>or continue with email</OrText>
        <div className="w-full mb-5">
          <label>Email</label>
          <InputText
            {...register("username", {
              required: true,
              maxLength: 20,
              pattern: {
                value: RegexValidations.email,
                message: "invalid email address",
              },
            })}
            type="text"
            placeholder="Email address"
            className={errors.username ? "p-invalid" : ""}
            tooltip={errors.username?.message}
          />
        </div>
        <div className="w-full mb-5">
          <label>Password</label>

          <InputText
            {...register("password", { required: true, maxLength: 20 })}
            type="password"
            placeholder="Password"
            className={errors.password ? "p-invalid" : ""}
          />

          {errors.root && (
            <ErrorMessageStyled
              className="mt-2"
              severity="error"
              text="Username and password are incorrect"
            />
          )}
        </div>

        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
          primary
          arrowPlacement="right"
        >
          Login with Your Account
        </Button>
        <ColoredLink className="mb-4 mt-4" path="/reset-password">
          Reset password
        </ColoredLink>
        <RegularText className="mb-4">
          No account? <ColoredLink path="/signup">Create one</ColoredLink>
        </RegularText>
      </CenteredForm>
    </LoginPageWrapper>
  );
};

export default LoginPage;
