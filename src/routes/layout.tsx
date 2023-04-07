import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export default component$(() => {
	return (
		<div class='page'>
			<main>
				<Header />
				<main>
					<div class='h-[1600px] text-3xl m-8'>
						<Slot />
					</div>
				</main>
			</main>
		</div>
	);
});
