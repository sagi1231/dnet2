import { useParams } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import Link from "../../components/common/Link";
import { articleState } from "../../state/articleState";

const EditorStyled = styled(ReactQuill)`
  padding: 10px;
  border: none !important;
  background-color: white;
  border-radius: 16px;
  margin-top: 20px;
  font-family: "Plus Jakarta Sans", sans-serif !important;
  letter-spacing: -0px !important;

  p {
    font-size: 16px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
  }

  h1 {
    font-size: 30px !important;
    margin-bottom: 20px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
  }

  h2 {
    font-size: 22px !important;
    margin-top: 12px !important;
    margin-bottom: 6px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
  }

  h3 {
    font-size: 18px !important;
    margin-top: 12px !important;
    margin-bottom: 6px !important;
    font-family: "Plus Jakarta Sans", sans-serif !important;
  }

  div {
    border: none !important;
  }

  .ql-toolbar {
    position: sticky;
    background: white;
    z-index: 20;
    /* right: 100px; */
    top: 30px;
    /* right: 0; */
    width: max-content;
    padding: 40px;
    border-radius: 13px;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 5%);
    margin-left: auto;
  }

  .quill {
    position: relative;
  }
`;

const ArticleViewerPage: React.FC = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useRecoilState(
    articleState(articleId as string)
  );
  const title = `<h1>${article?.title}</h1>`;

  // eslint-disable-next-line react/jsx-no-undef
  return <EditorStyled value={title + article?.body} onChange={() => {}} />;
};

export default ArticleViewerPage;
