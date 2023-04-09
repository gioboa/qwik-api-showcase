import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import RouteLoader from '~/components/RouteLoader';

export const usePeopleLoader = routeLoader$(async () => {
	const response = await fetch('https://swapi.dev/api/people/1/');
	const people = await response.json();
	return people;
});

export default component$(() => {
	return <RouteLoader />;
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
