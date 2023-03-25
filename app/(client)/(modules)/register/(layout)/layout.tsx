import { LayoutProps } from '@/layout.type';
import { RegisterMainLayout } from '@component/layouts/RegisterMain.layout';

export default function RegisterLayout({ children }: LayoutProps) {
  return (
    <RegisterMainLayout title="Regístrate" sx={{ '.MuiButtonBase-root': { my: '40px' } }}>
      {children}
    </RegisterMainLayout>
  );
}
