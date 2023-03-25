import { loginSvc } from '#login/services/login.service';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserCredentialsType } from '~/user.type';

export const authOptions: NextAuthOptions = {
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub || '';
      return session;
    }
  },
  debug: process.env.NODE_ENV !== 'production',
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    maxAge: Number(process.env.NEXTAUTH_MAXAGE || 30 * 60)
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as unknown as UserCredentialsType;
        const { ok, data } = await loginSvc.signIn({ email, password });

        return ok ? data : null;
      }
    })
  ]
};

export default NextAuth(authOptions);
