import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { useAddUserAction } from '~/routes/routeAction';

export default component$(() => {
	const action = useAddUserAction();

	return (
		<div class='flex flex-col items-center text-black'>
			<h1 class='my-4'>This component show routeAction$ behaviour</h1>
			<h1 class='my-4'>Automatic trigger</h1>
			<Form action={action} class='flex flex-col items-center text-black'>
				<input class='my-4' name='name' />
				<div class='my-4'>
					<button class='text-black' type='submit'>
						Add user
					</button>
				</div>
			</Form>
			<div class='flex flex-col items-center text-black'>
				<h1 class='my-4'>Trigger manually</h1>
				<button
					class='my-4 text-black'
					onClick$={async () => {
						const { value } = await action.submit({ name: 'Giorgio' });
						console.log(value);
					}}
				>
					Add user
				</button>
			</div>
			{action.value?.success && (
				<>
					<div class='my-4'>User added successfully</div>
					<div class='my-4'>{JSON.stringify(action.value)}</div>
				</>
			)}
			{action.value?.failed && (
				<>
					<div class='my-4 text-red-700 underline font-bold'>Failed</div>
					<div class='my-4 text-red-700 underline font-bold'>
						message: {action.value.message}
					</div>
				</>
			)}
		</div>
	);
});
