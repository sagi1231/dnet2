import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CreateWebsiteRequestData } from "../../../core/services/requests/createWebsite/createWebsiteRequestData";
import FormStyle from "../../common/form/FormStyle";
import { createWebsiteSteps } from "./createWebsiteSteps";
import styled from "styled-components";
import Button from "../../common/form/Button";
import Link from "../../common/Link";
import { ReactComponent as CloseIcon } from "../../../assets/Icons/Close.svg";
import { publisherService } from "../../../core/services/publisher.service";
import { IntegrationAuthType } from "../../../core/types/integrationAuthType";
import { useNavigate, useSearchParams } from "react-router-dom";
import Preloader from "../../common/Preloader";
import { IntegrationType } from "../../../core/types/integrationType";
import ConnectWebsiteModel from "../../modals/ConnectWebsiteModal";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const CenteredForm = styled(FormStyle)`
  display: flex;
  width: 650px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const InputsContainer = styled.div`
  margin: 70px 0;
  width: 100%;
`;

const BackButton = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
`;

const ExitButton = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;

  & svg {
    width: 30px;
    height: 30px;
  }
`;

const SubTitle = styled.h2`
  color: #425466;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.54px;
  font-family: Inter;
`;
const Title = styled.h1`
  text-transform: capitalize;

  color: #0a2540;
  font-family: Inter;
  font-size: 64px;
  font-weight: 700;
  letter-spacing: -2.88px;
`;

const ProgWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background: #e6e6e6;
  height: 20px;
`;

const ProgBar = styled.div<{ $width?: number }>`
  height: 100%;
  width: ${(props) => (props.$width ? `${props.$width}%` : "0%")};
  background-image: linear-gradient(
    90deg,
    #a960ee,
    #f92b75,
    #90e0ff,
    #ffcb57,
    #f92b75,
    #90e0ff,
    #a960ee
  );
  background-clip: content-box;
  -webkit-background-clip: content-box; /* Safari/Chrome */
  animation: gradientAnimation 70s linear infinite;
  background-size: 300% auto;
  transition-duration: 0.4s;
`;

const AnimatedText = styled.span`
  font-weight: bold;
  background-clip: text;
  -webkit-background-clip: text; /* Safari/Chrome */
  color: transparent;
  background-image: linear-gradient(
    125deg,
    #a960ee,
    #f92b75,
    #90e0ff,
    #ffcb57,
    #f92b75,
    #90e0ff,
    #a960ee
  );
  animation: gradientAnimation 70s linear infinite;
  background-size: 300% auto;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 300% 50%;
    }
  }
`;

// defaultValues: {
//   worker: {
//     keywords: ["a", "b", "at", "ay", "ah", "an", "ag", "ap", "ay", "ao"],
//     cronExpression: "0 9 * * 1,3,5",
//   },
//   publishIntegration: {
//     authType: IntegrationAuthType.IN_HOUSE_PLUGIN,
//     type: IntegrationType.WORDPRESS,
//     websiteUrl: "https://anodot.com",
//   },
// },

const CreateWebsiteForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeWebsiteStep, setActiveWebsiteStep] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(25);
  const [isLoading, setIsLoading] = useState(false);
  const showConnectWebsiteModal = searchParams.get("thirdPartyConnect");

  const methods = useForm<CreateWebsiteRequestData>({
    defaultValues: {
      worker: {
        keywords: [],
      },
      publishIntegration: {
        websiteUrl: searchParams.get("websiteUrl") || undefined,
        authType:
          (searchParams.get("authType") as IntegrationAuthType) ||
          IntegrationAuthType.IN_HOUSE_PLUGIN,
        token: searchParams.get("token") || undefined,
        externalId: searchParams.get("externalId") || undefined,
        type: searchParams.get("type") as IntegrationType,
      },
    },
  });

  // useEffect(() => {
  //   if (searchParams.get("thirdPartyConnect")) {
  //   }
  // }, [searchParams]);

  const progressUnit = useMemo(() => 100 / createWebsiteSteps.length, []);

  const watchValues = methods.watch(
    createWebsiteSteps[activeWebsiteStep].fields as any
  );

  useEffect(() => {
    methods.trigger(createWebsiteSteps[activeWebsiteStep].fields);
  }, [activeWebsiteStep, methods, watchValues]);

  const showBackButton = useMemo(
    () => activeWebsiteStep > 0,
    [activeWebsiteStep]
  );

  const onClickNextButton = async () => {
    if (methods.formState.isValid) {
      if (activeWebsiteStep < createWebsiteSteps.length - 1) {
        navigateNextStep();
      } else {
        setIsLoading(true);
        try {
          const publishIntegration =
            await publisherService.createPublishIntegrationWithWorker(
              methods.getValues()
            );
          navigate(`/websites/${publishIntegration.id}/`);
        } catch (err) {
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  const navigateNextStep = () => {
    setActiveWebsiteStep(activeWebsiteStep + 1);
    setProgressPercentage(progressPercentage + progressUnit);
  };

  return (
    <Container>
      <ProgWrapper>
        <ProgBar $width={progressPercentage}></ProgBar>
      </ProgWrapper>
      {showBackButton && (
        <BackButton>
          <Button
            primary={false}
            arrowPlacement="left"
            onClick={(e) => {
              methods.trigger(createWebsiteSteps[activeWebsiteStep - 1].fields);
              e.preventDefault();
              setActiveWebsiteStep(activeWebsiteStep - 1);
              setProgressPercentage(progressPercentage - progressUnit);
            }}
          >
            Back
          </Button>
        </BackButton>
      )}
      <Link path="/websites" className="flex align-items-center">
        <ExitButton>
          <CloseIcon />
        </ExitButton>
      </Link>
      <FormProvider {...methods}>
        <CenteredForm
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
        >
          <Title>
            Add new <AnimatedText>Website</AnimatedText>
          </Title>
          <SubTitle>{createWebsiteSteps[activeWebsiteStep].subTitle}</SubTitle>
          <InputsContainer>
            {createWebsiteSteps[activeWebsiteStep].component}
          </InputsContainer>
          <Button
            primary
            arrowPlacement="right"
            disabled={!methods.formState.isValid}
            onClick={onClickNextButton}
          >
            {createWebsiteSteps[activeWebsiteStep].nextButtonText}
          </Button>
        </CenteredForm>
      </FormProvider>
      {isLoading && (
        <Preloader>
          Discover top-notch, tailor-made keywords for your website as we
          diligently scan its content.
        </Preloader>
      )}
      <ConnectWebsiteModel
        show={!!showConnectWebsiteModal}
        cmsType={searchParams.get("type") as IntegrationType}
        websiteUrl={searchParams.get("websiteUrl") as string}
      />
    </Container>
  );
};

export default CreateWebsiteForm;
