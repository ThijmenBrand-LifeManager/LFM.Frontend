import { eraseCookie, getCookie, setCookie } from "@/lib/utils/Cookie";
import { User, UserState } from "./models/userModel";
import { reactive, toRefs, watch } from "vue";
import { QueryClient } from "@tanstack/vue-query";
import { useGetUser } from "./query";
import router from "@/pages/routes";

const AuthKey: string = "LFM_user";

export const userStore = reactive<UserState>({
  authenticating: false,
  user: undefined,
  error: undefined,
});

export const silentAuth = async () => {
  const token = sessionStorage.getItem(AuthKey) || getCookie(AuthKey);
  const queryClient = new QueryClient();

  if (token) {
    userStore.authenticating = true;

    return new Promise<User>((resolve, reject) => {
      const { isLoading, error, data } = useGetUser(token, queryClient);
      watch([isLoading], () => {
        if (error.value) {
          sessionStorage.removeItem(AuthKey);

          reject(userStore.error);
        } else if (data.value) {
          userStore.user = data.value;
          resolve(userStore.user);
        }

        userStore.authenticating = false;
      });
    });
  }
};

export const useAuth = () => {
  const setUser = (payload: User, remember: boolean) => {
    if (remember) {
      //Save
      setCookie(AuthKey, payload.token, 30);
    }

    sessionStorage.setItem(AuthKey, payload.token);
    userStore.user = payload;
    userStore.error = undefined;
  };

  const logout = () => {
    sessionStorage.removeItem(AuthKey);
    eraseCookie(AuthKey);
    router.push({ name: "Login" });
    return Promise.resolve((userStore.user = undefined));
  };

  const authenticated = () => userStore.user !== undefined;

  return {
    setUser,
    logout,
    authenticated,
    ...toRefs(userStore),
  };
};
