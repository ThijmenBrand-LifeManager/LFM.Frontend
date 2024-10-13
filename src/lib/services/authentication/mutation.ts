import { QueryClient, useMutation, useQuery } from "@tanstack/vue-query";
import { User } from "./models/userModel";
import { useAuth } from "./authentication";

export const useAuthenticate = () =>
  useMutation({
    mutationKey: ["authenticate"],
    mutationFn: async (params: { email: string; password: string }) => {
      const response = await fetch("http://localhost:5001/Account/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: params.email,
          password: params.password,
        }),
      });
      return await response.json();
    },
    onSuccess: (data: User) => {
      useAuth().setUser(data, true);
    },
  });
