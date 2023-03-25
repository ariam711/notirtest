// noinspection JSUnusedGlobalSymbols

import { authOptions } from '$auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { MethodType } from '~svc/types.service';

type Rest = {
  [K in MethodType]: () => void;
};

const REQ_URL_MATCH = /\/api\/login|\/api\/auth\/.*/;

export class BaseRest implements Rest {
  #req: NextApiRequest = undefined as unknown as NextApiRequest;
  #res: NextApiResponse = undefined as unknown as NextApiResponse;

  protected get req() {
    return this.#req;
  }

  protected get res() {
    return this.#res;
  }

  protected get method(): MethodType {
    return this.req.method as MethodType;
  }

  #notAllowed = () => this.res.status(405).json(null);

  POST = () => this.#notAllowed();
  PUT = () => this.#notAllowed();
  GET = () => this.#notAllowed();
  DELETE = () => this.#notAllowed();
  PATCH = () => this.#notAllowed();

  call = async (req: NextApiRequest, res: NextApiResponse) => {
    this.#req = req;
    this.#res = res;
    const session = await getServerSession(req, res, authOptions);
    if (!session && !REQ_URL_MATCH.test(String(req.url))) {
      return this.fail({ statusCode: 401, message: 'You must be logged in.' } as never);
    }
    return this[this.method]();
  };

  protected success = <T = never>(data?: T) => this.res.status(data ? 200 : 201).json({ ok: true, data });
  protected fail = (errors: any) => {
    const { statusCode, message } = errors;
    this.res.status(statusCode).json({ error: { statusCode, message } });
  };
}
