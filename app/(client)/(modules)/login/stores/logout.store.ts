import { signOut } from 'next-auth/react';
import { appStr } from '#main/store/app.store';

export async function logout() {
  await signOut();
  appStr.clearSession();
}
