export const calculateDuration = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const result: string[] = [];

  if (years > 0) {
    result.push(`${years} year${years > 1 ? "s" : ""}`);
  }

  if (months > 0) {
    result.push(`${months} month${months > 1 ? "s" : ""}`);
  }

  return result.join(" ");
};