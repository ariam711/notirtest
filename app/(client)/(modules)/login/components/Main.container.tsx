import { LoginForm } from '#login/components/Login.form';
import { SxProps } from '@mui/material/styles';
import { Box, Paper, Stack, Typography } from '@ui/index';
import { SignInBtn } from '#login/components/SignIn.btn';
import { RegisterBtn } from '#login/components/Register.btn';
import { LogoIco } from '@component/img/LogoIco';

const SX_CONTAINER: SxProps = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'fit-content',
  margin: 'auto',
  position: 'relative'
};
const SX_RIGHT: SxProps = {
  '& > *': { width: '100%' },
  '&': {
    borderRadius: '8px',
    boxShadow: '0 8px 20px rgba(9, 109, 202, 0.08)'
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: '52px 64px',
  width: '472px',
  height: '560px'
};
const SX_LEFT: SxProps = {
  '&': {
    width: '563px',
    height: '560px',
    alignItems: 'flex-start',
    mr: '67px',
    '& > svg': {
      width: 'auto',
      height: '58px'
    }
  }
};

export function MainContainer() {
  return (
    <Box sx={SX_CONTAINER}>
      <Stack sx={SX_LEFT}>
        <Typography color="primary" variant="h4" fontSize="36px">
          Bienvenido a
        </Typography>
        <LogoIco fontSize="large" />
      </Stack>
      <Paper sx={SX_RIGHT}>
        <Typography sx={{ fontSize: '20px', fontWeight: 700, letterSpacing: '0.01em' }} color="primary">
          Bienvenido a Notir
        </Typography>
        <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: '#636363', mb: '40px' }}>
          Acceda a su cuenta
        </Typography>
        <LoginForm />
        <Typography sx={{ fontSize: '1rem', fontWeight: 500, my: '40px' }} color="secondary">
          ¿Olvidaste tu contraseña?
        </Typography>
        <SignInBtn />
        <RegisterBtn />
      </Paper>
    </Box>
  );
}
