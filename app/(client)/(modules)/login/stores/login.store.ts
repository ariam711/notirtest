import { appStr } from '#main/store/app.store';
import { formFactory } from '@form/formFactory';
import { vRequired } from '@validator/requiered';
import { getSession, signIn } from 'next-auth/react';
import { UserCredentialsType } from '~/user.type';
import { vEmail } from '@validator/vEmail';

export class LoginStore {
  #form = formFactory<UserCredentialsType>({ email: '', password: '' });

  constructor() {
    const { email, password } = this.#form;
    email.withValidator(vRequired, vEmail);
    password.withValidator(vRequired);
  }

  get form() {
    return this.#form;
  }

  get isValid() {
    const { email, password } = this.#form;
    return !!email.value && !!password.value;
  }

  onClickSignIn = async () => {
    const { hasError } = await this.form.$.validate();
    if (!hasError) {
      try {
        // eslint-disable-next-line no-unused-vars
        await signIn('credentials', { ...this.form.$.values, redirect: false, callbackUrl: '/' });
        const { user } = (await getSession()) || { user: { id: '' } };

        appStr.setUser({ ...user } as any);
      } catch (e) {
        console.log(e);
      } finally {
        this.form.$.reset();
      }
    }
  };
}
