import styled from "styled-components";
import { ReactComponent as SpeaklesIcon } from "../../assets/Icons/Sparkles.svg";

const BadgeStyle = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 50rem;
  font-size: 0.625rem;
  font-style: normal;
  color: white;
  font-weight: 400;
  letter-spacing: -0.01875rem;
  text-transform: capitalize;
  position: relative;
  background: red;

  &:hover .kw-overly {
    opacity: 1;
  }

  &:hover .kw-overly svg path {
    opacity: 1;
  }
`;

interface Props {
  children: string;
}
const KeywordBadge: React.FC<Props> = ({ children }) => {
  return (
    <BadgeStyle className="kw-bg">
      <SpeaklesIcon />
      {children}
    </BadgeStyle>
  );
};

export default KeywordBadge;
