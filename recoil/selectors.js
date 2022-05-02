import { selector } from "recoil";

import { initialFormState } from "./atoms";

export const userState = selector({
  key: "userState",
  get: ({ get }) => {
    const user = get(initialFormState);
    return user;
  },
});
