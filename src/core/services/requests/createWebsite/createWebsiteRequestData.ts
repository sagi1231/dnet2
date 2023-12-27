import { PublishIntegration } from "../../../entities/publishIntegration";
import { Worker } from "../../../entities/worker";

export interface CreateWebsiteRequestData {
  publishIntegration: Omit<PublishIntegration, "companyId" | "id">;
  worker: Omit<Worker, "publishIntegrationId" | "id" | "companyId">;
}
