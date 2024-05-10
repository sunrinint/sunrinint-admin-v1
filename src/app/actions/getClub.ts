import { cookies } from 'next/headers';

export async function getClub() {
  'use server';
  try {
    const response = await fetch('http://localhost:3000/club', {
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
    return notices;
  } catch (error) {
    console.error(error);
  }
}
