import type { QwikChangeEvent } from '@builder.io/qwik';
import { component$, useComputed$, useSignal } from '@builder.io/qwik';

export default component$(() => {
	const textSignal = useSignal('test');
	const uppercaseSignal = useSignal(false);
	const computedSignal = useComputed$(() =>
		uppercaseSignal.value
			? textSignal.value.toUpperCase()
			: textSignal.value.toLowerCase()
	);
	return (
		<div class='flex flex-col items-center'>
			<h1 class='my-4 text-black'>
				This component show useComputed$ behaviour
			</h1>
			<div class='my-4'>uppercase or lowercase</div>
			<input
				type='checkbox'
				class='my-4 h-[20px] w-[20px]'
				checked={uppercaseSignal.value}
				onChange$={() => (uppercaseSignal.value = !uppercaseSignal.value)}
			/>
			<div class='my-4'>bind:value</div>
			<input class='my-4' bind:value={textSignal} />
			<div class='my-4'>value and onChange$ </div>
			<input
				class='my-4'
				value={textSignal.value}
				onChange$={(e: QwikChangeEvent<HTMLInputElement>) =>
					(textSignal.value = e.target.value)
				}
			/>
			<h3 class='my-4'>textSignal {textSignal.value}</h3>
			<h3 class='my-4'>computedSignal {computedSignal.value}</h3>
		</div>
	);
});
