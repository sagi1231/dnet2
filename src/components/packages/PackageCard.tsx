import styled from "styled-components";
import { ReactComponent as SparklesIcon } from "../../assets/Icons/Sparkles.svg";
import Button from "../common/form/Button";
import PackageIncludes from "./PackageIncludes";

interface Props {
  children?: JSX.Element | JSX.Element[];
  color?: Color;
}

type Color = "purple" | "pink" | "orange" | undefined;

const getColorBasedOnProp = (color: Color) => {
  switch (color) {
    case "purple":
      return "#a960ee";
    case "pink":
      return "#ff6b8a";
    case "orange":
      return "#ffab70";
    default:
      return "#a960ee";
  }
};

const CardWrapper = styled.div`
  width: 30%;
  border-radius: 0.75rem;
  border: 1px solid var(--input-border-color, #e6e6e6);
  background: #fff;
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 13px;
`;

const CardTitle = styled.div`
  color: var(--main-purple, #a960ee);
  display: flex;
  gap: 10px;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.03rem;
  text-transform: capitalize;
  & svg {
    width: 1rem;
    height: 1rem;

    & path {
      fill: #a960ee;
    }
  }
`;

const CardDesc = styled.div`
  color: var(--main-text-color, #425466);

  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 114%; /* 0.855rem */
`;

const PriceTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const PriceDesc = styled.div`
  color: var(--main-text-lightcolor, #9aa8b6);
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.625rem */
  letter-spacing: -0.01875rem;
`;

const Price = styled.div<{ color: Color }>`
  color: var(--main-purple, #a960ee);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 2rem */
  letter-spacing: -0.06rem;
  display: flex;

  & span {
    color: ${({ color }) => getColorBasedOnProp(color)};
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 0.30463rem */
    letter-spacing: -0.00913rem;
    margin-top: 5px;
    margin-right: 5px;
  }
`;

const FreeTrialText = styled.div`
  color: #000;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.625rem */
  letter-spacing: -0.01875rem;
`;

const ButtonStyling = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a960ee;
`;

const PackageCard: React.FC<Props> = ({ color }) => {
  const creatorsList = [
    "up to 30 blog posts a month",
    "1 website",
    "Fined-tuned ChatGPT 4.0 AI engine",
    "Licensed images & SEO meta for each article",
    // Add more items as needed
  ];

  const teamsList = [
    { text: "up to 30 blog posts a month" },
    { text: "3 website" },
    { text: "Fined-tuned ChatGPT 4.0 AI engine" },
    { text: "Licensed images & SEO meta for each article" },
    // Add more items as needed
  ];

  const AgencyList = [
    { text: "custom amount blog posts a month" },
    { text: "unlimited websites" },
    { text: "Fined-tuned ChatGPT 4.0 AI engine" },
    { text: "Licensed images & SEO meta for each article" },
    // Add more items as needed
  ];

  return (
    <CardWrapper>
      <CardTitle color={color}>
        <SparklesIcon />
        creators
      </CardTitle>
      <CardDesc>
        Unlock the potential of Generative AI for freelancers, marketers, and
        entrepreneurs seeking to automate daily tasks on their brand
      </CardDesc>
      <PriceTextWrapper>
        <Price color={color}>
          <span>$</span>99
        </Price>
        <PriceDesc>/ USD / month / billed annualy</PriceDesc>
      </PriceTextWrapper>
      <FreeTrialText>* First 7 days free</FreeTrialText>
      <ButtonStyling //onClick={onUpgradeClick}
        arrowPlacement="right"
        primary
      >
        start free trial
      </ButtonStyling>
      <PackageIncludes bullets={creatorsList} />
    </CardWrapper>
  );
};

export default PackageCard;
