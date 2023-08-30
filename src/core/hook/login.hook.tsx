import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "@service/index";
export function useLogin() {
  // 是否处理loading状态
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const login = useCallback(
    (params: any) => {
      setLoginLoading(true);
      API.loginService
        .login(params)
        .then((data) => {
          setLoginLoading(false);
          navigate("/home");
        })
        .catch(() => {
          setLoginLoading(false);
        });
    },
    [navigate]
  );

  return {
    loginLoading,
    login,
  };
}
