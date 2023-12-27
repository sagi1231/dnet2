import React, { useCallback, useState } from "react";
import WebsitePageLayout from "../../components/websites/WebsitePagesLayout";
import WelcomeBackCard from "../../components/website/overview/WelcomeBackCard";
import IconDataBox from "../../components/website/overview/IconDataBox";
import ArticleIcon from "@mui/icons-material/ArticleOutlined";
import ViewsIcon from "@mui/icons-material/VisibilityOutlined";
import WebsiteMetaData from "../../components/website/overview/WebsiteMetaData";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { websiteState } from "../../state/websitesState";
import ArticlsUsed from "../../components/website/overview/ArticlesUsed";
import KeywordsTable from "../../components/website/overview/KeywordsTable";
import LastMonthVisits from "../../components/website/overview/LastMonthVisits";
import LastGeneratedArticles from "../../components/website/overview/LastGeneratedArticles";
import { websiteDashboardDataState } from "../../state/websiteDashboardDataState";
import WebsiteTabsNav from "../../components/website/WebsiteTabsNav";

const SingleWebsite: React.FC = () => {
  const { websiteId } = useParams();
  const website = useRecoilValue(websiteState(websiteId as string));
  const websiteDashboardData = useRecoilValue(
    websiteDashboardDataState(websiteId as string)
  );
  return (
    <>
      {website && (
        <>
          <WebsiteTabsNav />
          {/* <WebsitePageLayout /> */}
          <div className="grid">
            <div className="col-5">
              <WelcomeBackCard></WelcomeBackCard>
            </div>
            <div className="col-3">
              <IconDataBox
                iconColor={"purple"}
                icon={<ArticleIcon />}
                boxTitle={"Articles posted"}
                boxNumber={websiteDashboardData.publishedArticlesCount}
                marginBottom={true}
              />
              <IconDataBox
                iconColor={"green"}
                icon={<ViewsIcon />}
                boxTitle={"Total views"}
                boxNumber={websiteDashboardData.totalViews}
              />
            </div>
            <div className="col-4">
              <ArticlsUsed />
            </div>
            <div className="col-5">
              <LastGeneratedArticles />

              {/* <WebsiteMetaData website={website}></WebsiteMetaData> */}
            </div>
            <div className="col-7">
              <KeywordsTable />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleWebsite;
