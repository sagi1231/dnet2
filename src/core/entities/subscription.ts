import { EntityBase } from "./entityBase";

export interface Subscription extends EntityBase {
  isActive: Boolean;
  companyId: string;
}
