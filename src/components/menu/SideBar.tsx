import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo/ColoredLogo.svg";
import { ReactComponent as TemplateIcon } from "../../assets/Icons/TemplateEngine.svg";
import { ReactComponent as SubscriptionIcon } from "../../assets/Icons/Subscription.svg";
import { ReactComponent as DownloadIcon } from "../../assets/Icons/Download.svg";
import { ReactComponent as Support } from "../../assets/Icons/Support.svg";
import { ReactComponent as ArrowRight } from "../../assets/Icons/ArrowRight.svg";
import { ReactComponent as GlobeIcon } from "../../assets/Icons/Globe.svg";
import Link from "../common/Link";
import MenuItemBold from "./MenuItemBold";
import { Divider } from "primereact/divider";
import Button from "../common/form/Button";
import { useRecoilValue } from "recoil";
import { websitesStateSelector } from "../../state/websitesState";
import SideBarWebsiteItem from "./SideBarWebsiteItem";
import RecentWebsites from "./RecentWebsites";
import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

const Wrapper = styled.div`
  background: white;
  height: 100%;
  flex-direction: column;
  border-right: 1px solid #e2e8f0;
`;

const RocketImage = styled.img`
  width: 35%;
  bottom: 30px;
  left: 20px;
  position: absolute;
  transition-duration: 0.2s;
`;

const UpgradeButton = styled.div`
  background: rgb(53, 225, 163);
  border-radius: 13px;
  width: 100%;
  position: relative;
  height: 90px;
  cursor: pointer;

  &:hover {
    ${RocketImage} {
      bottom: 35px;
      left: 25px;
    }
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 85px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpgradeTitle = styled.span`
  display: block;
  font-size: 18px;
  line-height: 18px;
  color: white;
  padding-top: 18px;
  padding-right: 15px;
  font-weight: bold;
  text-align: right;
`;
const UpgradeSubtitle = styled.span`
  display: block;
  font-size: 10px;
  padding-top: 6px;
  color: white;
  padding-right: 15px;
  font-weight: 300;
  text-align: right;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-start;
  padding: 0 0px 0 30px;
`;

const SideTitle = styled.div`
  color: var(--main-title-color, #0a2540);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 0.875rem */
  letter-spacing: -0.02625rem;
`;

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link path="/websites" className="flex align-items-center">
          <Logo />
        </Link>
      </LogoWrapper>
      <MenuWrapper>
        <MenuItemBold path="/websites">
          <GlobeIcon />
          Active Webistes
          <ArrowRight />
        </MenuItemBold>
        <MenuItemBold path="/plugins">
          <DownloadIcon />
          Connection Plugins
          <ArrowRight />
        </MenuItemBold>
        <MenuItemBold path="builder">
          <TemplateIcon />
          Template Collection
          <ArrowRight />
        </MenuItemBold>
        {/* <MenuItemBold>
          <Support />
          Support
          <ArrowRight />
        </MenuItemBold> */}
      </MenuWrapper>
      <Divider />
      <MenuWrapper>
        <div>
          <SideTitle>Recent Websites</SideTitle>
        </div>
        <React.Suspense fallback={<ProgressSpinner />}>
          <RecentWebsites />
        </React.Suspense>
        <Link path={"/websites"}>
          <Button className="pl-0 pt-0" arrowPlacement="right" primary={false}>
            Show all
          </Button>
        </Link>
      </MenuWrapper>
    </Wrapper>
  );
};

export default SideBar;
