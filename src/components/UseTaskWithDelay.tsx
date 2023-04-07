import { component$, useTask$ } from '@builder.io/qwik';

const delay = (time: number) => new Promise((res) => setTimeout(res, time));

export default component$(() => {
	useTask$(async () => {
		await delay(10_000);
	});
	return (
		<div class='flex flex-col items-center'>
			<h1 class='my-4 text-black'>
				This component show useTask$ with forced delay
			</h1>
		</div>
	);
});
