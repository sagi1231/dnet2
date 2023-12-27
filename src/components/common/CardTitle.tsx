import styled from "styled-components";

interface Props {
  title: string;
  className?: string;
}

const SpanStyle = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 1.5em;
`;

const CardTitle: React.FC<Props> = (props) => {
  return <SpanStyle className={props.className}>{props.title}</SpanStyle>;
};

export default CardTitle;
