'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  cookies().delete('Access');
  cookies().delete('Refresh');
  await redirect('/club');
}
