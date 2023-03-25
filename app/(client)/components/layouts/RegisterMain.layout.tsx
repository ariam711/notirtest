import { Box, Grid, Stack, Typography } from '@ui/index';
import { PropsWithChildren, Suspense } from 'react';
import { SxProps } from '@mui/material/styles';
import { Illustration } from '@component/img/Illustration';

const MAIN_SX: SxProps = {
  '&': {
    alignItems: 'center',
    height: '100%',
    maxWidth: '1366px',
    margin: 'auto',
    '.img-pic': {
      height: '768px',
      width: 'auto'
    }
  }
};
const RIGHT_SX: SxProps = {
  '&': {
    width: '600px',
    height: '768px',
    bgcolor: '#fff',
    position: 'relative',
    '& > .MuiStack-root': {
      maxWidth: '300px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      height: '100%'
    }
  }
};

interface RegisterLayoutProps extends PropsWithChildren {
  title: string;
  sx?: SxProps;
}
export function RegisterMainLayout({ children, title, sx }: RegisterLayoutProps) {
  return (
    <Grid sx={MAIN_SX} gridTemplateColumns="1fr 600px">
      <Suspense fallback="">
        <Illustration />
      </Suspense>
      <Box sx={RIGHT_SX}>
        <Stack sx={sx}>
          <Typography
            color="primary"
            fontSize="48px"
            fontWeight="700"
            maxWidth="300px"
            textAlign="center"
            lineHeight="54px"
            mb="40px"
          >
            {title}
          </Typography>
          {children}
        </Stack>
      </Box>
    </Grid>
  );
}
