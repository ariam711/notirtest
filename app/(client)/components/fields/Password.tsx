'use client';
import { Input } from '@field/Input';
import { IconButton, InputAdornment } from '@ui/index';
import { useCallback, useState } from 'react';
import { ShowPassword } from '@component/img/ShowPassword';
import { HidePassword } from '@component/img/HidePassword';

export interface PasswordProps {
  name?: string;
  label?: string;
  placeholder?: string;
}
export const Password = function ({ name = 'password', label = 'Contraseña', placeholder }: PasswordProps) {
  const [show, setShow] = useState(false);
  const onClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <Input
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onClick}>{show ? <HidePassword /> : <ShowPassword />}</IconButton>
          </InputAdornment>
        )
      }}
      name={name}
      label={label}
      type={show ? 'text' : 'password'}
      placeholder={placeholder}
    />
  );
};
