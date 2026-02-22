import { env } from '$env/dynamic/private';

type ServerFetch = {
  (input: URL | RequestInfo, init?: RequestInit): Promise<Response>;
  (input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response>;
};

const error_msg = { errcode: 'M_UNRECOGNIZED', error: 'M_UNRECOGNIZED: Not Found' };

export const getWellknownData = async (wellknownPath: string[], fetch: ServerFetch) => {
  if (!env.MATRIX_RELAY_ADDRESS) return error_msg;
  const req_url = `${env.MATRIX_RELAY_ADDRESS}/.well-known/matrix/${wellknownPath.join('/')}`;
  const response = await fetch(req_url).catch(() => null);
  if (!response) return error_msg;
  const body = await response.json().catch(() => null);
  if (!body) return error_msg;
  return body;
};
