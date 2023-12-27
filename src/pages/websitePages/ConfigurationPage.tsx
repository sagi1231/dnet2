import Card from "../../components/common/Card";
import CardIconTitle from "../../components/common/CardIconTitle";
import FadeIn from "../../components/common/FadeIn";
import WebsitePageLayout from "../../components/websites/WebsitePagesLayout";
import ConfigurationIcon from "@mui/icons-material/TuneOutlined";
import CardSubtitle from "../../components/common/CardSubtitle";
import FormStyle from "../../components/common/form/FormStyle";
import { InputText } from "primereact/inputtext";
import { useCallback, useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { useNavigate, useParams } from "react-router";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { websitesStateSelector, websiteState } from "../../state/websitesState";
import { PublishIntegration } from "../../core/entities/publishIntegration";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { publisherService } from "../../core/services/publisher.service";
import { IntegrationType } from "../../core/types/integrationType";
import { IntegrationAuthType } from "../../core/types/integrationAuthType";
import Button from "../../components/common/form/Button";
import WebsiteTabsNav from "../../components/website/WebsiteTabsNav";
import { throttle } from "lodash";
import { Switch } from "@mui/material";

const ConfigurationPage: React.FC = () => {
  const { websiteId } = useParams();
  const [website, setWebsite] = useRecoilState(
    websiteState(websiteId as string)
  );

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    trigger,
    control,
  } = useForm<PublishIntegration>({ defaultValues: website });

  const refreshWebsites = useRecoilRefresher_UNSTABLE(websitesStateSelector);

  const navigate = useNavigate();

  const deletePublishIntegration = async (id: string) => {
    try {
      await publisherService.deletePublishIntegrationById(id);
      refreshWebsites();
      navigate("/");
    } catch (err) {}
  };

  const onSubmit: SubmitHandler<PublishIntegration> = async (
    data: PublishIntegration
  ) => {
    try {
      await publisherService.updatePublishIntegrationById(data.id, data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitDebounced = useCallback(throttle(onSubmit, 3000), []);

  return (
    <>
      <WebsiteTabsNav />
      {/* <WebsitePageLayout /> */}
      <div className="grid m-0">
        <div className="col-6 pl-0 pr-0">
          <Card>
            <CardIconTitle
              title={"Configuration"}
              subTitle={"Set your website configurations"}
              icon={<ConfigurationIcon />}
            ></CardIconTitle>

            <FormStyle onChange={handleSubmit(submitDebounced)}>
              <div className="grid">
                <div className="col-6">
                  <label htmlFor="username">Website URL</label>
                  <InputText
                    {...register("websiteUrl")}
                    placeholder="Enter Website URL"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="username">Website ype</label>

                  <Controller
                    name="type"
                    control={control}
                    render={({ field, formState }) => {
                      return (
                        <Dropdown
                          value={field.value}
                          onChange={field.onChange}
                          options={[
                            {
                              label: "Wordpress",
                              value: IntegrationType.WORDPRESS,
                            },
                            {
                              label: "Shopify",
                              value: IntegrationType.SHOPIFY,
                            },
                            {
                              label: "Wix",
                              value: IntegrationType.WIX,
                            },
                            {
                              label: "Custom",
                              value: IntegrationType.CUSTOM,
                            },
                          ]}
                          placeholder="Select Type"
                        />
                      );
                    }}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="username">Website URL</label>
                  <InputText
                    readOnly
                    placeholder="Website ID"
                    {...register("id")}
                  />
                </div>
                <CardSubtitle subTitle={"Authentication type"} />
                <div className="col-6">
                  <label htmlFor="username">Authentication type</label>

                  <Controller
                    name="authType"
                    control={control}
                    render={({ field, formState }) => {
                      return (
                        <Dropdown
                          value={field.value}
                          onChange={field.onChange}
                          options={[
                            {
                              label: "Basic",
                              value: IntegrationAuthType.BASIC,
                            },
                            {
                              label: "In house plugin",
                              value: IntegrationAuthType.IN_HOUSE_PLUGIN,
                            },
                            {
                              label: "Bearer token",
                              value: IntegrationAuthType.BEARER_TOKEN,
                            },
                            {
                              label: "OATH2",
                              value: IntegrationAuthType.OAUTH2,
                            },
                          ]}
                          placeholder="Select Type"
                        />
                      );
                    }}
                  />
                </div>

                <div className="col-12">
                  <span>Publish As Draft</span>
                  <Controller
                    name="publishAsDraft"
                    control={control}
                    render={({ field, formState }) => (
                      <Switch
                        checked={field.value}
                        title="Publish As Draft"
                        onChange={(e, v) => field.onChange(v)}
                      />
                    )}
                  />
                </div>

                <div className="col-12">
                  <span>Disable Publish</span>
                  <Controller
                    name="disablePublish"
                    control={control}
                    render={({ field, formState }) => (
                      <Switch
                        checked={field.value}
                        title="Disable Publish"
                        onChange={(e, v) => field.onChange(v)}
                      />
                    )}
                  />
                </div>
              </div>
              <Button
                onClick={() => deletePublishIntegration(websiteId as string)}
              >
                Delete website
              </Button>
            </FormStyle>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ConfigurationPage;
