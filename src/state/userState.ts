import { User } from "../core/entities/user";
import { atom, selector } from "recoil";
import userService from "../core/services/user.service";

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});

export const userStateSelector = selector<User | null>({
  key: "userStateSelector",
  get: ({ get }) => {
    const user = get(userState);
    return user || userService.whoAmI();
  },
});
