'use client';
import { appStr } from '#main/store/app.store';
import { Input } from '@field/Input';
import { FormContext } from '@form/form.context';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { LoginContext } from '../contexts/login.context';
import { Password } from '@field/Password';

export const LoginForm = observer(function () {
  const router = useRouter();
  useEffect(() => {
    if (appStr.user.id) router.push('/');
  }, [appStr.user]);
  const { form } = useContext(LoginContext);
  return (
    <FormContext.Provider value={form}>
      <Input name="email" label="Usuario o correo electrónico" placeholder="ejemplo@email.com" />
      <Password name="password" placeholder="Introduce tu contraseña" />
    </FormContext.Provider>
  );
});
