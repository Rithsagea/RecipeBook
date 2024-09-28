import { Session } from 'next-auth';

const BASE_URL = process.env.BACKEND_URL;

export async function httpGet(path: string, session: Session | null) {
  let url = `http://${BASE_URL}${path}`;
  const email = session?.user?.email;
  if (email) url += `?user=${email}`;
  const res = await fetch(url);
  return await res.json();
}
