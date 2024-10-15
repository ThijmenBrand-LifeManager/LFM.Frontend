import BaseApi from ".";

export const authorizationApi = new BaseApi(import.meta.env.VITE_AUTH_API_URL);

export const useLoginRequest = async (email: string, password: string) => {
  return await authorizationApi.post(
    "/Account/login",
    JSON.stringify({ email, password })
  );
};

export const useMeRequest = async () => {
  return await authorizationApi.get("/me");
};
