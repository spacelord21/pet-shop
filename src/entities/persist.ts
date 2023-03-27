export const getDataFromLocaleStorage = <T>(
  key: string,
  timeout: number
): T | undefined => {
  const item = localStorage.getItem(key);
  if (item === null) return;
  const { time, value }: { time: number; value: T } = JSON.parse(item);
  if (time + timeout * 1000 < Date.now()) return;
  return value;
};

export const setDataInLocaleStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify({ time: Date.now(), value }));
};
