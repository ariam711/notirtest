'use client';
import { Input } from '@field/Input';
import { FormContext } from '@form/form.context';
import { useContext } from 'react';
import { LoginContext } from '#login/contexts/login.context';
import { observer } from 'mobx-react-lite';

export const ActivationForm = observer(function () {
  const { form } = useContext(LoginContext);
  return (
    <FormContext.Provider value={form}>
      <Input name="code1" />
      <Input name="code2" disabled />
      <Input name="code3" disabled />
      <Input name="code4" disabled />
    </FormContext.Provider>
  );
});
