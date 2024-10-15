import { useMutation } from "@tanstack/vue-query";
import { User } from "./models/userModel";
import { useLoginRequest } from "../api/authorization";

export const useAuthenticate = () =>
  useMutation({
    mutationKey: ["authenticate"],
    mutationFn: async (params: { email: string; password: string }) => {
      const response = await useLoginRequest(params.email, params.password);
      return await response.data;
    },
    onSuccess: (data: User) => {
      useAuth().setUser(data, true);
    },
  });
