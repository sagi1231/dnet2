import { ServiceBase } from "./service.base";

class GeneratorService extends ServiceBase {
  prefix = "/generator";

  generateSuggestedKeywords(workerId: string) {
    return this.get<string[]>(`/${workerId}/keywords`);
  }

  generateKeywordsByWebsiteUrl(websiteUrl: string) {
    return this.get<string[]>(`/keywords?websiteUrl=${websiteUrl}`);
  }
}
const generatorService = new GeneratorService();
export default generatorService;
