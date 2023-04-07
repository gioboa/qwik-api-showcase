import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import UseVisibleTaskStrategy from '~/components/UseVisibleTaskStrategy';

export default component$(() => {
	return (
		<>
			<UseVisibleTaskStrategy />
			<div class='h-[1200px] w-[10px]'>
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
			<UseVisibleTaskStrategy />
		</>
	);
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
