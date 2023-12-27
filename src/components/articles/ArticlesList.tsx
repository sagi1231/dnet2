import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router";
import { ArticlesSummarySelector } from "../../state/articlesState";
import WebsitePageLayout from "../websites/WebsitePagesLayout";
import ArticleCard from "../website/articles/ArticleCard";
import Link from "../common/Link";
import styled from "styled-components";
import Card from "../common/Card";
import workerService from "../../core/services/worker.service";
import { workerState } from "../../state/workerState";
import { CircularProgress } from "@mui/material";
import { Button } from "primereact/button";
import AddWebsite from "../websites/AddWebsite";
import AddIcon from "@mui/icons-material/Add";
import GenerateArticleModal from "../modals/GenerateArticleModal";
import { historyStateSelector } from "../../state/historyState";
import { WorkerRunStatusType } from "../../core/types/workerRunStatusType";
import { Skeleton } from "primereact/skeleton";

import Lottie from "lottie-react";
import PenAnimation from "../../assets/Icons/PenLottie.json";

const PriceText = styled.span`
  font-size: 12px;
  display: block;
  color: white;
  margin-top: 5px;
  font-family: "Lato" !important;
`;

const UpgradeText = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: white;
  display: block;
  font-family: "Lato";
`;

const PlusButton = styled.div`
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  border-radius: 13px;
  position: relative;
  padding: 0px;
  cursor: pointer;
  transition-duration: 0.25s;
  background: var(--primary-purple);
`;

const InProgressCard = styled.div`
  border-radius: 13px;
  position: relative;
  height: 180px;
  background: white;
  padding: 15px;
  display: flex;
  position: relative;
`;

const GeneratingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: center;
  margin-top: 20px;
  letter-spacing: -0.4px;
  position: absolute;
  right: 25px;
  bottom: 15px;
`;

const style = {
  height: 35,
};

const CardStyle = styled(Card)`
  padding: 15px;
  display: flex;
  position: relative;
`;
const SkeletonWrapper = styled.div`
  width: 30%;
`;

const ArticlesList: React.FC = () => {
  const { websiteId } = useParams();
  const [showGenerateArticleModal, setShowGenerateArticleModal] =
    useState(false);
  const worker = useRecoilValue(workerState(websiteId as string));
  const activeRuns = useRecoilValue(
    historyStateSelector({
      publishIntegrationId: websiteId,
      status: WorkerRunStatusType.IN_PROGRESS,
    })
  );
  const articles = useRecoilValue(ArticlesSummarySelector(websiteId as string));

  return (
    <>
      <div className="grid mt-2">
        <div className="col-6">
          <Link
            className="h-full flex justify-content-center align-items-center"
            onClick={() => setShowGenerateArticleModal(true)}
          >
            <CardWrapper>
              <div className="p-4 h-full flex">
                <PlusButton>
                  <AddIcon />
                </PlusButton>

                <div className="flex flex-column justify-content-center ml-3">
                  <UpgradeText>Generate Articles</UpgradeText>
                  <PriceText>
                    Click here and Watch Ghostwrite Craft Your Masterpiece.
                  </PriceText>
                </div>
              </div>
            </CardWrapper>
          </Link>
        </div>
        <div className="col-6">
          <CardStyle>
            <SkeletonWrapper>
              <Skeleton size="10rem"></Skeleton>
            </SkeletonWrapper>
            <div className="w-full ml-3">
              <Skeleton width="100%" className="mb-2"></Skeleton>
              <Skeleton width="75%"></Skeleton>
              <GeneratingWrapper>
                <Lottie
                  animationData={PenAnimation}
                  loop={true}
                  style={style}
                />
                <div className="flex flex-column ml-3">
                  <small>Ghostwrite</small>
                  <span>Generating article</span>
                </div>
              </GeneratingWrapper>
            </div>
          </CardStyle>
        </div>
        {/* {activeRuns?.map((run) => (
          <InProgressCard>
            Our methaforical writer is writing for you at this moment
          </InProgressCard>
        ))} */}
        {articles?.map((article, i) => (
          <ArticleCard key={i} articleSummary={article} />
        ))}
      </div>
      {showGenerateArticleModal && (
        <GenerateArticleModal
          onHide={() => setShowGenerateArticleModal(false)}
        />
      )}
    </>
  );
};

export default ArticlesList;
