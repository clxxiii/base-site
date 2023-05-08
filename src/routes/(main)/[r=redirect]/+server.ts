import redirects from '$lib/redirects.json';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ params }) => {
	const link = redirects.find((x) => x.path === params.r);
	if (!link) throw error(500);
	throw redirect(302, link.dest);
}) satisfies RequestHandler;
