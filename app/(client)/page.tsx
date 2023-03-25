import { authOptions } from '$auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { SingOutBtn } from '#login/components/SingOut.btn';
import { Metadata } from 'next';
import { Stack, Typography } from '@ui/index';
import { SxProps } from '@mui/material/styles';
import { LogoIco } from '@component/img/LogoIco';

export const metadata: Metadata = {
  title: 'Home'
};

const SX_CONTAINER: SxProps = {
  '&': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    '& > .MuiButton-root': {
      position: 'absolute',
      margin: '2rem',
      top: 0,
      right: 0,
      maxWidth: 'fit-content'
    },
    '& > .MuiSvgIcon-root': {
      width: 'auto',
      height: '100px'
    }
  }
};

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <Stack sx={SX_CONTAINER}>
      <Typography color="primary" variant="h4" fontSize="36px">
        Bienvenido a
      </Typography>
      <LogoIco fontSize="large" />
      <SingOutBtn />
    </Stack>
  );
}
