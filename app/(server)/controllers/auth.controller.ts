import { UserCredentialsType } from '~/user.type';

export class AuthController {
  authenticate = async (credentials: UserCredentialsType) => {
    return { id: 'User identifier', ...credentials };
  };
}

export const authCtrl = new AuthController();
