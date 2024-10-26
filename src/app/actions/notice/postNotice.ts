'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function postNotice(formData: FormData) {
  try {
    const response = await fetch(`${process.env.API_URL}/notice`, {
      method: 'POST',
      body: JSON.stringify({
        title: formData.get('title'),
        content: formData.get('content'),
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies().get('Access')?.value,
      },
    });
    if (response.status === 201) {
      revalidateTag('notice');
    }
  } catch (error) {
    console.error(error);
  }
  await redirect('/notice');
}
