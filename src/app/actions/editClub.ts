'use server';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { department } from '../constants/department';
import { NextResponse } from 'next/server';

export async function editClub(formData: FormData) {
  try {
    if ((formData.get('logo_new') as File).size > 0) {
      const logoFormData = new FormData();
      logoFormData.append('image', formData.get('logo_new') as Blob);
      const logo = await fetch('http://localhost:3000/upload/image', {
        method: 'POST',
        body: logoFormData,
        headers: {
          Authorization: 'Bearer ' + cookies().get('Access')?.value,
        },
      });
      const logoUrl = await logo.json();
      formData.set('logo', logoUrl.url);
    }
    if ((formData.get('logo_dark_new') as File).size > 0) {
      const darkLogoFormData = new FormData();
      darkLogoFormData.append('image', formData.get('logo_dark_new') as Blob);
      const logoDark = await fetch('http://localhost:3000/upload/image', {
        method: 'POST',
        body: darkLogoFormData,
        headers: {
          Authorization: 'Bearer ' + cookies().get('Access')?.value,
        },
      });
      const darkLogoUrl = await logoDark.json();
      formData.set('logo_dark', darkLogoUrl.url);
    }
    const requestBody = {
      name: formData.get('name'),
      displayName: formData.get('displayName'),
      room: formData.get('room'),
      logo: formData.get('logo'),
      logo_dark: formData.get('logo_dark'),
      department: department[formData.get('department') as string],
      description: formData.get('description'),
      homepage: formData.get('homepage'),
      instagram: formData.get('instagram'),
      facebook: formData.get('facebook'),
    };
    const response = await fetch(
      'http://localhost:3000/club/' + formData.get('id'),
      {
        method: 'PATCH',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + cookies().get('Access')?.value,
        },
      },
    );
    if (response.status === 201) {
      revalidateTag('club');
    }
  } catch (error) {
    console.error(error);
  }
  await redirect('../club');
}
