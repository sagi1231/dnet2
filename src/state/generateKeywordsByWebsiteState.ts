import { atomFamily } from "recoil";
import generatorService from "../core/services/generator.service";

export const generateKeywordsByWebsiteState = atomFamily<
  string[] | undefined,
  string | null
>({
  key: "suggestedKeywordsState",
  default: async (websiteAddress: string | null) => {
    if (websiteAddress) {
      try {
        return await generatorService.generateKeywordsByWebsiteUrl(
          websiteAddress
        );
      } catch (err) {
        return [];
      }
    }
  },
});
