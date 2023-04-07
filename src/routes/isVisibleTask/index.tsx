import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import UseVisibleTask from '~/components/UseVisibleTask';

export default component$(() => {
	return (
		<>
			<UseVisibleTask />
			<div class='h-[1200px] w-[10px]'>
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
			<UseVisibleTask />
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
