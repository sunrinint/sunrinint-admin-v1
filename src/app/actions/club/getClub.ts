import { cookies } from 'next/headers';

export async function getClub() {
  'use server';
  try {
    const response = await fetch(`${process.env.API_URL}/club`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies().get('Access')?.value,
      },
      next: {
        tags: ['club'],
      },
    });
    const notices = await response.json();
    console.log(notices);
    return notices;
  } catch (error) {
    console.error(error);
  }
}
