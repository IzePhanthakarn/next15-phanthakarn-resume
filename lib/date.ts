export const calculateDuration = (
  startDate: string,
  lang: "th-TH" | "en-US" = "en-US"
): string => {
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
    const yearLabel = lang === "th-TH" ? "ปี" : "year";
    result.push(
      `${years} ${yearLabel}${years > 1 && lang === "en-US" ? "s" : ""}`
    );
  }

  if (months > 0) {
    const monthLabel = lang === "th-TH" ? "เดือน" : "month";
    result.push(
      `${months} ${monthLabel}${months > 1 && lang === "en-US" ? "s" : ""}`
    );
  }

  return result.join(" ");
};
