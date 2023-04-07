import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import UseTask from '~/components/UseTask';

export default component$(() => {
	return <UseTask />;
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
