import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { Article } from "../core/entities/article";
import articleService from "../core/services/article.service";

export const articleState = atomFamily<Article | undefined, string | null>({
  key: "articleState",
  default: (articleId: string | null) => {
    if (articleId) {
      return articleService.getArticle(articleId);
    }
  },
});
