import { cookies } from 'next/headers';

export async function getNotices() {
  'use server';
  const accessToken = cookies().get('Access')?.value;
  try {
    const response = await fetch(`${process.env.API_URL}/notice`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      next: {
        tags: ['notice'],
      },
    });
    const notices = await response.json();
    return notices;
  } catch (error) {
    console.error(error);
  }
}
