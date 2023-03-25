'use client';
import { useCallback } from 'react';
import { Button } from '@ui/index';
import { useRouter } from 'next/navigation';

export const RegisterBtn = function () {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push('/register');
  }, []);
  return (
    <Button size="small" onClick={onClick} variant="text">
      Registrarse
    </Button>
  );
};
