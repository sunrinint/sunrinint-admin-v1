'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  try {
    const response = await fetch(`${process.env.API_URL}/admin/login`, {
      method: 'POST',
      body: JSON.stringify({
        id: formData.get('id'),
        password: formData.get('password'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    if (response.headers.get('set-cookie')) {
      const refresh = response.headers
        .get('set-cookie')
        ?.split('Refresh=')[1]
        .split(';')[0];
      cookies().set({
        name: 'Refresh',
        value: refresh!!,
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 60 * 60 * 24 * 7,
      });
    }
    const access = await fetch(`${process.env.API_URL}/admin/refresh`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'Refresh=' + cookies().get('Refresh')?.value!!,
      },
    });
    const accessToken = await access.json();
    if (accessToken.accessToken) {
      cookies().set({
        name: 'Access',
        value: accessToken.accessToken,
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 60 * 60,
      });
    }
  } catch (error) {
    console.error(error);
  }
  await redirect('../notice');
}
