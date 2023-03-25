'use client';
import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { Button } from '@ui/index';
import { useRouter } from 'next/navigation';

export const ContinueBtn = observer(function () {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push('/activation');
  }, []);
  return <Button onClick={onClick}>Continuar</Button>;
});
