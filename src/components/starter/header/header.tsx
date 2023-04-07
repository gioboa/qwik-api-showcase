import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

export default component$(() => {
	return (
		<header class={styles.header}>
			<div class={styles.logo}>
				<a href='/' title='qwik'>
					<QwikLogo />
				</a>
			</div>
		</header>
	);
});
