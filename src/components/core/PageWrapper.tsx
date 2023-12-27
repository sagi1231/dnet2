import React, { useEffect } from "react";
import styled from "styled-components";
import Route from "../../core/types/route";
import Protected from "../../middleware/protected";
import FadeIn from "../common/FadeIn";
import PrivateLayout from "./PrivateLayout";

const PageWrapper: React.FC<{ Route: Route }> = ({ Route }) => {
  useEffect(() => {
    const pageTitle = (Route.displayName || "App") + " - Ghostwrite";
    document.title = pageTitle;
  }, [Route.displayName]);

  if (Route.isProtected) {
    return (
      <Protected neededRole={Route.role}>
        {Route.hideGlobalLayout ? (
          Route.Page
        ) : (
          <PrivateLayout showBreadcrumbs={!Route.hideBreadcrumbds}>
            {Route.Page}
          </PrivateLayout>
        )}
      </Protected>
    );
  } else return Route.Page;
};

export default PageWrapper;
