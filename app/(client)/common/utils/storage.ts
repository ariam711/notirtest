export function setStorage<T>(key: string, value: T) {
  localStorage.setItem(key, Buffer.from(JSON.stringify(value), 'binary').toString('base64'));
}
export function getStorage<T>(key: string): T {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(Buffer.from(data, 'base64').toString('binary')) : undefined;
}
export function removeStorage(key: string) {
  localStorage.removeItem(key);
}
