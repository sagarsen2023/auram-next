import CustomerModel from "@/models/common/customer-model";

export function getAuthToken() {
  return localStorage.getItem("token");
}

export function setAuthToken(token: string) {
  localStorage.setItem("token", token);
}

export function setUserData(data: CustomerModel) {
  localStorage.setItem("userData", JSON.stringify(data));
}
