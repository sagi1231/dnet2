import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import {
  useFormContext,
} from "react-hook-form";
import styled from "styled-components";
import { CreateWebsiteRequestData } from "../../../../core/services/requests/createWebsite/createWebsiteRequestData";
import SelectKeywordsInput from "../../../keywords/SelectKeywordsInput";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { generateKeywordsByWebsiteState } from "../../../../state/generateKeywordsByWebsiteState";
import React from "react";
import Preloader from "../../../common/Preloader";

const SuspendWrapper = () => {
  const { getValues, setValue } = useFormContext<CreateWebsiteRequestData>();
  const keywordsStateValue = useRecoilValue(
    generateKeywordsByWebsiteState(getValues("publishIntegration.websiteUrl"))
  );
  useEffect(() => {
    keywordsStateValue && setValue("worker.keywords", keywordsStateValue);
  }, [keywordsStateValue]);
  const  keywordsHeader = "keywords we already added for you:";
  const middleText = `Please share a collection of unique and impactful keywords that
  will serve as the foundation for our article generation. We kindly
  request more than 10 such keywords, carefully selected to add
  creativity and strength to the content..`
  return (
    <SelectKeywordsInput<CreateWebsiteRequestData> fieldName="worker.keywords" keywordsHeader={keywordsHeader}  middleText={middleText}/>
  );
};

const ChooseWriterKeywords: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <Preloader>
          Discover top-notch, tailor-made keywords for your website as we
          diligently scan its content.
        </Preloader>
      }
    >
      <SuspendWrapper />
    </React.Suspense>
  );
};

export default ChooseWriterKeywords;
