import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { websitesStateSelector } from "../../state/websitesState";
import AddWebsite from "./AddWebsite";
import WebsiteCard from "./WebsiteCard";

const WebsitesList: React.FC = () => {
  const websitesSelector = useRecoilValue(websitesStateSelector);

  return (
    <div className="grid p-0">
      {websitesSelector?.map((website) => (
        // eslint-disable-next-line react/jsx-no-undef
        <WebsiteCard
          key={website.id}
          websiteId={website.id}
          websiteUrl={website.websiteUrl}
        />
      ))}

      {/* <AddWebsite /> */}
    </div>
  );
};

export default WebsitesList;
