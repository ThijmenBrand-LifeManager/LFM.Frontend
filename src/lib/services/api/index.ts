import getToken from "@/app/auth/tokenRetreiver";
import axios from "axios";

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
  const token = getToken();
  return createBaseClient(baseUrl, token);
}

export function createWorkstreamApi() {
  const baseUrl = import.meta.env.VITE_WORKSTREAM_API_URL;
  const token = getToken();
  return createBaseClient(baseUrl, token);
}
