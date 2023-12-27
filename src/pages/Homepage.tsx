import React, { useCallback, useEffect, useState } from "react";

import styled from "styled-components";

import FadeIn from "../components/common/FadeIn";
import WebsitesList from "../components/websites/WebsitesList";
import CardSkeleton from "../components/common/skeletons/CardSkeleton";
import AddWebsite from "../components/websites/AddWebsite";
import Button from "../components/common/form/Button";
import Link from "../components/common/Link";

const Title = styled.h1`
  font-size: 48px;
  color: #0a2540;
  font-weight: 700;
  line-height: 100%; /* 3rem */
  letter-spacing: -0.12rem;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Subtitle = styled.h2`
  color: #9aa8b6;
  margin: 0px;
  font-size: 12px;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 600;
  line-height: 100%;
`;

const ButtonStyle = styled(Button)`
  background: var(--primary-purple);
`;
const ContentWrapper = styled.div``;

const Homepage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <ContentWrapper>
      <div className="flex justify-content-between align-items-center">
        <div>
          <Subtitle>Overview your websites</Subtitle>
          <Title>Active websites</Title>
        </div>
        {/* <Link path="/websites/new">
          <ButtonStyle primary arrowPlacement="right">
            Add new website
          </ButtonStyle>
        </Link> */}
      </div>

      <FadeIn>
        <React.Suspense fallback={<CardSkeleton />}>
          <WebsitesList />
        </React.Suspense>
      </FadeIn>
    </ContentWrapper>
  );
};

export default Homepage;
