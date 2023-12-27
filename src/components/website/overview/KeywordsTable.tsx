import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Card from "../../common/Card";
import CardTitle from "../../common/CardTitle";
import { useParams } from "react-router";
import { workerState } from "../../../state/workerState";
import { useRecoilState, useRecoilValue } from "recoil";
import { websiteDashboardDataState } from "../../../state/websiteDashboardDataState";

const KeywordsTable: React.FC = () => {
  const { websiteId } = useParams();
  const websiteDashboardData = useRecoilValue(
    websiteDashboardDataState(websiteId as string)
  );
  return (
    <Card>
      <CardTitle title={"Top Keywords"} />
      <DataTable value={websiteDashboardData.keywordsAnalytics}>
        <Column field="baseKeyword" header="Keyword"></Column>
        <Column field="articles" header="Total Articles"></Column>
        <Column field="views" header="Total Views"></Column>
      </DataTable>
    </Card>
  );
};

export default KeywordsTable;
