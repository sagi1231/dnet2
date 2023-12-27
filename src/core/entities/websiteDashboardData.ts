export interface WebsiteDashboardData {
  publishedArticlesCount: number;
  totalViews: number;
  keywordsAnalytics: {
    views: number;
    articles: number;
    baseKeyword: string;
  }[];
}
