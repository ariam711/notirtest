import { serviceRestFactory } from '~svc/base.service';
import { EnvClient } from '@config/env.client';
import { UserCredentialsType } from '~/user.type';

function LoginService() {
  const { post } = serviceRestFactory(`${EnvClient.API}/login`);
  return {
    signIn: (data: UserCredentialsType) => post<any>('', { data, timeout: 240 })
  };
}

export const loginSvc = LoginService();
