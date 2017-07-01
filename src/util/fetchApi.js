import qs from 'querystring';

function fetchApi({
  url,
  method = 'GET',
  params,
  json = false,
  customHeaders = {}
}) {
  const headers = new Headers();
  if (json) {
    headers.append('Content-Type', 'application/json');
  } else {
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  }
  Object.keys(customHeaders).forEach((k) => {
    headers.append(k, customHeaders[k]);
  });

  const fetch_options = {
    method,
    headers,
    credentials: 'include'
  };

  if (params) {
    const body = json ? JSON.stringify(params) : qs.stringify(params);
    fetch_options.body = body;
  }

  return fetch(url, fetch_options).then((response) => {
    return response.json();
  });
}

export default fetchApi;
