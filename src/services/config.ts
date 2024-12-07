// import { getToken } from "../hooks/token";
import { BASE_URL } from "./queryUrls";

interface APIOptions extends RequestInit {
  headers?: Record<string, string>;
}

async function request<T>(
  method: string,
  endpoint: string,
  options: APIOptions = {}
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`;
  //   const token = await getToken();

  const response = await fetch(url, {
    ...options,
    method,
    headers: {
      "Content-Type": "application/json",
      //   ...(typeof token === "string" && { Authorization: `Bearer ${token}` }),

      ...options.headers,
    },
  });

  return response.json();
}

export const fetchAPI = {
  get: <T>(endpoint: string, options: APIOptions = {}) =>
    request<T>("GET", endpoint, options),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: <T>(endpoint: string, body: any, options: APIOptions = {}) =>
    request<T>("POST", endpoint, { ...options, body: JSON.stringify(body) }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  put: <T>(endpoint: string, body: any, options: APIOptions = {}) =>
    request<T>("PUT", endpoint, { ...options, body: JSON.stringify(body) }),
  delete: <T>(endpoint: string, options: APIOptions = {}) =>
    request<T>("DELETE", endpoint, options),
};
