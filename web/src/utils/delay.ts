export const delay = (ms: number) =>  {
  return new Promise(resolveFunc => setTimeout(resolveFunc, ms));
}