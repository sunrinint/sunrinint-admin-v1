import { cookies } from 'next/headers';

export async function getUsers() {
  'use server';
  const accessToken = cookies().get('Access')?.value;
  try {
    const response = await fetch(`${process.env.API_URL}/user`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    });
    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
}
