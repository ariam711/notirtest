import isEmail from 'validator/lib/isEmail';

export const vEmail = (v: string) => (/@/g.test(v) ? !isEmail(v) && 'Email no válido' : '');
