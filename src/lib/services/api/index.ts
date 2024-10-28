import axios from "axios";
import { useAuth } from "vue-auth3";

const createBaseClient = (baseUrl: string, token: string | null) => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};

export function createAuthorizationApi() {
  const baseUrl = import.meta.env.VITE_AUTH_API_URL;
  console.log(useAuth());
  const token = useAuth().token();
  return createBaseClient(baseUrl, token);
}

export function createWorkstreamApi() {
  const baseUrl = import.meta.env.VITE_WORKSTREAM_API_URL;
  const localToken = localStorage.getItem("auth_token_default");
  return createBaseClient(baseUrl, localToken?.replace(/"/g, "")!);
}
