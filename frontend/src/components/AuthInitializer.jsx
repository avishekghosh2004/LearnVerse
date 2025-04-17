import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil/atoms/atom";
import API from "../api/axios";

const AuthInitializer = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        // Clear any remaining auth state if no token exists
        setAuth({
          isAuthenticated: false,
          user: null,
          token: null,
        });
        return;
      }

      try {
        // Verify token with backend
        const response = await API.get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.user) {
          setAuth({
            isAuthenticated: true,
            user: response.data.user,
            token,
          });
        } else {
          // Clear invalid auth state
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setAuth({
            isAuthenticated: false,
            user: null,
            token: null,
          });
        }
      } catch {
        // Clear invalid auth state on error
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setAuth({
          isAuthenticated: false,
          user: null,
          token: null,
        });
      }
    };

    initializeAuth();
  }, [setAuth]);

  return null;
};

export default AuthInitializer;
