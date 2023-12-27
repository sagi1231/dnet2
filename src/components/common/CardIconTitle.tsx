import styled from "styled-components";

interface Props {
  title: string;
  icon: JSX.Element;
  subTitle?: string;
}

const Wrapper = styled.div`
  margin-bottom: 1.5em;
`;

const IconWrapper = styled.div`
  display: flex;
  background: #eae2fe;
  color: #a259ff;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  margin-right: 1.5em;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 16px;
    color: #1d1a27;
    font-weight: 400;
  }
`;

const CardIconTitle: React.FC<Props> = (props) => {
  return (
    <Wrapper className="flex flex-row">
      <IconWrapper>{props.icon}</IconWrapper>
      <TextWrapper>
        <h4>{props.title}</h4>
        {props.subTitle && <h5>{props.subTitle}</h5>}
      </TextWrapper>
    </Wrapper>
  );
};

export default CardIconTitle;
