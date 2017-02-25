/* eslint no-undef: 0 */
function getStorage(type) {
  const storage = window[type];
  if (storage === null || !storage.getItem || !storage.setItem) throw new TypeError(`Storage type '${type}'' not supported in this browser`);
  return storage;
}

export default class Storage {
  constructor(type) {
    this.storage = getStorage(type);
  }

  get(key) {
    const record = this.storage.getItem(key);
    if (!record) return false;
    const data = JSON.parse(record);
    if (data.expiry && new Date().getTime() < data.expiry) {
      return data.value;
    }

    this.storage.removeItem(key);
    return false;
  }

  set(key, item, expiryInMinutes) {
    const expiration = expiryInMinutes ? expiryInMinutes * 60 * 1000 : null;
    const data = {
      expiry: new Date().getTime() + expiration,
      value: item,
    };
    this.storage.setItem(key, JSON.stringify(data));
    return item;
  }
}
