'use client';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { LoginContext } from '../contexts/login.context';
import { Button } from '@ui/index';

export const SignInBtn = observer(function () {
  const store = useContext(LoginContext);
  return (
    <Button onClick={store.onClickSignIn} disabled={!store.isValid}>
      Iniciar sesión
    </Button>
  );
});
