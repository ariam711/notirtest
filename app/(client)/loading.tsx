import { ThemeWrapper } from '#main/components/ThemeWrapper';
import { SxProps } from '@mui/material/styles';
import { CircularProgress, Stack } from '@ui/index';
import { LogoIco } from '@component/img/LogoIco';

const STYLE: SxProps = {
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  background: `linear-gradient(287.74deg, #C5E3FF 0.03%, #EDFBFF 25.53%, #FFFFFF 70.81%)`,
  '& > svg': {
    animation: `2.8s ease-in-out 0.5s infinite normal none running breathe`,
    width: 'auto',
    height: 90
  }
};
export default function Loading() {
  console.log('Loading');
  return (
    <ThemeWrapper>
      <Stack sx={STYLE} position="fixed">
        <LogoIco fontSize="large" />
        <CircularProgress variant="indeterminate" size={40} thickness={6} value={100} />
      </Stack>
    </ThemeWrapper>
  );
}
