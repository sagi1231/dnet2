import Route from "./core/types/route";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage1";
import Overview from "./pages/websitePages/Overview";
import Keywords from "./pages/websitePages/KeywordsPage";
import Articles from "./pages/websitePages/Articles";
import HistoryPage from "./pages/websitePages/HistoryPage";
import ArticleViewerPage from "./pages/articlePages/ArticleViewerPage";
import { UserRole } from "./core/types/userRole";
import WriterSettingsPage from "./pages/websitePages/WriterSettingsPage";
import ConfigurationPage from "./pages/websitePages/ConfigurationPage";
import CreateWebsitePage from "./pages/CreateWebsitePage";
import ArticleBuilderPage from "./pages/websitePages/ArticleBuilderPage";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import PluginDownloads from "./pages/PluginDownloads";

const routes: Route[] = [
  {
    path: "/login",
    Page: <LoginPage />,
    hideBreadcrumbds: true,
    displayName: "Login",
  },
  {
    path: "/signup",
    Page: <Signup />,
    hideBreadcrumbds: true,
    displayName: "Signup",
  },
  {
    path: "/reset-password",
    Page: <ResetPassword />,
    hideBreadcrumbds: true,
    displayName: "Reset Password",
  },
  {
    path: "/update-password",
    Page: <UpdatePassword />,
    isProtected: true,
    hideBreadcrumbds: true,
    hideGlobalLayout: true,
    displayName: "Update Password",
  },
  {
    path: "/company/new",
    Page: <LoginPage />,
    hideBreadcrumbds: true,
  },
  {
    path: "/",
    Page: <Homepage />,
    isProtected: true,
    hideBreadcrumbds: true,
    displayName: "Home",
  },
  {
    path: "/websites",
    Page: <Homepage />,
    isProtected: true,
    hideBreadcrumbds: true,
    displayName: "My Websites",
  },
  {
    path: "/support",
    Page: <p>Support page</p>,
    isProtected: true,
    hideBreadcrumbds: true,
    displayName: "Support",
  },
  {
    path: "/websites/:websiteId/",
    Page: <Overview />,
    isProtected: true,
    displayName: "Website Overview",
  },
  {
    path: "/websites/:websiteId/keywords",
    Page: <Keywords />,
    isProtected: true,
    displayName: "Website Keywords",
  },
  {
    path: "/websites/:websiteId/writer-settings",
    Page: <WriterSettingsPage />,
    isProtected: true,
    displayName: "Writer Settings",
  },
  {
    path: "/websites/:websiteId/config",
    Page: <ConfigurationPage />,
    isProtected: true,
    displayName: "Website Configurations",
  },
  {
    path: "/websites/:websiteId/articles",
    Page: <Articles />,
    isProtected: true,
    displayName: "Website Articles",
  },
  {
    path: "/websites/:websiteId/builder",
    Page: <ArticleBuilderPage />,
    isProtected: true,
    hideBreadcrumbds: true,
  },
  {
    path: "/websites/:websiteId/history",
    Page: <HistoryPage />,
    isProtected: true,
    role: UserRole.SUPER_ADMIN,
    displayName: "Writer History",
  },
  {
    path: "/websites/:websiteId/articles/:articleId/edit",
    Page: <ArticleViewerPage />,
    isProtected: true,
    displayName: "Edit Article",
  },
  {
    path: "/websites/new",
    Page: <CreateWebsitePage />,
    isProtected: true,
    hideGlobalLayout: true,
    displayName: "Connect Your Website",
  },
  {
    path: "/plugins",
    Page: <PluginDownloads />,
    isProtected: true,
    hideGlobalLayout: false,
    hideBreadcrumbds: true,
  },
  {
    path: "*",
    Page: <h1>Oops, this is 404 :(</h1>,
    displayName: "404",
  },
];

export default routes;
