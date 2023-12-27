import { selectorFamily } from "recoil";
import { ArticleSummary } from "../core/entities/articleSummary";
import articleService from "../core/services/article.service";

export const ArticlesSummarySelector = selectorFamily<
  ArticleSummary[] | undefined,
  string
>({
  key: "articlesSummarySelector",
  get: (websiteId: string) => () => {
    if (websiteId) {
      return articleService.getArticlesByPublishIntegrationId(websiteId);
    }
  },
});
