export const calculateDuration = (startDate: string, lang: 'th' | 'en' = 'en'): string => {
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
      const yearLabel = lang === 'th' ? 'ปี' : 'year';
      result.push(`${years} ${yearLabel}${years > 1 && lang === 'en' ? 's' : ''}`);
    }
  
    if (months > 0) {
      const monthLabel = lang === 'th' ? 'เดือน' : 'month';
      result.push(`${months} ${monthLabel}${months > 1 && lang === 'en' ? 's' : ''}`);
    }
  
    return result.join(" ");
  };
  