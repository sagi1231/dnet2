import { WebsiteDashboardData } from "../entities/websiteDashboardData";
import { ServiceBase } from "./service.base";

class AnalyticsService extends ServiceBase {
  prefix = "/analytics";

  getWebsiteDashboardData(publishIntegrationId: string) {
    return this.get<WebsiteDashboardData>(`/${publishIntegrationId}/dashboard`);
  }
}

const analyticsService = new AnalyticsService();
export default analyticsService;
