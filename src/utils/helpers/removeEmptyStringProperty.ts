export const removeEmptyStringOrZeroProperties = <T extends Record<string, unknown>>(
  selectedObject: T,
  propertiesName: string[]
): Partial<T> => {
  return Object.fromEntries(
    Object.entries(selectedObject).filter(([key, value]) => {
      return !propertiesName.includes(key) || (value !== "" && value !== 0);
    })
  ) as Partial<T>;
};
