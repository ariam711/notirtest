import { Metadata } from 'next';
import { ConfirmBtn } from '#confirmation/components/Confirm.btn';
import { ConfirmationForm } from '#confirmation/components/Confirmation.form';

export const metadata: Metadata = {
  title: 'Confirmación'
};
export default function RegisterPage() {
  return (
    <>
      <ConfirmationForm />
      <ConfirmBtn />
    </>
  );
}
