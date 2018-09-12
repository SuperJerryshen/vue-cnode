// 用于深拷贝

export function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let c;
  if (obj instanceof Array) {
    c = [];
  } else {
    c = {};
  }
  Object.keys(obj).forEach((key) => {
    c[key] = deepCopy(obj[key]);
  });
  return c;
}

export default {
  deepCopy,
};
