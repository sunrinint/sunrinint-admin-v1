import { cookies } from 'next/headers';

export async function getClubById(id: string) {
  'use server';
  try {
    const response = await fetch(`${process.env.API_URL}/club/${id}`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies().get('Access')?.value,
      },
      next: {
        tags: ['clubitem'],
      },
    });
    const club = await response.json();
    return club;
  } catch (error) {
    console.error(error);
  }
}
