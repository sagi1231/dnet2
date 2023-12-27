import TopMenu from "./topMenu";
import { useLocation } from "react-router";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SlideIn from "../common/SlideIn";
import SideBar from "../menu/SideBar";
import UpgradePackage from "../modals/UpgradePackage";
import { useRecoilValue } from "recoil";
import { userStateSelector } from "../../state/userState";

interface Props {
  children: React.ReactElement;
  showBreadcrumbs?: boolean;
}

const ContentWrapper = styled.div`
  width: calc(100% - 14rem);
`;

const PageWrapperOverflow = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 30px;
  height: calc(100vh - 85px);
  overflow: scroll;
`;

const SidebarWrapper = styled.div`
  width: 14rem;
  height: 100vh;
`;

const PrivateLayout: React.FC<Props> = ({ children, showBreadcrumbs }) => {
  const [showPackagesModal, setShowPackagesModal] = useState(false);
  const user = useRecoilValue(userStateSelector);

  useEffect(() => {
    if (!user?.company?.Subscription?.isActive) {
      setShowPackagesModal(true);
    }
  }, [user?.company?.Subscription?.isActive]);

  return (
    <div className="flex">
      <SidebarWrapper>
        <SideBar />
      </SidebarWrapper>
      <ContentWrapper>
        <TopMenu />
        <React.Suspense fallback={<p>loading...</p>}>
          <PageWrapperOverflow>
            {showBreadcrumbs && <BreadCrumbs />}
            {children}
          </PageWrapperOverflow>
        </React.Suspense>
      </ContentWrapper>
      {/* {showPackagesModal && <UpgradePackage />} */}
    </div>
  );
};

export default PrivateLayout;
