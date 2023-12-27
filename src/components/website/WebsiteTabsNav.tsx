import { useParams } from "react-router";
import TabsNav from "../core/TabsNav";
import WebsiteMenuItems from "../websites/sidebar/WebsiteMenuItems";

const WebsiteTabsNav: React.FC = () => {
  const { websiteId } = useParams();
  return <TabsNav prefix={`/websites/${websiteId}`} items={WebsiteMenuItems} />;
};
export default WebsiteTabsNav;
