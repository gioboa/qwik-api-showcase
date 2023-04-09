import { component$ } from '@builder.io/qwik';
import { usePeopleLoader } from '~/routes/routeLoader';

export default component$(() => {
	const peopleSignal = usePeopleLoader();
	return (
		<div class='flex flex-col items-center'>
			<h1 class='my-4 text-black'>
				This component show routeLoader$ behaviour
			</h1>
			<div class='text-xl'>
				name: <span class='text-3xl'>{peopleSignal.value.name}</span>
			</div>
			<div class='text-xl'>
				gender: <span class='text-3xl'>{peopleSignal.value.gender}</span>
			</div>
		</div>
	);
});
