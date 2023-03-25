import { FieldStateType } from '@form/formFactory';

export const vConfirmationPassword = (confirmation: FieldStateType<string>) => (v: string) =>
  v !== confirmation.value && 'Las contraseñas deben coincidir';
