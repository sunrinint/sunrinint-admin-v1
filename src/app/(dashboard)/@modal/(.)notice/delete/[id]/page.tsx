import { Modal } from './modal';

export default function DeleteModal({
  params: { id },
}: {
  params: { id: string };
}) {
  return <Modal id={id} />;
}
