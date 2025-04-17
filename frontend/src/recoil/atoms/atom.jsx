import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
  },
});

export const coursesState = atom({
  key: "coursesState",
  default: [], // Initialize with an empty array
});

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const errorState = atom({
  key: "errorState",
  default: null,
});
