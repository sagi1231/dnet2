import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/Icons/Check.svg";
import Button from "../common/form/Button";

interface Props {
  children?: JSX.Element | JSX.Element[];
  bullets: string[];
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ListItem = styled.div`
  display: flex;
  gap: 10px;
  color: #0a2540;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.875rem */
  letter-spacing: -0.02625rem;

  & svg {
    fill: #0a2540;
    width: 0.81363rem;
    height: 0.81363rem;
  }
`;

const PackageIncludes: React.FC<Props> = ({ bullets }) => {
  return (
    <ListWrapper>
      {bullets.map((item, index) => (
        <ListItem key={index}>
          <div>
            <CheckIcon />
          </div>
          <div>{item}</div>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default PackageIncludes;
