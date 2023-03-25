import { RegisterForm } from '#register/components/Register.form';
import { Metadata } from 'next';
import { ContinueBtn } from '#register/components/Continue.btn';
import { RegisterFooter } from '#register/components/Register.footer';

export const metadata: Metadata = {
  title: 'Registrarse'
};
export default function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <ContinueBtn />
      <RegisterFooter />
    </>
  );
}
