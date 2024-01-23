import CookieManager from "react-native-cookies";

export const setCookie = async (sessionId: string) => {
  if (sessionId) {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getMinutes() + 50);

    const cookie = `sessionId=${sessionId}; Domain=localhost; Path=/; Expires=${expirationDate.toUTCString()}`;

    CookieManager.set({
      name: "sessionId",
      value: cookie,
      domain: "localhost",
      path: "/",
    });
  }
};

export const getCookies = async () => {
  const cookies = await CookieManager.get('your-domain.com');
  console.log('Cookies:', cookies);
};

export const clearCookies = () => {
  CookieManager.clearAll();
};
