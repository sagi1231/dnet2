import { Language } from "../types/language";
import { EntityBase } from "./entityBase";

export interface Worker extends EntityBase {
  name: string;
  keywords: string[];
  language: Language;
  companyId: string;
  isDisabled: boolean;
  cronExpression: string;
  nextRun: Date;
  userValidationBeforePublish: boolean;
  publishIntegrationId: string;
  shouldUseDefaultArticleBuilder?: boolean;
}
