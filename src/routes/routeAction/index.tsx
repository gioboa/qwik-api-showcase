import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeAction$, z, zod$ } from '@builder.io/qwik-city';
import RouteAction from '~/components/RouteAction';

export const useAddUserAction = routeAction$(
	async (user) => {
		// `user` is typed { name: string }
		console.log('user', user);
		return Math.random() > 0.5
			? { success: true, user }
			: { failed: true, message: 'Error message' };
	},
	zod$({
		name: z.string(),
	})
);

export default component$(() => {
	return <RouteAction />;
});

export const head: DocumentHead = {
	title: 'Qwik APIs Showcase',
	meta: [
		{
			name: 'description',
			content: 'Qwik APIs Showcase',
		},
	],
};
