import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import UseTaskAndTrack from '~/components/UseTaskAndTrack';

export default component$(() => {
	return <UseTaskAndTrack />;
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
