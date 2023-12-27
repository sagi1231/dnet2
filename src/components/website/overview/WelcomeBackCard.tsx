import styled from "styled-components";
import Link from "../../common/Link";

const CardStyle = styled.div`
  background: #90e0ff;
  padding: 0 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 13px;
  color: white;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: Lato;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.045rem;
    text-transform: capitalize;
  }

  h2 {
    position: relative;
    font-family: Lato;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 1rem */
    letter-spacing: -0.03rem;
    text-transform: capitalize;
  }

  span {
    position: absolute;
    z-index: 2;
    background: white;
    color: #90e0ff;
    padding: 0.75rem 1.5rem;
    border-radius: 13px;
    width: fit-content;
    right: 15px;
    font-size: 12px;
    bottom: 15px;
  }
`;

const WelcomeBackCard: React.FC = () => {
  return (
    <CardStyle>
      <h2>Monday, July 31</h2>
      <h1>Good morning, Shay</h1>
    </CardStyle>
  );
};

export default WelcomeBackCard;
