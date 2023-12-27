import { Article } from "../entities/article";
import { ArticleBuilder } from "../entities/articleBuilder";
import { ArticleSummary } from "../entities/articleSummary";
import { WorkerRun } from "../entities/workerRun";
import { ServiceBase } from "./service.base";

class ArticleService extends ServiceBase {
  prefix = "/articles";
  getArticle(articleId: string) {
    return this.get<Article>(`/${articleId}`);
  }

  async getArticlesByPublishIntegrationId(publishIntegrationId: string) {
    return await this.get<ArticleSummary[]>(
      "/publishIntegration/" + publishIntegrationId
    );
  }

  async getArticleBuilderByPublishIntegrationId(publishIntegrationId: string) {
    return await this.get<ArticleBuilder>(`/${publishIntegrationId}/builder`);
  }
}
const articleService = new ArticleService();
export default articleService;
