import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup"; //Optional for grouping
import { Button } from "primereact/button";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { formatUserName } from "../../common/utils/formatUserName";
import { userStateSelector } from "../../state/userState";
import styled from "styled-components";
import React, { useRef } from "react";
//import { useRouter } from 'next/router';
import { Menu } from "primereact/menu";
import userService from "../../core/services/user.service";
import { useNavigate } from "react-router";
import GWButton from "../common/form/Button";
import { ReactComponent as DownloadIcon } from "../../assets/Icons/Download.svg";
import Link from "../common/Link";
import { Tooltip } from "primereact/tooltip";

import Lottie from "lottie-react";
import PenAnimation from "../../assets/Icons/PenLottie.json";

const TopWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  align-items: center;
  background: white;
  border-radius: 0px;
  min-height: 85px;
  border-bottom: 1px solid #e2e8f0;
`;

const AvatarStyled = styled(Avatar)`
  background-color: #0a2540;
  color: #ffffff;
`;

const IconStyle = styled.i`
  transition-duration: 0.1s;
  padding-left: 8px;
`;
const ButtonAvatarStyled = styled(Button)`
  padding: 0;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  color: black !important;

  &:hover {
    ${IconStyle} {
      margin-top: 7px !important;
    }
  }
`;

const DownloadPluginWrapper = styled(Link)`
  &:hover path {
    fill: var(--primary-purple);
  }
  & path {
    transition-duration: 0.15s;
  }
  & svg {
    width: 28px;
    height: 28px;
    margin-right: 20px;
  }
`;

const EmailText = styled.span`
  font-size: 16px;
  letter-spacing: -0.3px;
`;

const RoleText = styled.span`
  margin-top: 2px;
  font-size: 10px;
  letter-spacing: -0.3px;
`;

const GeneratingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: center;
  margin-left: 20px;
  letter-spacing: -0.4px;
`;

const style = {
  height: 35,
};

const TopMenu: React.FC = () => {
  const userState = useRecoilValue(userStateSelector);
  const navigate = useNavigate();
  const menuLeft = useRef<Menu>(null);

  let items = [
    {
      template: () => {
        return (
          <button
            onClick={(e) => navigate("/")}
            className="w-full p-link flex align-items-center p-3"
          >
            <AvatarStyled
              label={userState?.email.at(0)?.toLocaleUpperCase()}
              shape="circle"
              className="mr-2"
            />
            <div className="flex flex-column">
              <EmailText>{userState?.email}</EmailText>
              <RoleText>{userState?.role}</RoleText>
            </div>
          </button>
        );
      },
    },
    { separator: true },

    {
      label: "Add Website",
      icon: "pi pi-fw pi-plus",
      command: () => {
        navigate("/websites/new");
      },
    },
    {
      label: "Logout",
      icon: "pi pi-fw pi-sign-out",
      command: async () => {
        await userService.logout();
        document.location.href = "/login";
      },
    },
  ];

  return (
    <TopWrapper>
      {/* <DownloadPluginWrapper path="/plugins">
        <Tooltip target=".custom-target-icon" className="mt-2" />
        <DownloadIcon
          className="custom-target-icon"
          data-pr-tooltip="Download Plugins"
          data-pr-position="bottom"
        />
      </DownloadPluginWrapper> */}
      {/* <GeneratingWrapper>
        <Lottie animationData={PenAnimation} loop={true} style={style} />
        <div className="flex flex-column ml-3">
          <span>Generating article</span>
          <small>ghostwrites.ai</small>
        </div>
      </GeneratingWrapper> */}
      <div className="flex align-items-center">
        <Menu model={items} popup ref={menuLeft} id="popup_menu_right" />
        <ButtonAvatarStyled
          iconPos="right"
          onClick={(event) => menuLeft.current?.toggle(event)}
          aria-controls="popup_menu_right"
          aria-haspopup
        >
          <AvatarStyled
            label={userState?.email.at(0)?.toLocaleUpperCase()}
            shape="circle"
          />
          <IconStyle className="pi pi-angle-down"></IconStyle>
        </ButtonAvatarStyled>
      </div>
    </TopWrapper>
  );
};

export default TopMenu;
