/* eslint class-methods-use-this: ["error", {
  "exceptMethods": ["setLocalStorage", "getLocalStorage"] }] */
class LocalStorage {
  constructor() {
    if (typeof LocalStorage.instance === 'object') {
      return LocalStorage.instance;
    }
    LocalStorage.instance = this;
    return this;
  }

  setLocalStorage(path, { ...item }) {
    const items = JSON.parse(localStorage.getItem(`JS-Band-${path}`)) || [];
    const newItem = { ...item };
    items.push(newItem);
    localStorage.setItem(`JS-Band-${path}`, JSON.stringify(items));
  }

  getLocalStorage(path) {
    return JSON.parse(localStorage.getItem(`JS-Band-${path}`));
  }
}

export default LocalStorage;
