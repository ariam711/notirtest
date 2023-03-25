/* eslint-disable max-len */
import { SvgIconProps } from '@mui/material/SvgIcon';
import { SvgIcon } from '@ui/index';

export function ShowPassword(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill="#9dc5ea"
        d="M18.31 5.45a15.58 15.58 0 0 1 4.63 6.23.8.8 0 0 1 0 .63c-2.3 5.31-6.39 8.49-10.94 8.49h-.01c-4.54 0-8.63-3.18-10.93-8.5a.8.8 0 0 1 0-.62C3.36 6.37 7.45 3.2 12 3.2c2.28 0 4.43.79 6.31 2.25ZM7.71 12A4.28 4.28 0 0 0 12 16.26 4.27 4.27 0 0 0 16.28 12a4.28 4.28 0 0 0-8.57 0Z"
      />
      <path fill="#096dca" d="M14.68 12a2.67 2.67 0 1 1-5.3-.52h.05a2.2 2.2 0 0 0 2.2-2.1A2.67 2.67 0 0 1 14.68 12" />
    </SvgIcon>
  );
}
