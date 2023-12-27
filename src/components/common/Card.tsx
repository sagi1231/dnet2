import styled from "styled-components";

interface Props {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
}

const CardWrapper = styled.div`
  background: white;
  padding: 1.5rem;
  border: 1px solid var(--input-border-color, #e6e6e6);

  border-radius: 13px;
`;

const Card: React.FC<Props> = ({ children, className }) => {
  return <CardWrapper className={className}>{children}</CardWrapper>;
};

export default Card;
