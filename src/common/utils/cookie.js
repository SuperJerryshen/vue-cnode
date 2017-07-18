/**
 * Created by jerryshen on 2017/7/15.
 */
export function setCookie (name, value, exdays) {
  var time = new Date()
  time.setTime(time.getTime() + exdays * 24 * 3600 * 1000)
  var expires = 'expires=' + time.toGMTString()
  document.cookie = name + '=' + value + ';' + expires
}

export function getCookie (name) {
  const cname = name + '='
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim()
    if (cookie.indexOf(cname) === 0) {
      return {
        success: true,
        cookie: {
          name,
          value: cookie.split(cname)[1]
        }
      }
    } else {
      return {
        success: false,
        cookie: {
          name,
          value: undefined
        }
      }
    }
  }
}

export function deleteCookie (name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}
