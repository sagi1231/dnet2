import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { validateUserAccess } from "../../middleware/validateUserAccess";
import { userStateSelector } from "../../state/userState";
import MenuItem from "../menu/MenuItem";
import { MenuItemProps } from "../menu/types/MenuItemProps";

interface Props {
  items: MenuItemProps[];
  prefix?: string;
}

const Wrapper = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 10px 0;
  position: sticky;
  top: -30px;
  background: white;
  z-index: 55;
`;

const TabsNav: React.FC<Props> = ({ items, prefix }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useRecoilValue(userStateSelector)!!;
  const routePrefix = prefix || "";
  return (
    <Wrapper>
      {items
        .filter((item) => validateUserAccess(user.role, item.role))
        .map((menuItem) => (
          <MenuItem
            key={menuItem.route}
            onClick={() => navigate(routePrefix + menuItem.route)}
            isActive={
              pathname.endsWith(routePrefix + menuItem.route) ||
              pathname.endsWith(routePrefix + menuItem.route + "/")
            }
            className="flex justify-content-start align-items-center"
            isBold={menuItem.bold}
          >
            <>
              {menuItem.icon}
              <span className="pl-2">{menuItem.displayName}</span>
            </>
          </MenuItem>
        ))}
    </Wrapper>
  );
};

export default TabsNav;
