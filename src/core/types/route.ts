import { ReactElement } from "react";
import { UserRole } from "./userRole";

export default interface Route {
  path: string;
  isProtected?: boolean;
  role?: UserRole; // most under level role that can access component
  Page: ReactElement;
  hideBreadcrumbds?: boolean;
  hideGlobalLayout?: boolean;
  displayName?: string;
}
