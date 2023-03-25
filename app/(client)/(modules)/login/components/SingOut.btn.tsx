'use client';
import { Button } from '@ui/index';
import { logout } from '#login/stores/logout.store';

export const SingOutBtn = function () {
  return <Button onClick={logout}>Salir de la sesión</Button>;
};
