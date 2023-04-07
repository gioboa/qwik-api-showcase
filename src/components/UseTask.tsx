import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { isBrowser, isServer } from '@builder.io/qwik/build';

export default component$(() => {
	const renderSignal = useSignal('');
	useTask$(() => {
		console.log('-------> useTask$ <-------');
		if (isServer) {
			renderSignal.value = 'server';
		}
		if (isBrowser) {
			renderSignal.value = 'browser';
		}
	});
	return (
		<div class='flex flex-col items-center'>
			<h1 class='my-4 text-black'>This component show useTask$ behaviour</h1>
			<h3 class='my-4'>
				Use task ran in the{' '}
				<span class='text-red-700 underline font-bold'>
					{renderSignal.value.toUpperCase()}
				</span>
			</h3>
			<>
				<div class='my-4'>{`useTask$ -------> RENDER ---> useVisibleTask$`}</div>
				<div class='my-4'>- SERVER or BROWSER - | ------- BROWSER -------</div>
				<div class='my-4'>-- pause | resume -</div>
			</>

			<Link class='mt-8' href='/useTask/again'>
				Same component but navigation with `Link component`
			</Link>
		</div>
	);
});
