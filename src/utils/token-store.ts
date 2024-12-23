import CustomerModel from "@/models/common/customer-model";

export function getAuthToken(): string | null {
  return localStorage.getItem("token");
}

export function setAuthToken(token: string) {
  localStorage.setItem("token", token);
}

export function setUserData(data: CustomerModel) {
  localStorage.setItem("userData", JSON.stringify(data));
}
