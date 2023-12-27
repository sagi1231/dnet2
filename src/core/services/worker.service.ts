import { Worker } from "../entities/worker";
import { ServiceBase } from "./service.base";

class WorkerService extends ServiceBase {
  prefix = "/worker";
  triggerWorker(workerId: string, keywords?: string[]) {
    return this.post<void>(`/${workerId}/trigger`, {
      keywords,
    });
  }

  updateWorker(workerId: string, data: Partial<Worker>) {
    return this.patch<Worker>(`/${workerId}`, data);
  }

  getWorkerByPublishIntegrationId(publishIntegrationId: string) {
    return this.get<Worker>("/publishIntegration/" + publishIntegrationId);
  }
}
const workerService = new WorkerService();
export default workerService;
