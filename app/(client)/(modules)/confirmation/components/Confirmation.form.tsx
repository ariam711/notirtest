'use client';
import { FormContext } from '@form/form.context';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { LoginContext } from '#login/contexts/login.context';
import { Password } from '@field/Password';

export const ConfirmationForm = observer(function () {
  const { form } = useContext(LoginContext);
  return (
    <FormContext.Provider value={form}>
      <Password label="Contraseña" placeholder="PlaceHolder" />
      <Password name="passwordConfirm" label="Confirmación de contraseña" placeholder="PlaceHolder" />
    </FormContext.Provider>
  );
});
