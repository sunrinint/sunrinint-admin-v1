import React from 'react';
import { getClubById } from '@/app/actions/club/getClubById';
import EditClubForm from '@/app/_components/form/EditClubForm';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const clubData = await getClubById(id);

  return <EditClubForm clubData={clubData} />;
}
