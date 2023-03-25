import { MainContainer } from '#login/components/Main.container';
import { Metadata } from 'next';
import { Stack } from '@ui/index';
import { Suspense } from 'react';
import { SxProps } from '@mui/material/styles';
import { LooperLeftUp } from '@component/img/LooperLeftUp';
import { Illustration } from '@component/img/Illustration';
import { LooperRightDown } from '@component/img/LooperRightDown';

export const metadata: Metadata = {
  title: 'Login'
};

const SX_BACK: SxProps = {
  '&': {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    '.img-lu': {
      left: '0',
      top: '0px',
      position: 'relative',
      width: 'fit-content',
      height: '237px'
    },
    '.img-pic': {
      position: 'relative',
      top: '-62px',
      left: '-26px'
    },
    '.img-rd': {
      position: 'fixed',
      bottom: '-18px',
      right: '-16px'
    }
  }
};
export default function LoginPage() {
  return (
    <>
      <Suspense fallback="">
        <Stack sx={SX_BACK}>
          <LooperLeftUp />
          <Illustration />
          <LooperRightDown />
        </Stack>
      </Suspense>
      <MainContainer />
    </>
  );
}
