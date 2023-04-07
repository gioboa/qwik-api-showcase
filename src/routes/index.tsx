import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<div class='flex flex-col items-center'>
			<div class='my-4'>
				<a href='/useTask'>useTask$</a>
			</div>
			<div class='my-4'>
				<a href='/useTaskAndTrack'>useTask$ and track</a>
			</div>
			<div class='my-4'>
				<a href='/useTaskWithDelay'>useTask$ with delay</a>
			</div>
			<div class='my-4'>
				<a href='/useComputed'>useComputed$</a>
			</div>
			<div class='my-4'>
				<a href='/isVisibleTask'>isVisibleTask$</a>
			</div>
		</div>
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
