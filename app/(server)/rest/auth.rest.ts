import { BaseRest } from '$common/base.rest';
import { authCtrl } from '$ctrl/auth.controller';

export class AuthRest extends BaseRest {
  constructor() {
    super();
  }

  POST = async () => {
    try {
      const { body } = this.req as any;
      const response = await authCtrl.authenticate(body);
      return this.success(response);
    } catch (e) {
      return this.fail(e as never);
    }
  };
}

export const authRest = new AuthRest();
