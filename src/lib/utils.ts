/* Utility helpers shared across components */
type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Record<string, boolean | null | undefined>;

export function cn(...inputs: ClassValue[]) {
  const classes: string[] = [];

  inputs.forEach((value) => {
    if (!value) return;
    if (typeof value === "string" || typeof value === "number") {
      classes.push(String(value));
      return;
    }
    if (typeof value === "object") {
      Object.entries(value).forEach(([key, condition]) => {
        if (condition) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}
