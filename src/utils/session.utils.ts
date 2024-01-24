import AsyncStorage from "@react-native-async-storage/async-storage";

AsyncStorage;

export const setCookie = async (sessionId: string) => {
  if (sessionId) {
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 50);

    const cookie = `${
      process.env.NAME_COOKIE
    }=${sessionId}; Expires=${expirationDate.toUTCString()}`;

    await AsyncStorage.setItem(process.env.NAME_COOKIE as string, cookie);
  }
};

export const getCookies = async () => {
  return await AsyncStorage.getItem(process.env.NAME_COOKIE as string);
};

export const clearCookies = async () => {
  await AsyncStorage.clear();
};

export const isExpiration = async () => {
  try {
    const session = await getCookies();
    if (!session) {
      return null;
    }

    const parsedCookie = parseCookieString(session);

    const expirationDate = new Date(parsedCookie.Expires);

    const now = new Date();
    const difference: number = expirationDate.getTime() - now.getTime();

    if (difference > 0) {
      return session;
    } else {
      await clearCookies()
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

function parseCookieString(cookieString: string) {
  const cookies = {} as any;
  cookieString.split(";").forEach((cookie) => {
    const parts = cookie.split("=");
    const name = parts[0].trim();
    const value = parts[1];
    cookies[name] = value;
  });
  return cookies;
}
