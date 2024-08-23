import StringRoutes from "@/Constants/stringRoutes";
import useAuth from "@/Hooks/Auth/useAuth";
import { useEffect, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthRoutes = () => {
  const { isSessionActive, onInitialize } = useAuth();
  const navigate = useNavigate();

  const initializeSession = useCallback(() => {
    onInitialize();
  }, [onInitialize]);

  useEffect(() => {
    initializeSession(); // check if the session is expired

    if (!isSessionActive) {
      navigate(StringRoutes.login);
    }
  }, [isSessionActive, initializeSession, navigate]);

  return <Outlet />;
};

export default AuthRoutes;
