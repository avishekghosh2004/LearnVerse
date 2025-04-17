import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
});

export const coursesState = atom({
  key: "coursesState",
  default: [],
});

export const loadingState = atom({
  key: "loadingState",
  default: false,
});
