import { LayoutProps } from '@/layout.type';
import { RegisterMainLayout } from '@component/layouts/RegisterMain.layout';

export default function ActivationLayout({ children }: LayoutProps) {
  return (
    <RegisterMainLayout title="Activación" sx={{ '.MuiButtonBase-root': { width: 'fit-content' } }}>
      {children}
    </RegisterMainLayout>
  );
}
