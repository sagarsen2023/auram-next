import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function classNameMerger(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export { classNameMerger };
export default classNameMerger;
