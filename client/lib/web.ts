const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function httpGet(path: string) {
  const url = `http://${BASE_URL}${path}`;
  const res = await fetch(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
  });
  return await res.json();
}

export async function httpPost<T>(path: string, data: T) {
  const url = `http://${BASE_URL}${path}`;

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return await res.json();
}
