import { QueryClient, useQuery } from "@tanstack/vue-query";
import { User } from "./models/userModel";
import { useMeRequest } from "../api/authorization";

export const useGetUser = (client?: QueryClient) =>
  useQuery(
    {
      queryKey: ["user"],
      queryFn: async (): Promise<User> => {
        const response = await useMeRequest();
        return response.data;
      },
    },
    client
  );
