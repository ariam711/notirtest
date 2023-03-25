'use client';
import { Input } from '@field/Input';
import { FormContext } from '@form/form.context';
import { useContext } from 'react';
import { LoginContext } from '#login/contexts/login.context';
import { observer } from 'mobx-react-lite';
import { EmailIco, InputAdornment, PhoneIco } from '@ui/index';

export const RegisterForm = observer(function () {
  const { form } = useContext(LoginContext);
  return (
    <FormContext.Provider value={form}>
      <Input name="first" label="Primer nombre" placeholder="PlaceHolder" />
      <Input name="second" label="Segundo nombre" placeholder="PlaceHolder" />
      <Input
        name="email"
        label="Correo electrónico"
        placeholder="PlaceHolder"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIco />
            </InputAdornment>
          )
        }}
      />
      <Input
        name="phone"
        label="Número de teléfono"
        placeholder="PlaceHolder"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIco />
            </InputAdornment>
          )
        }}
      />
      <Input name="agency" label="Nombre de la agencia" placeholder="PlaceHolder" />
    </FormContext.Provider>
  );
});
