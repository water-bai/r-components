import { CLASS_PREFIX } from "../constants";

export const getClassNameWithPrefix = (className: string) => {
  if(typeof className !== 'string') {
    return className;
  }
  return `${CLASS_PREFIX}${className}`
}
