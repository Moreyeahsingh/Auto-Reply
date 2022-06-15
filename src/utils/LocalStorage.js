
const TOKEN = {
  USER_TOKEN: "authToken",
};
/**
 * localstorage to maintain user status
 */
class LocalStorage {
  static StoreToken = (token) => {
    localStorage.setItem(TOKEN.USER_TOKEN, token);
  };
  static GetToken = () => {
    localStorage.getItem(TOKEN.USER_TOKEN);
  };
  static CleartToken = () => {
    localStorage.removeItem(TOKEN.USER_TOKEN);
  };
  static ClearLocalstorage = () => {
    localStorage.clear();
  };

}
export default LocalStorage;
