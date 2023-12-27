import styled from "styled-components";
import Card from "../components/common/Card";
import { ReactComponent as WordpressIcon } from "../assets/Icons/CMSIcons/Wordpress.svg";
import { ReactComponent as Wix } from "../assets/Icons/CMSIcons/Wix.svg";
import CardTitle from "../components/common/CardTitle";
import Button from "../components/common/form/Button";
import WordpressBG from "../assets/images/CMSIcons/WordpressBG.png";
import WixBG from "../assets/images/CMSIcons/WixBG.png";
import ShopiftBG from "../assets/images/CMSIcons/ShopifyBG.png";
import WebflowBG from "../assets/images/CMSIcons/WebflowBG.png";
import AppConfig from "../config/appConfig";

const Title = styled.h1`
  font-size: 48px;
  margin-top: 10px;
  margin-bottom: 30px;
  color: #0a2540;
  font-weight: 700;
  line-height: 100%; /* 3rem */
  letter-spacing: -0.12rem;
`;

const Subtitle = styled.h2`
  color: #9aa8b6;
  margin: 0px;
  font-size: 12px;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 600;
  line-height: 100%;
`;

const CardStyle = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  & img {
    width: 75px;
  }
`;

const PluginDownloads: React.FC = () => {
  const onDownloadWordpressPlugin = () => {
    document.location.href = `${AppConfig.serverUrl}/integration/download/wordpress`;
  };
  return (
    <>
      <Subtitle>Download the relevant plugin for your CMS</Subtitle>
      <Title>Connection plugins</Title>

      <div className="grid">
        <div className="col-4">
          <CardStyle>
            <img src={WordpressBG} />
            <CardTitle title="WordPress" className="mt-3" />
            <Button
              onClick={onDownloadWordpressPlugin}
              primary
              arrowPlacement="right"
            >
              Download Plugin
            </Button>
          </CardStyle>
        </div>
        <div className="col-4">
          <CardStyle>
            <img src={WixBG} />
            <CardTitle title="Wix" className="mt-3" />
            <Button disabled arrowPlacement="right">
              Comming Soon
            </Button>
          </CardStyle>
        </div>
        <div className="col-4">
          <CardStyle>
            <img src={WebflowBG} />
            <CardTitle title="Webflow" className="mt-3" />
            <Button disabled arrowPlacement="right">
              Comming Soon
            </Button>
          </CardStyle>
        </div>
        <div className="col-4">
          <CardStyle>
            <img src={ShopiftBG} />
            <CardTitle title="Shopify" className="mt-3" />
            <Button disabled arrowPlacement="right">
              Comming Soon
            </Button>
          </CardStyle>
        </div>
      </div>
    </>
  );
};

export default PluginDownloads;
