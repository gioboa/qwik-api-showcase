import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import UseTaskWithDelay from '~/components/UseTaskWithDelay';

export default component$(() => {
	return <UseTaskWithDelay />;
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
