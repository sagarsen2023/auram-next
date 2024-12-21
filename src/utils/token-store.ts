import { VerifyOtpResponse } from "@/models/auth/auth-response.model";

export function getAuthToken() {
  return localStorage.getItem("token");
}

export function setAuthToken(token: string) {
  localStorage.setItem("token", token);
}

export function setUserData(data: VerifyOtpResponse["data"]["customer"]) {
  localStorage.setItem("userData", JSON.stringify(data));
}
