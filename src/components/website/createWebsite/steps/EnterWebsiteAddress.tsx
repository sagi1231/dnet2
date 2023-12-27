import { InputText } from "primereact/inputtext";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { CreateWebsiteRequestData } from "../../../../core/services/requests/createWebsite/createWebsiteRequestData";
import RegexValidations from "../../../../core/validation/regexValidations";
import Preloader from "../../../common/Preloader";

const EnterWebsiteAddress: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateWebsiteRequestData>();

  return (
    <>
      <div className="w-full">
        <label htmlFor="username">Website URL</label>
        <InputText
          {...register("publishIntegration.websiteUrl", {
            required: true,
            pattern: {
              value: RegexValidations.url,
              message: "Website address is invalid",
            },
          })}
          placeholder="Enter Website Address"
          className={
            "w-full" +
            (errors.publishIntegration?.websiteUrl ? "p-invalid" : "")
          }
        />
        <div className="mb-3">
          <small
            style={{
              color: "red",
            }}
          >
            {errors.publishIntegration?.websiteUrl?.message}
          </small>
        </div>
        <small>
          By clicking “Choose your website type”, you represent and warrant that
          you own or have permission to use all of the content from this
          website.
        </small>
      </div>
    </>
  );
};

export default EnterWebsiteAddress;
