import React from "react";
import { Path } from "react-hook-form";
import { CreateWebsiteRequestData } from "../../../../core/services/requests/createWebsite/createWebsiteRequestData";

export interface CreateWebsiteStep {
  subTitle: string;
  component: React.ReactElement;
  fields: Path<CreateWebsiteRequestData> | Path<CreateWebsiteRequestData>[];
  nextButtonText: string;
}
