import React, {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import Card from "../../components/common/Card";
import CardIconTitle from "../../components/common/CardIconTitle";
import FadeIn from "../../components/common/FadeIn";
import WriterSettingsIcon from "@mui/icons-material/EditNoteOutlined";
import WebsitePageLayout from "../../components/websites/WebsitePagesLayout";
import InputWrapper from "../../components/common/form/FormStyle";
import { Cron } from "react-js-cron";
import "react-js-cron/dist/styles.css";
import { workerState } from "../../state/workerState";
import { useRecoilState } from "recoil";
import { useParams } from "react-router";
import { Worker } from "../../core/entities/worker";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Language } from "../../core/types/language";
import workerService from "../../core/services/worker.service";
import { throttle } from "lodash";
import Switch from "@mui/material/Switch";
import FormStyle from "../../components/common/form/FormStyle";
import { InputText } from "primereact/inputtext";
import CardTitle from "../../components/common/CardTitle";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import WebsiteTabsNav from "../../components/website/WebsiteTabsNav";

const WriterSettingsPage: React.FC = () => {
  const { websiteId } = useParams();
  const [worker, setWorker] = useRecoilState(workerState(websiteId as string));
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    trigger,
    control,
  } = useForm<Worker>({ defaultValues: worker });

  const onSubmit: SubmitHandler<Worker> = async (data: Worker) => {
    try {
      setWorker(worker);
      await workerService.updateWorker(worker.id, data);
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
              title={"Writer Settings"}
              subTitle={"Set your articlez writer settings"}
              icon={<WriterSettingsIcon />}
            ></CardIconTitle>

            <FormStyle onChange={handleSubmit(submitDebounced)}>
              <div className="grid">
                <div className="col-6">
                  <label htmlFor="language">Website Language</label>
                  <Controller
                    name="language"
                    control={control}
                    render={({ field, formState }) => (
                      <Dropdown
                        className={errors.language ? "p-invalid" : ""}
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                          handleSubmit(submitDebounced)();
                        }}
                        options={[
                          {
                            label: "English",
                            value: Language.ENGLISH,
                          },
                          {
                            label: "Hebrew",
                            value: Language.HEBREW,
                          },
                        ]}
                        placeholder="Select Language"
                      />
                    )}
                  />

                  {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Writer’s language
                    </InputLabel>
                    <Controller
                      name="language"
                      control={control}
                      render={({ field, formState }) => (
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={field.value}
                          onChange={field.onChange}
                        >
                          <MenuItem value={Language.ENGLISH.toString()}>
                            English
                          </MenuItem>
                          <MenuItem value={Language.HEBREW.toString()}>
                            Hebrew
                          </MenuItem>
                        </Select>
                      )}
                    />
                  </FormControl> */}
                </div>
                <div className="col-12">
                  <label htmlFor="language">Writer’s Identifier</label>
                  <InputText
                    {...register("id")}
                    readOnly
                    id="something"
                    // label="Writer’s Identifier"
                  />
                </div>
                <div className="col-12">
                  <CardTitle title={"Schedule"} />
                  <Controller
                    name="cronExpression"
                    control={control}
                    render={({ field, formState }) => (
                      <Cron
                        value={field.value}
                        setValue={(v: string) => {
                          field.onChange(v);
                          setTimeout(
                            () => handleSubmit(submitDebounced)(),
                            1000
                          );
                        }}
                        allowedPeriods={["month", "week", "day"]}
                        allowedDropdowns={["period", "week-days", "hours"]}
                        humanizeValue
                      />
                    )}
                  />
                </div>
                <div className="col-12">
                  <span>Disable Writer</span>
                  <Controller
                    name="isDisabled"
                    control={control}
                    render={({ field, formState }) => (
                      <Switch
                        checked={field.value}
                        title="Disable Writer"
                        onChange={(e, v) => field.onChange(v)}
                      />
                    )}
                  />
                </div>

                <div className="col-12">
                  <span>Default Builder</span>
                  <Controller
                    name="shouldUseDefaultArticleBuilder"
                    control={control}
                    render={({ field, formState }) => (
                      <Switch
                        checked={field.value}
                        title="Default Builder"
                        onChange={(e, v) => field.onChange(v)}
                      />
                    )}
                  />
                </div>
              </div>
            </FormStyle>
          </Card>
        </div>
      </div>
    </>
  );
};

export default WriterSettingsPage;
