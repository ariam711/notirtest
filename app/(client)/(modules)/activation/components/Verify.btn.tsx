'use client';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { Button } from '@ui/index';
import { useRouter } from 'next/navigation';

export const VerifyBtn = observer(function () {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push('/confirmation');
  }, []);

  return (
    <Button size="small" onClick={onClick}>
      Verificar
    </Button>
  );
});
