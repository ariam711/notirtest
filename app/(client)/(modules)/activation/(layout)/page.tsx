import { Metadata } from 'next';
import { Grid, Typography } from '@ui/index';
import { ActivationForm } from '#activation/components/Activation.form';
import { VerifyBtn } from '#activation/components/Verify.btn';

export const metadata: Metadata = {
  title: 'Activación'
};
export default function ActivationPage() {
  return (
    <>
      <Typography>Hemos enviado un código de activación a:</Typography>
      <Typography
        sx={{
          '&': {
            color: '#828282',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            px: '5px',
            bgcolor: 'rgba(18, 18, 18, 0.03)',
            height: '25px'
          }
        }}
      >
        correo@correo.com
      </Typography>
      <Grid
        gridTemplateColumns="repeat(4,56px)"
        maxWidth="300px"
        columnGap="20px"
        my="50px"
        sx={{
          '& .MuiFormControl-root.MuiTextField-root': {
            m: 0,
            '& .MuiInputBase-root.MuiOutlinedInput-root': {
              maxWidth: '56px',
              minHeight: '56px',
              '&.Mui-disabled': { bgcolor: '#F2F2F2' }
            }
          }
        }}
      >
        <ActivationForm />
      </Grid>
      <VerifyBtn />
    </>
  );
}
