'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { department } from '../constants/department';

export async function createClub(formData: FormData) {
  try {
    const logoFormData = new FormData();
    logoFormData.append('image', formData.get('logo') as Blob);
    const logo = await fetch('http://localhost:3000/upload/image', {
      method: 'POST',
      body: logoFormData,
      headers: {
        Authorization: 'Bearer ' + cookies().get('Access')?.value,
      },
    });
    const logoUrl = await logo.json();
    const darkLogoFormData = new FormData();
    darkLogoFormData.append('image', formData.get('logo_dark') as Blob);
    const logoDark = await fetch('http://localhost:3000/upload/image', {
      method: 'POST',
      body: darkLogoFormData,
      headers: {
        Authorization: 'Bearer ' + cookies().get('Access')?.value,
      },
    });
    const darkLogoUrl = await logoDark.json();
    const response = await fetch('http://localhost:3000/club', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        logo: logoUrl.url,
        logo_dark: darkLogoUrl.url,
        displayName: formData.get('displayName'),
        room: formData.get('room'),
        department: department[formData.get('department') as string],
        description: formData.get('description'),
        homepage: formData.get('homepage'),
        instagram: formData.get('instagram'),
        facebook: formData.get('facebook'),
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies().get('Access')?.value,
      },
    });
    if (response.status === 201) {
      revalidateTag('club');
    }
  } catch (error) {
    console.error(error);
  }
  await redirect('/club');
}
