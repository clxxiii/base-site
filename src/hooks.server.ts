import { getWellknownData } from '$lib/matrix-relay';
import { json, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith('/.well-known/matrix')) {
    const wellknownPath = event.url.pathname.split('/').slice(3);
    const wellknownData = await getWellknownData(wellknownPath, event.fetch);
    return json(wellknownData);
  }

  const response = await resolve(event);
  return response;
};
