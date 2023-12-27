import { InputText } from "primereact/inputtext";
import {
  Controller,
  FieldValues,
  Path,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import styled from "styled-components";
import { ReactComponent as SpeaklesIcon } from "../../assets/Icons/Sparkles.svg";
import { ReactComponent as CloseIcon } from "../../assets/Icons/Close.svg";
import React,  { useEffect, useState } from "react";
import Link from "../common/Link";
import CardSubtitle from "../common/CardSubtitle";
import SuggestionsKeywords from "./KeywordsSuggestions";

const KeywordsContainer = styled.div`
  margin-top: 30px;
`;

const KeywordsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;

  & .kw-bg:nth-child(4n + 1) {
    background: #a960ee;
  }

  & .kw-bg:nth-child(4n + 2) {
    background: #ffcb57;
  }

  & .kw-bg:nth-child(4n + 3) {
    background: #f92b75;
  }

  & .kw-bg:nth-child(4n + 4) {
    background: #90e0ff;
  }
`;

const KeywordBadge = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 50rem;
  font-size: 0.625rem;
  font-style: normal;
  color: white;
  font-weight: 400;
  letter-spacing: -0.01875rem;
  text-transform: capitalize;
  position: relative;

  &:hover .kw-overly {
    opacity: 1;
  }

  &:hover .kw-overly svg path {
    opacity: 1;
  }
`;

const KeywordOverlay = styled(Link)`
  width: 100%;
  position: absolute;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #081121ad;
  border-radius: 600px;
  opacity: 0;
  transition-duration: 0.2s;

  & svg path {
    fill: white;
    opacity: 0;
    transition-duration: 0.2s;
  }
`;

const SuggestedKeywordWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`; 

interface Props<T> {
  fieldName: Path<T>;
  middleText?:string;
  keywordsHeader:string;
  displaySuggestions?:boolean;
}

function SelectKeywordsInput<FormDataType extends FieldValues>({
  fieldName,
  middleText,
  keywordsHeader,
  displaySuggestions
}: Props<FormDataType>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormDataType>();

  const keywords = useWatch({ control, name: fieldName }) as string[];

  const { append, remove, fields } = useFieldArray({
    name: fieldName as any,
    control,
  });

  const [keyword, setKeyword] = useState("");

  const onEnter = async (keyword: string) => {
    if (keyword && !keywords.includes(keyword)) {
      setKeyword("");
      append(keyword as any);
    }
  };
  
  return (
    <div className="w-full">
      <label>Enter Keywords Manually</label>
      <Controller
        name={fieldName}
        control={control}
        rules={{
          required: true,
          minLength: 10,
        }}
        render={({fieldState }) => (
          <>
            <InputText
              value={keyword}
              placeholder="ex: SEO"
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.keyCode === 13 && onEnter(keyword)}
              className={"w-full mb-3 " + (fieldState.error ? "p-invalid" : "")}
            />
            <small>
              {middleText}
            </small>
            {displaySuggestions&&
            <div>
              <CardSubtitle subTitle={"Suggested Keywords:"} />
              <SuggestedKeywordWrapper>
                <React.Suspense
                  fallback={
                    <small>Finding relevant keywords suggestions...</small>
                  }
                >
                  <SuggestionsKeywords onClickKeyword={onEnter} />
                </React.Suspense>
              </SuggestedKeywordWrapper>
            </div>}
            
            <KeywordsContainer>
              <label>{keywordsHeader}</label>
              <KeywordsWrapper>
                {keywords.map((keyword, index) => (
                  <KeywordBadge key={keyword} className="kw-bg">
                    <KeywordOverlay
                      onClick={() => {remove(index)}}
                      className="kw-overly"
                    >
                      <CloseIcon />
                    </KeywordOverlay>
                    <SpeaklesIcon />
                    {keyword}
                  </KeywordBadge>
                ))}
              </KeywordsWrapper>
            </KeywordsContainer>
          </>
        )}
      />
    </div>
  );
}

export default SelectKeywordsInput;
