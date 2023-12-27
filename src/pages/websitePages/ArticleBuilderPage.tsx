import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { articleBuilderState } from "../../state/articleBuilderState";

const ArticleBuilderPage: React.FC = () => {
  const { websiteId } = useParams();
  const articleBuilder = useRecoilValue(
    articleBuilderState(websiteId as string)
  );

  return (
    <>
      <h1>{articleBuilder?.displayName}</h1>
      {articleBuilder?.articleBuilderWidget.map((widget) => (
        <p>{widget.type}</p>
      ))}
    </>
  );
};

export default ArticleBuilderPage;
