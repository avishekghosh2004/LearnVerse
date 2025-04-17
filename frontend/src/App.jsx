import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { authState } from "./recoil/atoms/atom";
import AppRouter from "./router/AppRouter";
import API from "./api/axios";

const AuthInitializer = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Verify token and get user data
      API.get("/auth/me")
        .then((response) => {
          setAuth({
            isAuthenticated: true,
            user: response.data.user,
            token,
          });
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, [setAuth]);

  return null;
};

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <AuthInitializer />
        <AppRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
