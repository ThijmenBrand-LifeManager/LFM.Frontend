export interface User {
  id: string;
  email: string;
  username: string;
  token: string;
}

export interface UserState {
  authenticating: boolean;
  user?: User;
  error?: Error;
}
