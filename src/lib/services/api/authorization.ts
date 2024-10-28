import { createAuthorizationApi } from ".";

export const useMeRequest = async () => {
  return await createAuthorizationApi().get("/me");
};
