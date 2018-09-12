/**
 * Created by jerryshen on 2017/7/15.
 * 用户本地cookie的存取以及清空
 * 函数的功能分别是：
 * 设置单个，获取所有，获取单个，删除所有，删除单个
 */

export function setCookie(name, value, exdays = 30) {
  const time = new Date();
  const addTime = exdays * 24 * 3600 * 1000;
  time.setTime(time.getTime() + addTime);
  const expires = `expires=${time.toGMTString()}`;
  document.cookie = `${name}=${value};${expires}`;
}

export function getAllCookies() {
  if (document.cookie === '') {
    return {};
  }
  const cookies = document.cookie.split(';');
  const newCookies = {};
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i].trim();
    const splitCookie = cookie.split('=');
    const [key, val] = splitCookie;
    newCookies[key] = val;
  }
  return newCookies;
}

export function getCookie(name) {
  const cname = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(cname) === 0) {
      return {
        success: true,
        cookie: {
          name,
          value: cookie.split(cname)[1],
        },
      };
    }
  }
  return {
    success: false,
    cookie: {
      name,
      value: undefined,
    },
  };
}

export function deleteAllCookie() {
  document.cookie += ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
}

export function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
