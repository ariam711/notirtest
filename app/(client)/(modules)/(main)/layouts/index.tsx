import { ThemeWrapper } from '#main/components/ThemeWrapper';
import { LayoutProps } from '@/layout.type';
import { Container, CssBaseline } from '@ui/index';
import { SxProps } from '@mui/material/styles';

const SX_CONTAINER: SxProps = {
  '&': {
    position: 'fixed',
    maxWidth: '100%',
    minHeight: '100%',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'auto',
    background: 'linear-gradient(287.74deg,#C5E3FF 0.03%,#EDFBFF 25.53%,#FFF 70.81%)',
    m: 0,
    p: 0
  }
};

export default function MainLayout({ children }: LayoutProps) {
  console.log('MainLayout');
  return (
    <ThemeWrapper>
      <CssBaseline />
      <Container sx={SX_CONTAINER}>{children}</Container>
    </ThemeWrapper>
  );
}
