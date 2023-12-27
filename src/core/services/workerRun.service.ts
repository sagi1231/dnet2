import { WorkerRun } from "../entities/workerRun";
import { WorkerRunStatusType } from "../types/workerRunStatusType";
import { ServiceBase } from "./service.base";

class WorkerRunService extends ServiceBase {
  prefix = "/workerRun";
  getWorkerRuns(publishIntegrationId: string, status?: WorkerRunStatusType) {
    return this.post<WorkerRun[]>(
      `/publishIntegration/${publishIntegrationId}`,
      {
        status,
      }
    );
  }
}
const workerRunService = new WorkerRunService();
export default workerRunService;
