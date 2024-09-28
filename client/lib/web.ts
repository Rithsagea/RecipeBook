export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function httpGet(path: string) {
  const url = `http://${BASE_URL}${path}`;
  const res = await fetch(url, {});
  const data = await res.json();
  console.log(data);
  return data;
}

export async function httpPost<T>(path: string, data: T) {
  const url = `http://${BASE_URL}${path}`;

  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return await res.json();
}
