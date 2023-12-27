import styled from "styled-components";

interface Props {
  isActive?: boolean;
  isBold?: boolean;
}

const getItemColor = (props: Props) => {
  if (props.isActive) {
    if (props.isBold) return "white";
    return "#A960EE";
  } else {
    if (props.isBold) return "#741fff";
    return "#425466";
  }
};

const getItemBackground = (props: Props) => {
  if (props.isActive) {
    if (props.isBold) return "#fafafa";
    return "#fafafa";
  } else {
    if (props.isBold) return "#fafafa";
    return "#fafafa";
  }
};

const getIconColor = (props: Props) => {
  if (props.isActive) {
    if (props.isBold) return "white";
    return "#A960EE";
  } else {
    if (props.isBold) return "#741fff";
    return "#425466";
  }
};
const MenuItem = styled.div<Props>`
  /* Adapt the colors based on primary prop */
  padding: 0.75em 1em;
  /* background: ${(props) => (props.isActive ? "#fafafa" : "transparent")}; */
  border-radius: 122px;
  font-size: 14px;
  letter-spacing: -0.03rem;
  color: ${(props) => getItemColor(props)};
  cursor: pointer;
  transition-duration: 0.2s;
  svg {
    fill: ${(props) => getIconColor(props)};
    width: 20px;
    height: 20px;
  }
  font-weight: 400;
  &:hover {
    background: ${(props) => (props.isBold ? "#741fff" : "#fafafa")};
    color: ${(props) => props.isBold && "white"};
    svg {
      color: ${(props) => props.isBold && "white"};
    }
  }
`;

export default MenuItem;
