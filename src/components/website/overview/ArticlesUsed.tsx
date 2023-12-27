import React from "react";
import { Chart } from "primereact/chart";
import Card from "../../common/Card";
import CardTitle from "../../common/CardTitle";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { websiteDashboardDataState } from "../../../state/websiteDashboardDataState";

const ArticlsUsed: React.FC = () => {
  const { websiteId } = useParams();
  const websiteDashboardData = useRecoilValue(
    websiteDashboardDataState(websiteId as string)
  );
  const documentStyle = getComputedStyle(document.documentElement);

  return (
    <>
      <Card className="h-full">
        <CardTitle title={"Articles Used"}></CardTitle>
        <Chart
          type="doughnut"
          data={{
            labels: [
              websiteDashboardData.publishedArticlesCount +
                " articles published",
              40 -
                websiteDashboardData.publishedArticlesCount +
                " articles left",
            ],
            datasets: [
              {
                data: [
                  websiteDashboardData.publishedArticlesCount,
                  40 - websiteDashboardData.publishedArticlesCount,
                ],
                backgroundColor: ["#A259FF", "#E6E6E6"],
                hoverBackgroundColor: [
                  documentStyle.getPropertyValue("--blue-400"),
                  "#E6E6E6",
                ],
              },
            ],
          }}
          options={{
            cutout: "60%",
            rotation: -90,
            responsive: true,
            maintainAspectRatio: false, // Set to false to allow custom aspect ratio
            aspectRatio: 2.4,
            circumference: 180,
            plugins: {
              legend: {
                position: "bottom", // Change the legend position here
                align: "center",
                labels: {
                  usePointStyle: true,
                  padding: 10,
                },
              },
            },
          }}
          className="w-full"
        />
      </Card>
    </>
  );
};

export default ArticlsUsed;
