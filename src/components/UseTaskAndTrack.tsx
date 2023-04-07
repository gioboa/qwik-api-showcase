import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { isBrowser, isServer } from '@builder.io/qwik/build';

export default component$(() => {
	const renderSignal = useSignal('');
	const stateSignal = useSignal(true);

	useTask$(({ track, cleanup }) => {
		console.log('-------> useTask$ <-------');
		if (isServer) {
			renderSignal.value = 'server';
		}
		if (isBrowser) {
			renderSignal.value = 'browser';
		}
		const trackResult = track(() => stateSignal.value);
		console.log('trackResult', trackResult);
		cleanup(() =>
			console.log(
				'cleanup\n',
				'----\n',
				"When a new task is triggered, the previous task's cleanup() callback is invoked. (Also when the component is removed from the DOM then the cleanup() callback is also invoked.)"
			)
		);
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

			<Link class='mt-8' href='/useTaskAndTrack/again'>
				Same component but navigation with `Link component`
			</Link>

			<div class='my-4'>change state</div>
			{stateSignal.value}
			<input
				type='checkbox'
				class='my-4 h-[20px] w-[20px]'
				checked={stateSignal.value}
				onChange$={() => (stateSignal.value = !stateSignal.value)}
			/>
		</div>
	);
});
