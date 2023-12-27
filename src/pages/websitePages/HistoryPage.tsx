import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import WebsitePageLayout from "../../components/websites/WebsitePagesLayout";
import { historyStateSelector } from "../../state/historyState";
import {
  DataGrid,
  GridColDef,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import styled from "styled-components";
import { useParams } from "react-router";
import { Button } from "primereact/button";

const DataGridStyled = styled(DataGrid)`
  background-color: white;
  border-radius: 13px;
  border: none !important;
`;

const HistoryPage: React.FC = () => {
  const { websiteId } = useParams();
  const historyRuns = useRecoilValue(
    historyStateSelector({
      publishIntegrationId: websiteId,
    })
  );
  const refreshHistoryData = useRecoilRefresher_UNSTABLE(
    historyStateSelector({
      publishIntegrationId: websiteId,
    })
  );

  const columns: GridColDef[] = [
    {
      field: "createdAt",
      headerName: "Date",
      type: "date",
      width: 270,
      valueFormatter: (params: GridValueFormatterParams<Date>) =>
        `${new Date(params.value).toDateString()} - ${new Date(
          params.value
        ).toLocaleTimeString()}`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "failureDescription",
      headerName: "Failure Description",
      width: 200,
    },
    {
      field: "generatedArticles",
      headerName: "Generated Articles",
      width: 100,
    },
    {
      field: "publishedArticles",
      headerName: "Published Articles",
      width: 100,
    },
    {
      field: "workerId",
      headerName: "Worker ID",
      width: 200,
    },
  ];
  return (
    <>
      <WebsitePageLayout />

      <Button onClick={refreshHistoryData}>Refresh</Button>

      <DataGridStyled
        sortModel={[
          {
            field: "createdAt",
            sort: "desc",
          },
        ]}
        columns={columns}
        rows={historyRuns || []}
        scrollbarSize={10}
      />
    </>
  );
};

export default HistoryPage;
