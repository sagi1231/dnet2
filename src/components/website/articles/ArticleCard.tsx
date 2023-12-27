import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { websitesStateSelector } from "../../../state/websitesState";
import Link from "../../common/Link";
import EditIcon from "@mui/icons-material/Edit";
import ViewsIcon from "@mui/icons-material/Visibility";
import PreviewIcon from "@mui/icons-material/PreviewOutlined";
import ClockIcon from "@mui/icons-material/Schedule";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import { ArticleSummary } from "../../../core/entities/articleSummary";
import ProgressiveImage from "react-progressive-graceful-image";
import { useParams } from "react-router";

interface Props {
  articleSummary: ArticleSummary;
  isLastArticle?: boolean;
  isVertical?: boolean;
}

const BoxImage = styled.img<Props>`
  width: ${(props) => (props.isLastArticle ? "100%" : "30%")};
  box-sizing: content-box;
  height: ${(props) => (props.isLastArticle ? "100px" : "auto%")};
  object-fit: cover;
  border-radius: 13px;
  transition-duration: 0.25s;
`;

const BoxDesc = styled.div<Props>`
  margin-left: ${(props) => (props.isLastArticle ? "0" : "20px")};
  margin-top: ${(props) => (props.isLastArticle ? "10px" : "0")};
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
`;

const ArticleTitle = styled.span<Props>`
  font-size: ${(props) => (props.isLastArticle ? "14px" : "16px")};
  line-break: auto;
  font-weight: 600;
`;

const ArticleInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const InformationItem = styled.span<{ $purple?: boolean }>`
  color: ${(props) => (props.$purple ? "#741FFF" : "black")};
  font-size: 14px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  svg {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const ArticleKeywordsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const KeywordsBadge = styled.span`
  background: #f2f2f2;
  color: black;
  padding: 0.5em 1em;
  border-radius: 13px;
  background: rgb(242, 242, 242);
  color: black;
  padding: 0.5em 1em;
  border-radius: 25px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const IconButton = styled(EditIcon)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  color: #828282;
  font-size: 16px !important;
  transition-duration: 0.2s;
`;

const PreviewButton = styled(PreviewIcon)`
  position: absolute;
  right: 30px;
  bottom: 10px;
  color: #828282;
  font-size: 16px !important;
  transition-duration: 0.2s;
`;

const CardWrapper = styled.div<Props>`
  border: 1px solid var(--input-border-color, #e6e6e6);
  border-radius: 13px;
  position: relative;
  height: ${(props) => (props.isVertical ? "385px" : "180px")};
  background: white;
  cursor: pointer;
  padding: 15px;
  display: flex;
  flex-direction: ${(props) => (props.isLastArticle ? "column" : "row")};
  position: relative;

  &:hover {
    ${BoxImage} {
      transform: scale(0.98);
    }

    ${IconButton} {
      color: #741fff;
    }
  }
`;

const ArticleCard: React.FC<Props> = (props) => {
  const { websiteId } = useParams();
  return (
    <div key={props.articleSummary.id} className="col-6">
      <Link
        path={`/websites/${websiteId}/articles/${props.articleSummary.id}/edit`}
      >
        <CardWrapper {...props} className="articlewrapper">
          <ProgressiveImage
            src={props.articleSummary.imageSrc}
            placeholder="/demoimg.png"
          >
            {(src) => <BoxImage {...props} src={src} />}
          </ProgressiveImage>
          <BoxDesc {...props} className="">
            <div className="flex flex-column">
              <ArticleTitle {...props}>
                {props.articleSummary.title}
              </ArticleTitle>
              <ArticleKeywordsWrapper>
                {props.articleSummary.tags.map((keyword) => (
                  <KeywordsBadge>#{keyword.toLowerCase()}</KeywordsBadge>
                ))}
              </ArticleKeywordsWrapper>
            </div>
            <ArticleInformationWrapper>
              <InformationItem $purple>
                <ViewsIcon />
                {props.articleSummary.views} views
              </InformationItem>
              <InformationItem>
                <ClockIcon />
                {props.articleSummary.metadata.readingTime} min
              </InformationItem>
              <InformationItem className={props.isLastArticle ? "hidden" : ""}>
                <CalendarIcon />
                {new Date(props.articleSummary.createdAt).toDateString()}
              </InformationItem>
            </ArticleInformationWrapper>
          </BoxDesc>
          <Link differentTab path={props.articleSummary.externalLink}>
            <PreviewButton />
          </Link>
          <IconButton />
        </CardWrapper>
      </Link>
    </div>
  );
};

export default ArticleCard;
