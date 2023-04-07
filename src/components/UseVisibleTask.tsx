import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
	const isVisibleSignal = useSignal('No');
	useVisibleTask$(() => {
		isVisibleSignal.value = 'Yes';
	});
	return (
		<div class='flex flex-col items-center'>
			<h1 class='my-4 text-black'>This component show useVisibleTask$</h1>
			<h1 class='my-4 text-black'>is it visible? {isVisibleSignal.value}</h1>
		</div>
	);
});
