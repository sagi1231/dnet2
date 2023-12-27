import React from "react";
import ArticleCard from "../../components/website/articles/ArticleCard";
import WebsitePageLayout from "../../components/websites/WebsitePagesLayout";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router";
import { ArticlesSummarySelector } from "../../state/articlesState";
import ArticlesList from "../../components/articles/ArticlesList";
import CardSkeleton from "../../components/common/skeletons/CardSkeleton";
import WebsiteTabsNav from "../../components/website/WebsiteTabsNav";

const SingleWebsite: React.FC = () => {
  return (
    <>
      <WebsiteTabsNav />
      {/* <WebsitePageLayout /> */}
      <React.Suspense fallback={<CardSkeleton />}>
        <ArticlesList />
      </React.Suspense>
    </>
  );
};

export default SingleWebsite;
