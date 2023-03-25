import { ValuesType } from '~/generics.type';

export const EnvClient = {
  API: process.env.NEXT_PUBLIC_API
} as const;

export type EnvClientType = ValuesType<typeof EnvClient>;
