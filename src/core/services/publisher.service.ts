import { PublishIntegration } from "../entities/publishIntegration";
import { CreateWebsiteRequestData } from "./requests/createWebsite/createWebsiteRequestData";
import { ServiceBase } from "./service.base";

class PublisherService extends ServiceBase {
  prefix = "/publisher";

  async listPublishIntegrations() {
    return await this.get<PublishIntegration[]>();
  }

  async publishArticleById(articleId: string, publishIntegrationId: string) {
    return await this.post<void>("/publish", {
      articleId,
      publishIntegrationId,
    });
  }

  async createPublishIntegrationWithWorker(data: CreateWebsiteRequestData) {
    return await this.post<PublishIntegration>("/", data);
  }

  async getPublishIntegrationById(publishIntegrationId: string) {
    return await this.get<PublishIntegration>(`/${publishIntegrationId}`);
  }

  async updatePublishIntegrationById(
    publishIntegrationId: string,
    data: Partial<PublishIntegration>
  ) {
    return await this.patch(`/${publishIntegrationId}`, data);
  }

  async deletePublishIntegrationById(publishIntegrationId: string) {
    return await this.delete<void>(`/${publishIntegrationId}`);
  }
}
export const publisherService = new PublisherService();
