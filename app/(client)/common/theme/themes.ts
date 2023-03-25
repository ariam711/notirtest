import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';
import { nunito } from '@theme/font';

const themeBase: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        fullWidth: true,
        sx: {
          '&.MuiButtonBase-root': { textTransform: 'unset', fontSize: '14px', maxHeight: '33px', minWidth: '150px' }
        }
      }
    },
    MuiGrid: { defaultProps: { display: 'grid' } },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
        autoComplete: 'none',
        InputLabelProps: {
          shrink: true,
          sx: {
            color: '#1A1A1A',
            position: 'relative',
            left: '-15px',
            fontWeight: 700,
            top: '12px',
            fontSize: '20px',
            m: 0,
            lineHeight: '24px'
          }
        },
        sx: {
          minWidth: '300px',
          '&:not(:first-of-type)': { mt: '20px' },
          '& * fieldset': {
            '&.MuiOutlinedInput-notchedOutline': { top: 0, borderRadius: '4px' },
            '& > legend': { display: 'none' }
          }
        }
      }
    }
  },
  typography: { fontFamily: nunito.style.fontFamily }
};
export const LIGHT_THEME = createTheme({
  ...themeBase,
  palette: {
    mode: 'light',
    background: { default: '#fff' },
    primary: { main: '#12518C' },
    secondary: { main: '#096DCA' }
  }
});
