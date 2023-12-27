import { useMemo } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import styled from "styled-components";
import { formatWebsiteUrl } from "../../common/utils/formatWebsiteUrl";
import { websitesStateSelector } from "../../state/websitesState";
import Link from "../common/Link";
import { SpeedDial } from "primereact/speeddial";
import { publisherService } from "../../core/services/publisher.service";
import bgsrc from "../../assets/images/card-bg.png";
import Button from "../common/form/Button";
import { ReactComponent as ArrowRight } from "../../assets/Icons/ArrowRight.svg";

interface Props {
  websiteUrl: string;
  websiteId: string;
  isSelected?: boolean;
}

const SubMenuItem = styled(Link)<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #494949;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.0225rem;
  text-transform: lowercase;
`;

const Square = styled.span`
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 4px;
`;

const SideBarWebsiteItem: React.FC<Props> = ({
  websiteId,
  websiteUrl,
  isSelected,
}) => {
  const formattedUrl = useMemo(
    () => formatWebsiteUrl(websiteUrl),
    [websiteUrl]
  );

  return (
    <SubMenuItem isSelected={isSelected} path={`/websites/${websiteId}`}>
      <Square className="square-colored" />
      {formattedUrl}
    </SubMenuItem>
  );
};

export default SideBarWebsiteItem;
