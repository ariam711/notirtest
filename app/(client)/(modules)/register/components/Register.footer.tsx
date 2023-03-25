'use client';
import { observer } from 'mobx-react-lite';
import { Box } from '@ui/index';
import Link from 'next/link';

export const RegisterFooter = observer(function () {
  return (
    <Box sx={{ maxWidth: '300px', textAlign: 'center', fontSize: '12px' }}>
      Al hacer clic en &quot;Continuar&quot; arriba, usted reconoce que ha leído y entendido, y acepta los{' '}
      <Link href="/register"> Términos y condiciones</Link> y la <Link href="/register">Política de Privacidad</Link> de
      Notir.
    </Box>
  );
});
