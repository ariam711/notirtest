import { LoginStore } from '../stores/login.store';
import { createContext } from 'react';

export const LoginContext = createContext(new LoginStore());
