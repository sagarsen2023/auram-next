// Base Urls
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://auram-api.onrender.com/api";
export const IMAGE_URL =
  process.env.NEXT_PUBLIC_IMAGE_BASE_URL ??
  "https://pub-d7fc7e0204644a99b00264cba5e82690.r2.dev";

// Banner
export const BANNER_URL = `/banners/user`;

// Collection
export const COLLECTION_URL = `/collections/user`;

// FEATURED PRODUCTS URL
export const FEATURED_PRODUCTS_URL = "/items/user/feature";

// LATEST PRODUCTS URL
export const LATEST_PRODUCTS_URL = "/items/user/latest-items";
