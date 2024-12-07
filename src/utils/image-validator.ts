import { StaticImageData } from "next/image";
import auramLogoWithText from "../../public/images/auram-logo-with-text.webp";
import { IMAGE_URL } from "@/services/queryUrls";

const imageValidator = (
  imageSrc: string | undefined
): string | StaticImageData => {
  if (imageSrc === undefined || imageSrc === null || imageSrc === "") {
    return auramLogoWithText;
  }
  const baseUrl = process.env.NEXT_PUBLIC_BASE_IMAGE_URL ?? IMAGE_URL;

  return imageSrc.includes("https") || imageSrc.includes("http")
    ? imageSrc
    : baseUrl + "/" + imageSrc;
};

export default imageValidator;
