import { InputText } from "primereact/inputtext";
import { useState } from "react";
import userService from "../core/services/user.service";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { Message } from "primereact/message";
import RegexValidations from "../core/validation/regexValidations";
import FormStyle from "../components/common/form/FormStyle";
import Button from "../components/common/form/Button";
import { ReactComponent as Logo } from "../assets/Logo/ColoredLogo.svg";
import Link from "../components/common/Link";
import { ResetPasswordRequestData } from "../core/services/requests/resetPassword/resetPasswordRequestData";
import AuthHeader from "../components/auth/AuthHeader";
import { toast } from "react-toastify";

const LoginPageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SentMessageStyled = styled(Message)`
  display: block;
  width: fit-content;
  margin-bottom: 20px;
`;

const CenteredForm = styled(FormStyle)`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 30rem;
  margin-bottom: 280px;
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

const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ResetPasswordRequestData>();
  const [isSentSuccefully, setIsSentSuccefully] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit: SubmitHandler<ResetPasswordRequestData> = async (data) => {
    setIsLoading(true);
    try {
      const res = await userService.resetPassword(data);
      setIsSentSuccefully(true);
    } catch (err) {
      toast("Email was not found", {
        type: "error",
      });
    }

    setIsLoading(false);
  };

  return (
    <LoginPageWrapper>
      <AuthHeader />
      <CenteredForm>
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
        {isSentSuccefully && (
          <SentMessageStyled
            className="mt-2"
            severity="success"
            text="An email has been sent to you"
          />
        )}

        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading || isSentSuccefully}
          primary
          arrowPlacement="right"
        >
          Reset Password via email
        </Button>
        <RegularText className="mb-4 mt-4">
          Do you remember? <ColoredLink path="/login">Log in</ColoredLink>
        </RegularText>
      </CenteredForm>
    </LoginPageWrapper>
  );
};

export default ResetPassword;
