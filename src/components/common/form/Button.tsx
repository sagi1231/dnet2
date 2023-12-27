import styled from "styled-components";
import Link, { LinkProps } from "../Link";
import { ReactComponent as ArrowRight } from "../../../assets/Icons/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../../assets/Icons/ArrowLeft.svg";

interface Attributes extends React.AllHTMLAttributes<HTMLDivElement> {
  arrowPlacement?: "left" | "right";
  primary?: boolean;
}

const StyledButton = styled.div<Attributes>`
  padding: 14px 16px;
  background: ${({ primary }) => (primary ? "#0A2540" : "#fff")};
  border-radius: 600px;
  color: ${({ primary }) => (primary ? "#fff" : "#0A2540")};
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: -0.1px;
  text-transform: capitalize;
  transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-property: background-color, opacity;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${({ primary }) => (primary ? "#0A2540" : "#fff")};
  }

  &:hover .HoverArrow__linePath {
    opacity: 1;
  }

  &:hover .HoverArrow__tipPath {
    opacity: 1;
    transition: transform 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(3px);
  }

  & .HoverArrow {
    --arrowSpacing: 5px;
    --arrowHoverTransition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
    --arrowHoverOffset: translateX(3px);
    --arrowTipTransform: none;
    --arrowLineOpacity: 0;
    position: relative;
    top: 1px;
    margin-left: ${({ arrowPlacement }) =>
      arrowPlacement == "right" ? "var(--arrowSpacing);" : "0;"};
    margin-right: ${({ arrowPlacement }) =>
      arrowPlacement == "left" ? "var(--arrowSpacing);" : "0;"};
    stroke-width: 2px;
    fill: none;
    stroke: currentColor;
  }
  & .HoverArrow__linePath {
    opacity: var(--arrowLineOpacity);
    transition: opacity var(--hoverTransition, var(--arrowHoverTransition));
  }
  & .HoverArrow__tipPath {
    transform: var(--arrowTipTransform);
    transition: transform var(--hoverTransition, var(--arrowHoverTransition));
  }
`;
const Button: React.FC<Attributes> = ({
  children,
  disabled,
  onClick,
  arrowPlacement,
  primary,
  className,
}) => {
  return (
    <StyledButton
      {...{ children, disabled, onClick, arrowPlacement, primary, className }}
    >
      <>
        {arrowPlacement === "left" && <ArrowLeft />}
        {children}
        {arrowPlacement === "right" && <ArrowRight />}
      </>
    </StyledButton>
  );
};

export default Button;
