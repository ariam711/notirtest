'use client';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { Button } from '@ui/index';
import { useRouter } from 'next/navigation';

export const ConfirmBtn = observer(function () {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push('/');
  }, []);
  return <Button onClick={onClick}>Confirmar</Button>;
});
