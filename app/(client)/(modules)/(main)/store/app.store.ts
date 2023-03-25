import { getStorage, removeStorage, setStorage } from '@util/storage';
import { action, makeObservable, observable } from 'mobx';

class AppStore {
  private _user: any;
  constructor() {
    this._user = getStorage('fs-session-profile') || {};
    makeObservable<AppStore, '_user'>(this, {
      _user: observable,

      setUser: action
    });
  }

  setUser = (user: any, saveProfile = true) => {
    saveProfile && setStorage('fs-session-profile', user);
    this._user = user;
  };
  get user(): any {
    return this._user;
  }
  get isLogged() {
    return !!this.user?.id;
  }

  clearSession = () => {
    this.setUser({ user: { id: '' } } as any, false);
    removeStorage('fs-session-profile');
  };
}

export const appStr = new AppStore();
