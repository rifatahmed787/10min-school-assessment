export function ParamSerialization<T extends Record<string, never>>(param: T) {
  const str: string[] = [];
  for (const p in param) {
    if (Object.prototype.hasOwnProperty.call(param, p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(param[p]));
    }
  }
  return str.join("&");
}
