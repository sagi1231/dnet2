import { ArticleStatus } from "../types/articleStatus";
import { ArticleMetadata } from "./articleMetadata";
import { EntityBase } from "./entityBase";

export interface ArticleSummary extends EntityBase {
  id: string;
  sourceUrl: string;
  title: string;
  category: string;
  tags: string[];
  status: ArticleStatus;
  imageSrc: string;
  companyId: string;
  createdAt: Date;
  metadata: ArticleMetadata;
  views: number;
  externalLink: string;
}
