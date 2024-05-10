'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function deleteNotice(formData: FormData) {
  try {
    const response = await fetch(
      `http://localhost:3000/notice/${formData.get('id')}`,
      {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + cookies().get('Access')?.value,
        },
      },
    );
    console.log(await response.json());
    if (response.status === 201) {
      revalidateTag('notice');
    }
  } catch (error) {
    console.error(error);
  }
  await redirect('/notice');
}
