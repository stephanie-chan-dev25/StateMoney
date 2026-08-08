import { getToken, removeToken } from "../services/authService"


export async function apiFetch(
  url: string,
  options: RequestInit = {}
) {
  const token = getToken()

  const response = await fetch(
    url,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
        ...options.headers,
      },
    }
  )

  if (response.status === 401) {
    removeToken()
    window.location.href = "/login"
  }

  return response
}