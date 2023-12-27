import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import styled from "styled-components";
import Button from "../common/form/Button";
import { ReactComponent as WordpressIcon } from "../../assets/Icons/CMSIcons/Wordpress.svg";
import { ReactComponent as LogoIcon } from "../../assets/Logo/ColoredIcon.svg";
import { IntegrationType } from "../../core/types/integrationType";
import { useNavigate } from "react-router-dom";

const DialogTitle = styled.h1`
  color: var(--main-title-color, #0a2540);
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 4rem */
  letter-spacing: -0.18rem;
  text-align: center;
`;

const DialogSubtitle = styled.h2`
  color: var(--main-text-color, #425466);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.03375rem;
  margin-top: 30px;
  text-align: center;
`;

const ConnectingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 40px;
  margin: 70px 0;
  & .iconstyle {
    width: 70px;
    height: 70px;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 40px;

  & span {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: red;
    animation: scaling 3s ease-in-out infinite;
  }
  & span:nth-child(1) {
    animation-delay: 0s;
  }
  & span:nth-child(2) {
    animation-delay: 0.2s;
  }
  & span:nth-child(3) {
    animation-delay: 0.4s;
  }
  & span:nth-child(4) {
    animation-delay: 0.6s;
  }
  & span:nth-child(5) {
    animation-delay: 0.8s;
  }

  & span:nth-child(6) {
    animation-delay: 1s;
  }

  @keyframes scaling {
    0%,
    100% {
      transform: scale(0.8);
      background-color: #d9d9d9;
    }
    20% {
      transform: scale(1);
      background-color: #a960ee;
    }
    40% {
      transform: scale(1);
      background-color: #f92b75;
    }
    60% {
      transform: scale(1);
      background-color: #ffcb57;
    }
    80% {
      transform: scale(1);
      background-color: #90e0ff;
    }
  }
`;

const IconText = styled.span`
  color: #0a2540;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.03375rem;
  position: absolute;
  bottom: -30px;
`;

const ButtonStyle = styled(Button)`
  width: fit-content;
  margin: auto;
`;

const Disclaimer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

interface Props {
  websiteUrl: string;
  cmsType: IntegrationType;
  show?: boolean;
}

const ConnectWebsiteModel: React.FC<Props> = ({
  websiteUrl,
  cmsType,
  show,
}) => {
  const [visible, setVisible] = useState<boolean>(show!!);
  const navigate = useNavigate();

  return (
    <Dialog
      visible={visible}
      style={{ width: "75vw" }}
      onHide={() => navigate("/websites")}
      draggable={false}
    >
      <div>
        <DialogTitle>Let’s Connect Your Site</DialogTitle>
        <DialogSubtitle>
          Once that's done, your website will be seamlessly connected to
          Ghostwrite!
        </DialogSubtitle>
      </div>
      <ConnectingWrapper>
        <IconWrapper>
          <WordpressIcon className="iconstyle" />
          <IconText>{websiteUrl}</IconText>
        </IconWrapper>
        <DotsContainer>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </DotsContainer>
        <IconWrapper>
          <LogoIcon className="iconstyle" />
          <IconText>Ghostwrite</IconText>
        </IconWrapper>
      </ConnectingWrapper>

      <ButtonStyle
        onClick={() => setVisible(false)}
        arrowPlacement="right"
        primary
      >
        Connect your website
      </ButtonStyle>
      <Disclaimer>
        <small>
          Rest assured, we do not gather any data from your website during
          activation. Your information remains private and secure.
        </small>
      </Disclaimer>
    </Dialog>
  );
};

export default ConnectWebsiteModel;
