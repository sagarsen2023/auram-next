export default interface CustomerModel {
  status: "ACTIVE" | "INACTIVE" | string;
  _id: string;
  email: string;
  phone: string;
  honorific: string | null;
  fullName: string;
  whatsapp: string | null;
  gender: "male" | "female" | "other" | string;
  dob: string | null;
  dateOfAnniversary: string | null;
  countryCode: string;
  createdAt: string;
  updatedAt: string;
}
