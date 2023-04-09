import { component$, useSignal } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';

// By wrapping a function with `server$()` we mark it to always
// execute on the server. This is a form of RPC mechanism.
const serverGreeter = server$((name) => {
	const greeting = 'Hello ' + name;
	console.log('SERVER', greeting);
	return greeting;
});

export default component$(() => {
	const nameSignal = useSignal('');
	return (
		<div class='flex flex-col items-center'>
			<h1 class='my-4 text-black'>This component show useServer$ behaviour</h1>
			<h1>
				Name: <input bind:value={nameSignal} />
			</h1>
			<button
				class='my-4 text-black'
				onClick$={async () => {
					const greeting = await serverGreeter(nameSignal.value);
					alert(greeting);
				}}
			>
				server$
			</button>
		</div>
	);
});
