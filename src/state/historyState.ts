import { selector, selectorFamily } from "recoil";
import { WorkerRun } from "../core/entities/workerRun";
import workerRunService from "../core/services/workerRun.service";
import { WorkerRunStatusType } from "../core/types/workerRunStatusType";

export const historyStateSelector = selectorFamily<
  WorkerRun[] | undefined,
  {
    publishIntegrationId?: string;
    status?: WorkerRunStatusType;
  }
>({
  key: "historyStateSelector",
  get: (params) => () => {
    if (params.publishIntegrationId)
      return workerRunService.getWorkerRuns(
        params.publishIntegrationId,
        params.status
      );
  },
});
