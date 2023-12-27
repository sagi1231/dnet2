import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";
import { CreateWebsiteRequestData } from "../../../../core/services/requests/createWebsite/createWebsiteRequestData";
import RadioButton from "../../../common/form/RadioButton";
import RadioButtonGroup from "../../../common/form/RadioGroup";
import Button from "../../../common/form/Button";
import { Cron } from "react-js-cron";
import RadioGroup from "../../../common/form/RadioGroup";
import { CronExpression } from "../../../../common/types/cronExpression";
import SlideIn from "../../../common/SlideIn";
import FadeIn from "../../../common/FadeIn";

const CenteredLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  & div {
    color: #a960ee !important;
  }
`;

const CronInputStyled = styled(Cron)`
  justify-content: center;
`;

const SelectWriterSchedulingTime: React.FC = () => {
  const [isCustomSchedule, setIsCustomSchedule] = useState(false);

  return (
    <>
      {isCustomSchedule ? (
        <Controller
          name="worker.cronExpression"
          render={({ field, formState }) => (
            <CronInputStyled
              value={field.value}
              setValue={field.onChange}
              allowedPeriods={["month", "week", "day"]}
              allowedDropdowns={["period", "week-days", "hours"]}
              humanizeValue
            />
          )}
        />
      ) : (
        <RadioGroup<CreateWebsiteRequestData>
          fieldName="worker.cronExpression"
          options={[
            {
              value: CronExpression.EVERY_WEEK,
              render: "Once A Week",
            },
            {
              value: CronExpression.THREE_TIMES_A_WEEK,
              render: "Three Times A Week",
            },
            {
              value: CronExpression.EVERY_DAY_AT_9AM,
              render: "Once A Day",
            },
          ]}
        />
      )}
      <CenteredLink>
        <Button
          onClick={() => setIsCustomSchedule(!isCustomSchedule)}
          arrowPlacement="right"
        >
          {isCustomSchedule
            ? "Or choose predefined schedule"
            : "Or set your own schedule"}
        </Button>
      </CenteredLink>
    </>
  );
};

export default SelectWriterSchedulingTime;
