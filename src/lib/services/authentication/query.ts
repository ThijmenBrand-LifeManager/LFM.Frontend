import { QueryClient, useQuery } from "@tanstack/vue-query";
import { User } from "./models/userModel";

export const useGetUser = (token: string, client?: QueryClient) =>
  useQuery(
    {
      queryKey: ["user"],
      queryFn: async (): Promise<User> => {
        const response = await fetch("http://localhost:5001/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.json();
      },
    },
    client
  );
