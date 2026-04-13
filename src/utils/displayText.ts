const displayText = (value: string | number | null | undefined): string => {
  if (value === null || value === undefined) return "Unknown";
  if (typeof value === "string" && value.trim() === "") return "Unknown";
  return String(value);
};

export default displayText;
