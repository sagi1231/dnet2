import { useParams } from "react-router";
import { atomFamily, selector, selectorFamily } from "recoil";
import { PublishIntegration } from "../core/entities/publishIntegration";
import { publisherService } from "../core/services/publisher.service";

export const websitesStateSelector = selector<PublishIntegration[]>({
  key: "websitesStateSelector",
  get: async () => {
    return await publisherService.listPublishIntegrations();
  },
});

export const websiteState = atomFamily<
  PublishIntegration | undefined,
  string | null
>({
  key: "websiteState",
  default: selectorFamily({
    key: "websiteStateSelector",
    get:
      (websiteId: string | null) =>
      async ({ get }) => {
        if (websiteId) {
          const websites = get(websitesStateSelector);
          return (
            (websites.find(
              (website) => website.id === websiteId
            ) as PublishIntegration) ||
            publisherService.getPublishIntegrationById(websiteId)
          );
        }
      },
  }),
});
