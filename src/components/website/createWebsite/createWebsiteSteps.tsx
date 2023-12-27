import ChooseWriterKeywords from "./steps/ChooseWriterKeywords";
import EnterWebsiteAddress from "./steps/EnterWebsiteAddress";
import SelectWebsiteCmsType from "./steps/SelectWebsiteCmsType";
import SelectWriterSchedulingTime from "./steps/SelectWriterSchedulingTime";
import { CreateWebsiteStep } from "./types/createWebsiteStep";

export const createWebsiteSteps: CreateWebsiteStep[] = [
  {
    subTitle: "Enter your website's URL and we'll scan your website",
    component: <EnterWebsiteAddress />,
    fields: "publishIntegration.websiteUrl",
    nextButtonText: "Choose your website system",
  },
  {
    subTitle: "Select your website's content managment system",
    component: <SelectWebsiteCmsType />,
    fields: "publishIntegration.type",
    nextButtonText: "Let's add some engaging keywords",
  },
  {
    subTitle: "Choose Your Engaging Keywords",
    component: <ChooseWriterKeywords />,
    fields: "worker.keywords",
    nextButtonText: "Schedule your writer",
  },
  {
    subTitle: "Select Writer's Scheduling Time",
    component: <SelectWriterSchedulingTime />,
    fields: "worker.cronExpression",
    nextButtonText: "Finally! create website",
  },
];
