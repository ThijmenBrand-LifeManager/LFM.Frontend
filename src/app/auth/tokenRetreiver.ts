export default function getToken(): string | null {
  const token = localStorage.getItem("auth_token_default");
  return token?.replace(/"/g, "") ?? null;
}
