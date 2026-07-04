export const isSameDate = (dateA: string, dateB: string): boolean => {
  return new Date(dateA).toDateString() === new Date(dateB).toDateString();
};

export const getTodayIso = (): string => {
  return new Date().toISOString();
};

export const formatDate = (date: string): string => {
  return new Intl.DateTimeFormat("ja-JP", {
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};
