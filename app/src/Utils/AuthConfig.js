const ACCESS_TOKEN_KEY = 'access_token';

export function setAccessToken(access_token) {
  return sessionStorage.setItem(ACCESS_TOKEN_KEY, access_token);
}

export function getAccessToken() {
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}
