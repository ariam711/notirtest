import { LayoutProps } from '@/layout.type';
import { RegisterMainLayout } from '@component/layouts/RegisterMain.layout';

export default function ConfirmationLayout({ children }: LayoutProps) {
  return (
    <RegisterMainLayout title="Estamos terminando" sx={{ '.MuiButtonBase-root': { my: '40px' } }}>
      {children}
    </RegisterMainLayout>
  );
}
