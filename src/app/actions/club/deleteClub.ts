'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function deleteClub(formData: FormData) {
  try {
    const response = await fetch(
      `${process.env.API_URL}/club/${formData.get('id')}`,
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
      revalidateTag('club');
    }
  } catch (error) {
    console.error(error);
  }
  await redirect('/club');
}
