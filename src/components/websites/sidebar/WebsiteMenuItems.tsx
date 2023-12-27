import { MenuItemProps } from "../../menu/types/MenuItemProps";
import { ReactComponent as DashboardIcon } from "../../../assets/Icons/WebsiteIcons/Dashboard.svg";
import { ReactComponent as ArticlesIcon } from "../../../assets/Icons/WebsiteIcons/Blog.svg";
import { ReactComponent as InsightsIcon } from "../../../assets/Icons/WebsiteIcons/Analytics.svg";
import { ReactComponent as KeywordsIcon } from "../../../assets/Icons/WebsiteIcons/Keyword.svg";
import { ReactComponent as WriterSettingsIcon } from "../../../assets/Icons/WebsiteIcons/Writer.svg";
import ConfigurationIcon from "@mui/icons-material/TuneOutlined";
import ConstructionIcon from "@mui/icons-material/Construction";
import HistoryIcon from "@mui/icons-material/HistoryOutlined";
import { UserRole } from "../../../core/types/userRole";

const WebsiteMenuItems: MenuItemProps[] = [
  {
    displayName: "Overview",
    route: "/",
    icon: <DashboardIcon />,
  },

  {
    displayName: "Articles",
    route: "/articles",
    icon: <ArticlesIcon />,
  },

  {
    displayName: "Analytics",
    route: "/analytics",
    icon: <InsightsIcon />,
  },

  {
    displayName: "Keywords",
    route: "/keywords",
    icon: <KeywordsIcon />,
  },

  {
    displayName: "Writer",
    route: "/writer-settings",
    icon: <WriterSettingsIcon />,
  },

  // {
  //   displayName: "Builder",
  //   route: "/builder",
  //   icon: <ConstructionIcon />,
  // },

  {
    displayName: "Configuration",
    route: "/config",
    icon: <ConfigurationIcon />,
  },

  {
    displayName: "History",
    route: "/history",
    icon: <HistoryIcon />,
    role: UserRole.SUPER_ADMIN,
  },
];

export default WebsiteMenuItems;
