export function storeData(key, data) {
  const STORAGE_KEY = `APP-${key}`;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function retriveData(key) {
  const STORAGE_KEY = `APP-${key}`;
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    return null;
  }
}
