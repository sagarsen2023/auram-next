// Base Urls
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://auram-api.onrender.com/api";
export const IMAGE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ??
  "https://pub-d7fc7e0204644a99b00264cba5e82690.r2.dev";

// Customer Auth Urls
export const SEND_OTP_URL = "/customer-auths/send-otp";
export const VERIFY_OTP_URL = "/customer-auths/verify-otp";
export const REGISTRATION_URL = "/customer-auths/registration";
export const SET_TOKEN_URL = "/api/set-token"; // Next js api route

// Banner
export const BANNER_URL = `/banners/user`;

// Collection
export const COLLECTION_URL = `/collections/user`;

// Item Urls
export const FEATURED_ITEMS_URL = "/items/user/feature";
export const LATEST_ITEMS_URL = "/items/user/latest-items";
export const ITEM_URL = "/items/user";

// Sort Filters Url
export const SORT_FILTERS_URL = "/items/user/sort-filter";

// Contact Info Url
export const CONTACT_INFO = `/general-infos`;
export const CONTACT_US_URL = `/contact-us`;

// Cart Urls
export const ADD_TO_CART_URL = "/carts/add-to-cart";
export const GET_CART_URL = "/carts/get-cart";
