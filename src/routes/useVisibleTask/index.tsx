import { component$ } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
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
			<div class='h-[400px] w-[10px]'>
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
			<div class='flex flex-col items-center'>
				<Link class='mt-8' href='/useVisibleTask/strategy'>
					{`Same component but with { strategy: 'document-ready' }`}
				</Link>
			</div>
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
